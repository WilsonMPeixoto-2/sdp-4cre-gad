import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Share2, X, Copy, Check, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ShareQRCodeProps {
    sectionId?: string;
    sectionTitle?: string;
}

export const ShareQRCode = ({ sectionId, sectionTitle }: ShareQRCodeProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const baseUrl = typeof window !== 'undefined'
        ? window.location.origin + window.location.pathname
        : 'https://sdp-4cre.lovable.app';

    const shareUrl = sectionId
        ? `${baseUrl}#${sectionId}`
        : baseUrl;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    const handleDownload = () => {
        const svg = document.querySelector('.qr-code-svg');
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const svgUrl = URL.createObjectURL(svgBlob);

        const link = document.createElement('a');
        link.href = svgUrl;
        link.download = `qr-code-sdp${sectionId ? `-${sectionId}` : ''}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(svgUrl);
    };

    if (!isOpen) {
        return (
            <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(true)}
                className="gap-2"
                aria-label="Compartilhar via QR Code"
            >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">QR Code</span>
            </Button>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
            <div
                className="bg-card rounded-2xl shadow-2xl p-6 max-w-sm mx-4 animate-fade-in"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-bold text-lg">Compartilhar</h3>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-secondary rounded-lg transition-colors"
                        aria-label="Fechar"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {sectionTitle && (
                    <p className="text-sm text-muted-foreground mb-4">
                        {sectionTitle}
                    </p>
                )}

                <div className="qr-code-container mx-auto mb-4">
                    <QRCodeSVG
                        value={shareUrl}
                        size={180}
                        level="M"
                        includeMargin={false}
                        className="qr-code-svg"
                        bgColor="#ffffff"
                        fgColor="#1e3a8a"
                    />
                    <p className="text-muted-foreground mt-2">
                        Escaneie para acessar
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCopy}
                            className="flex-1 gap-2"
                        >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copiado!' : 'Copiar Link'}
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleDownload}
                            className="gap-2"
                            aria-label="Baixar QR Code"
                        >
                            <Download className="w-4 h-4" />
                        </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center truncate px-2">
                        {shareUrl}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShareQRCode;
