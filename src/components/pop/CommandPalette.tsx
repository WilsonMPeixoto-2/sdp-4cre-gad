import { useState, useEffect, useCallback, useRef } from 'react';
import { Search, FileText, Hash, X, ArrowRight } from 'lucide-react';
import { searchContent, SearchItem } from '@/lib/searchIndex';

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (sectionId: string) => void;
}

export const CommandPalette = ({ isOpen, onClose, onNavigate }: CommandPaletteProps) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchItem[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const resultsRef = useRef<HTMLDivElement>(null);

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            setQuery('');
            setResults([]);
            setActiveIndex(0);
        }
    }, [isOpen]);

    // Handle search
    useEffect(() => {
        const searchResults = searchContent(query);
        setResults(searchResults);
        setActiveIndex(0);
    }, [query]);

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setActiveIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
                break;
            case 'ArrowUp':
                e.preventDefault();
                setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
                break;
            case 'Enter':
                e.preventDefault();
                if (results[activeIndex]) {
                    onNavigate(results[activeIndex].sectionId);
                    onClose();
                }
                break;
            case 'Escape':
                onClose();
                break;
        }
    }, [results, activeIndex, onNavigate, onClose]);

    // Scroll active item into view
    useEffect(() => {
        if (resultsRef.current) {
            const activeItem = resultsRef.current.querySelector('.active');
            if (activeItem) {
                activeItem.scrollIntoView({ block: 'nearest' });
            }
        }
    }, [activeIndex]);

    // Handle global keyboard shortcut
    useEffect(() => {
        const handleGlobalKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                if (!isOpen) {
                    // This will be handled by the parent
                }
            }
        };

        document.addEventListener('keydown', handleGlobalKeyDown);
        return () => document.removeEventListener('keydown', handleGlobalKeyDown);
    }, [isOpen]);

    if (!isOpen) return null;

    const handleItemClick = (item: SearchItem) => {
        onNavigate(item.sectionId);
        onClose();
    };

    return (
        <div
            className="command-palette-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Busca no documento"
        >
            <div
                className="command-palette mx-4"
                onClick={e => e.stopPropagation()}
            >
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                    <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Buscar no manual..."
                        className="command-palette-input !p-0 !border-0"
                        aria-label="Campo de busca"
                    />
                    <div className="flex items-center gap-1 shrink-0">
                        <kbd className="command-palette-kbd">ESC</kbd>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-secondary rounded-md transition-colors"
                        aria-label="Fechar busca"
                    >
                        <X className="w-4 h-4 text-muted-foreground" />
                    </button>
                </div>

                {/* Results */}
                <div ref={resultsRef} className="command-palette-results">
                    {query.length < 2 ? (
                        <div className="p-6 text-center">
                            <p className="text-muted-foreground text-sm">
                                Digite ao menos 2 caracteres para buscar...
                            </p>
                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                                {['NUP', 'Despacho', 'ND 435', 'Enviar', 'GAD'].map(term => (
                                    <button
                                        key={term}
                                        onClick={() => setQuery(term)}
                                        className="px-3 py-1.5 text-sm bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                                    >
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : results.length === 0 ? (
                        <div className="p-6 text-center text-muted-foreground">
                            <p>Nenhum resultado encontrado para "{query}"</p>
                        </div>
                    ) : (
                        <div className="py-2">
                            <p className="px-4 py-1 text-xs text-muted-foreground uppercase tracking-wide">
                                {results.length} resultado{results.length !== 1 ? 's' : ''}
                            </p>
                            {results.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleItemClick(item)}
                                    className={`command-palette-item w-full text-left ${index === activeIndex ? 'active' : ''}`}
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        {item.sectionNumber === 'A' ? (
                                            <FileText className="w-4 h-4 text-primary" />
                                        ) : (
                                            <Hash className="w-4 h-4 text-primary" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-foreground truncate">{item.title}</p>
                                        {item.subtitle && (
                                            <p className="text-sm text-muted-foreground truncate">{item.subtitle}</p>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                                            Seção {item.sectionNumber}
                                        </span>
                                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-4 py-2 border-t border-border bg-secondary/30 flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                            <kbd className="command-palette-kbd">↑</kbd>
                            <kbd className="command-palette-kbd">↓</kbd>
                            navegar
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="command-palette-kbd">↵</kbd>
                            selecionar
                        </span>
                    </div>
                    <span className="flex items-center gap-1">
                        <kbd className="command-palette-kbd">⌘</kbd>
                        <kbd className="command-palette-kbd">K</kbd>
                        abrir busca
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
