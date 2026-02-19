import { ChevronRight, FileText, ClipboardList, Table2, Upload, CheckCircle, Phone, X, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Section {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
}

const sections: Section[] = [
  { id: "introducao", number: "0", title: "Apresentacao", icon: <FileText className="w-4 h-4" /> },
  { id: "secao-1", number: "1", title: "Abertura do Processo", icon: <ClipboardList className="w-4 h-4" /> },
  { id: "secao-2", number: "2", title: "Despacho de Encaminhamento", icon: <FileText className="w-4 h-4" /> },
  { id: "secao-3", number: "3", title: "Demonstrativo de Despesas", icon: <Table2 className="w-4 h-4" /> },
  { id: "secao-4", number: "4", title: "Documentos Externos", icon: <Upload className="w-4 h-4" /> },
  { id: "secao-5", number: "5", title: "Conferencia e Envio", icon: <CheckCircle className="w-4 h-4" /> },
  { id: "contatos", number: "6", title: "Contatos", icon: <Phone className="w-4 h-4" /> },
  { id: "anexo", number: "A", title: "Anexo - Legislacao", icon: <Scale className="w-4 h-4" /> },
];

interface PopSidebarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isOpen: boolean;
  onClose: () => void;
  isVisible: boolean;
}

export const PopSidebar = ({
  activeSection,
  onSectionClick,
  isOpen,
  onClose,
  isVisible,
}: PopSidebarProps) => {
  const navItemBase =
    "group relative w-full text-left flex items-center gap-3 pl-4 pr-2 py-2.5 rounded-lg transition-all duration-300";

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-40 xl:hidden" onClick={onClose} />}

      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen w-72 transform transition-all duration-300 ease-out no-print xl:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{
          background: "linear-gradient(180deg, hsl(var(--bg-surface)) 0%, hsl(var(--bg-deep)) 100%)",
          borderRight: "1px solid hsl(var(--border-subtle))",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-[hsl(var(--border-subtle))]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--bg-elevated))] border border-[hsl(var(--border-subtle))] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[hsl(var(--accent-solid))]" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-[hsl(var(--text-primary))] text-lg">POP</h2>
                  <p className="text-xs text-[hsl(var(--text-secondary))]">Prestacao de Contas SDP</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Fechar menu lateral"
                className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--bg-elevated))] h-8 w-8"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 scrollbar-thin">
            <p className="text-[10px] font-semibold text-[hsl(var(--text-tertiary))] uppercase tracking-[0.05em] mb-3 px-1">
              Sumario
            </p>
            <ul className="space-y-1">
              {sections.map((section) => {
                const active = activeSection === section.id;
                return (
                  <li key={section.id}>
                    <button
                      onClick={() => {
                        onSectionClick(section.id);
                        onClose();
                      }}
                      className={cn(
                        navItemBase,
                        active
                          ? "text-[hsl(var(--text-primary))] font-semibold"
                          : "text-[hsl(var(--text-tertiary))] hover:text-[hsl(var(--text-primary))] font-medium"
                      )}
                    >
                      <span
                        className={cn(
                          "absolute left-0 h-5 rounded-full transition-all duration-300",
                          active
                            ? "w-[3px] bg-[hsl(var(--accent-solid))]"
                            : "w-[2px] bg-[hsl(var(--border-subtle))] group-hover:bg-[hsl(var(--accent-solid))]"
                        )}
                      />
                      <span className="text-[hsl(var(--accent-solid))]">{section.icon}</span>
                      <span className="flex-1 text-sm leading-tight">{section.title}</span>
                      <ChevronRight className={cn("w-4 h-4 transition-transform duration-200", active && "rotate-90")} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      <aside
        className={cn(
          "hidden xl:block fixed left-0 top-1/2 -translate-y-1/2 w-[280px] pl-8 z-30 no-print transition-all duration-300",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5 pointer-events-none"
        )}
      >
        <nav aria-label="Navegacao de secoes">
          <ul className="space-y-2">
            {sections.map((section) => {
              const active = activeSection === section.id;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => onSectionClick(section.id)}
                    className={cn(
                      "group relative w-full text-left pl-4 pr-2 py-2 transition-all duration-300",
                      active
                        ? "text-[hsl(var(--text-primary))] font-semibold"
                        : "text-[hsl(var(--text-tertiary))] hover:text-[hsl(var(--text-primary))] font-medium"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 rounded-full transition-all duration-300",
                        active
                          ? "h-6 w-[3px] bg-[hsl(var(--accent-solid))]"
                          : "h-5 w-[2px] bg-[hsl(var(--border-subtle))] group-hover:bg-[hsl(var(--accent-solid))]"
                      )}
                    />
                    <span className="text-sm">{section.number}. {section.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};
