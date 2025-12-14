import { FileText, Printer, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PopHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onPrint: () => void;
}

export const PopHeader = ({ searchQuery, onSearchChange, onPrint }: PopHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg no-print">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 bg-accent rounded-lg shadow-md">
              <FileText className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-heading font-bold text-primary-foreground">
                Procedimento Operacional Padrão
              </h1>
              <p className="text-sm text-primary-foreground/80">
                4ª Coordenadoria Regional de Educação | GAD
              </p>
            </div>
          </div>

          {/* Search and Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1 sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar no documento..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-primary-foreground/20"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={onPrint}
                className="flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Imprimir</span>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={onPrint}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
