import { ChevronRight, FileText, ClipboardList, Table2, Upload, CheckCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
}

const sections: Section[] = [
  { id: "introducao", number: "0", title: "Apresentação", icon: <FileText className="w-5 h-5" /> },
  { id: "secao-1", number: "1", title: "Abertura do Processo", icon: <ClipboardList className="w-5 h-5" /> },
  { id: "secao-2", number: "2", title: "Despacho de Encaminhamento", icon: <FileText className="w-5 h-5" /> },
  { id: "secao-3", number: "3", title: "Demonstrativo de Despesas", icon: <Table2 className="w-5 h-5" /> },
  { id: "secao-4", number: "4", title: "Documentos Externos", icon: <Upload className="w-5 h-5" /> },
  { id: "secao-5", number: "5", title: "Conferência e Envio", icon: <CheckCircle className="w-5 h-5" /> },
  { id: "contatos", number: "6", title: "Contatos", icon: <Phone className="w-5 h-5" /> },
];

interface PopSidebarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const PopSidebar = ({ activeSection, onSectionClick, isOpen, onClose }: PopSidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-50 lg:z-30 h-screen w-72 bg-sidebar transform transition-transform duration-300 lg:transform-none no-print",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <FileText className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-sidebar-foreground">POP</h2>
                <p className="text-xs text-sidebar-foreground/70">Prestação de Contas SDP</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 scrollbar-thin">
            <p className="text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider mb-3 px-2">
              Sumário
            </p>
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      onSectionClick(section.id);
                      onClose();
                    }}
                    className={cn(
                      "nav-link w-full text-left",
                      activeSection === section.id && "active"
                    )}
                  >
                    <span className={cn(
                      "flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-colors",
                      activeSection === section.id
                        ? "bg-accent text-accent-foreground"
                        : "bg-sidebar-accent text-sidebar-foreground"
                    )}>
                      {section.number}
                    </span>
                    <span className="flex-1 text-sm font-medium">{section.title}</span>
                    <ChevronRight className={cn(
                      "w-4 h-4 transition-transform",
                      activeSection === section.id && "rotate-90"
                    )} />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="text-xs text-sidebar-foreground/60 text-center">
              <p>4ª CRE - GAD</p>
              <p className="mt-1">Versão 1.0 | 2025</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
