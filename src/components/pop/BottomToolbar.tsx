import { Printer, Download, Moon, Sun, Monitor, Smartphone, FileText, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface BottomToolbarProps {
  onPrint: () => void;
}

type ViewMode = 'auto' | 'desktop' | 'mobile';

export const BottomToolbar = ({ onPrint }: BottomToolbarProps) => {
  const [isDark, setIsDark] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('auto');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }

    const savedViewMode = localStorage.getItem('viewMode') as ViewMode;
    if (savedViewMode) {
      setViewMode(savedViewMode);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const applyViewMode = (mode: ViewMode) => {
    document.documentElement.classList.remove('force-mobile', 'force-desktop');
    if (mode === 'mobile') {
      document.documentElement.classList.add('force-mobile');
    } else if (mode === 'desktop') {
      document.documentElement.classList.add('force-desktop');
    }
  };

  const cycleViewMode = () => {
    const modes: ViewMode[] = ['auto', 'desktop', 'mobile'];
    const currentIndex = modes.indexOf(viewMode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    setViewMode(nextMode);
    applyViewMode(nextMode);
    localStorage.setItem('viewMode', nextMode);
  };

  const getViewModeIcon = () => {
    switch (viewMode) {
      case 'mobile':
        return <Smartphone className="w-4 h-4" />;
      case 'desktop':
        return <Monitor className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4 opacity-60" />;
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'POP - Prestação de Contas SDP no SEI!RIO',
          text: 'Guia operacional para prestação de contas do SDP',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Compartilhamento cancelado');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <TooltipProvider>
      <div className="fixed bottom-0 left-0 right-0 z-50 no-print">
        {/* Gradient fade effect */}
        <div className="h-8 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />

        {/* Main toolbar */}
        <div className="bg-background/90 backdrop-blur-xl border-t border-border/60 shadow-[0_-10px_35px_-18px_hsl(214_40%_20%/_0.45)]">
          <div className="container mx-auto px-4 py-2 sm:py-3">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              {/* Document info */}
              <div className="hidden sm:flex items-center gap-3 min-w-0">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-lg">
                  <FileText className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-medium text-primary truncate">POP SDP 2026</span>
                </div>
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg">
                  <BookOpen className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="text-xs text-muted-foreground truncate">4ª CRE • GAD</span>
                </div>
              </div>

              {/* Mobile label */}
              <div className="sm:hidden flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-foreground">POP SDP</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 sm:gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={cycleViewMode}
                      aria-label="Alternar visualização"
                      className={`h-9 w-9 rounded-xl ${viewMode !== 'auto' ? 'bg-muted' : ''}`}
                    >
                      {getViewModeIcon()}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Alternar visualização</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleDarkMode}
                      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
                      className="h-9 w-9 rounded-xl"
                    >
                      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{isDark ? "Modo claro" : "Modo escuro"}</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleShare}
                      aria-label="Compartilhar página"
                      className="h-9 w-9 rounded-xl"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Compartilhar</p>
                  </TooltipContent>
                </Tooltip>

                <div className="w-px h-6 bg-border mx-1 hidden sm:block" />

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onPrint}
                      aria-label="Imprimir documento"
                      className="h-9 w-9 sm:w-auto sm:px-3 rounded-xl"
                    >
                      <Printer className="w-4 h-4 sm:mr-2" />
                      <span className="hidden sm:inline text-sm">Imprimir</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="sm:hidden">
                    <p>Imprimir</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={onPrint}
                      aria-label="Baixar PDF"
                      className="h-9 px-3 sm:px-4 rounded-xl shadow-md btn-premium hover-glow"
                    >
                      <Download className="w-4 h-4 sm:mr-2" />
                      <span className="hidden sm:inline text-sm">Download PDF</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="sm:hidden">
                    <p>Download PDF</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
