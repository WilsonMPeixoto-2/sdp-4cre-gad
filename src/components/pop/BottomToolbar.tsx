import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BottomToolbarProps {
  onPrint: () => void;
}

export const BottomToolbar = ({ onPrint }: BottomToolbarProps) => {
  return (
    <div className="bottom-bar no-print">
      <div className="hidden md:flex items-center gap-3 text-sm text-[hsl(var(--text-secondary))]">
        <span className="font-semibold text-[hsl(var(--text-primary))]">POP SDP 2026</span>
        <span className="text-[hsl(var(--text-tertiary))]">4a CRE - GAD</span>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <Button
          variant="ghost"
          size="sm"
          onClick={onPrint}
          aria-label="Imprimir documento"
          className="h-9 rounded-lg text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--bg-elevated))]"
        >
          <Printer className="w-4 h-4 md:mr-2" />
          <span className="hidden md:inline">Imprimir</span>
        </Button>

        <Button
          size="sm"
          onClick={onPrint}
          aria-label="Baixar PDF"
          className="btn-download h-9 px-3 md:px-4"
        >
          <Download className="w-4 h-4 md:mr-2" />
          <span className="hidden md:inline">Download PDF</span>
        </Button>
      </div>
    </div>
  );
};
