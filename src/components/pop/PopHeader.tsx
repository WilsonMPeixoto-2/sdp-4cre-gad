import { FileText, Printer, Download, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface PopHeaderProps {
  onPrint: () => void;
}

export const PopHeader = ({ onPrint }: PopHeaderProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
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

  return (
    <header className="sticky top-0 z-50 shadow-xl no-print glass-effect" style={{ background: 'linear-gradient(90deg, hsl(215, 75%, 32%) 0%, hsl(215, 75%, 28%) 50%, hsl(215, 75%, 32%) 100%)' }}>
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo and Title */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-xl shadow-lg shrink-0">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
            </div>
            <div className="min-w-0">
              <h1 className="text-sm sm:text-lg lg:text-xl font-heading font-bold text-primary-foreground truncate tracking-tight">
                Procedimento Operacional Padrão
              </h1>
              <p className="text-xs sm:text-sm text-primary-foreground/70 hidden sm:block">
                4ª Coordenadoria Regional de Educação | GAD
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="text-primary-foreground hover:bg-primary-foreground/10 h-9 w-9 sm:h-10 sm:w-10 transition-all duration-200"
              title={isDark ? "Modo claro" : "Modo escuro"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onPrint}
              className="text-primary-foreground hover:bg-primary-foreground/10 h-9 w-9 sm:h-10 sm:w-auto sm:px-4 transition-all duration-200"
            >
              <Printer className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Imprimir</span>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={onPrint}
              className="h-9 w-9 sm:h-10 sm:w-auto sm:px-4 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Download className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Download</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
