import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'sdp-reading-progress';

interface ReadingProgress {
    [sectionId: string]: {
        read: boolean;
        timestamp: number;
    };
}

export const useReadingProgress = () => {
    const [progress, setProgress] = useState<ReadingProgress>({});

    // Load progress from localStorage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                setProgress(JSON.parse(stored));
            }
        } catch (error) {
            console.error('Error loading reading progress:', error);
        }
    }, []);

    // Save progress to localStorage whenever it changes
    const saveProgress = useCallback((newProgress: ReadingProgress) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
            setProgress(newProgress);
        } catch (error) {
            console.error('Error saving reading progress:', error);
        }
    }, []);

    // Mark a section as read
    const markAsRead = useCallback((sectionId: string) => {
        const newProgress = {
            ...progress,
            [sectionId]: {
                read: true,
                timestamp: Date.now(),
            },
        };
        saveProgress(newProgress);
    }, [progress, saveProgress]);

    // Toggle section read status
    const toggleRead = useCallback((sectionId: string) => {
        const currentStatus = progress[sectionId]?.read ?? false;
        const newProgress = {
            ...progress,
            [sectionId]: {
                read: !currentStatus,
                timestamp: Date.now(),
            },
        };
        saveProgress(newProgress);
    }, [progress, saveProgress]);

    // Check if a section is read
    const isRead = useCallback((sectionId: string): boolean => {
        return progress[sectionId]?.read ?? false;
    }, [progress]);

    // Get total read count
    const getReadCount = useCallback((): number => {
        return Object.values(progress).filter(p => p.read).length;
    }, [progress]);

    // Reset all progress
    const resetProgress = useCallback(() => {
        localStorage.removeItem(STORAGE_KEY);
        setProgress({});
    }, []);

    // Get progress percentage
    const getProgressPercentage = useCallback((totalSections: number): number => {
        if (totalSections === 0) return 0;
        const readCount = getReadCount();
        return Math.round((readCount / totalSections) * 100);
    }, [getReadCount]);

    return {
        progress,
        markAsRead,
        toggleRead,
        isRead,
        getReadCount,
        resetProgress,
        getProgressPercentage,
    };
};

export default useReadingProgress;
