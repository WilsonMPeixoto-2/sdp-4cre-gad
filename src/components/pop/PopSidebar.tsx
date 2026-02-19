import { ChevronRight, FileText, ClipboardList, Table2, Upload, CheckCircle, Phone, X, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
interface Section {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
}
const sections: Section[] = [{
  id: "introducao",
  number: "0",
  title: "Apresentação",
  icon: <FileText className="w-4 h-4" />
}, {
  id: "secao-1",
  number: "1",
  title: "Abertura do Processo",
  icon: <ClipboardList className="w-4 h-4" />
}, {
  id: "secao-2",
  number: "2",
  title: "Despacho de Encaminhamento",
  icon: <FileText className="w-4 h-4" />
}, {
  id: "secao-3",
  number: "3",
  title: "Demonstrativo de Despesas",
  icon: <Table2 className="w-4 h-4" />
}, {
  id: "secao-4",
  number: "4",
  title: "Documentos Externos",
  icon: <Upload className="w-4 h-4" />
}, {
  id: "secao-5",
  number: "5",
  title: "Conferência e Envio",
  icon: <CheckCircle className="w-4 h-4" />
}, {
  id: "contatos",
  number: "6",
  title: "Contatos",
  icon: <Phone className="w-4 h-4" />
}, {
  id: "anexo",
  number: "A",
  title: "Anexo - Legislação",
  icon: <Scale className="w-4 h-4" />
}];
interface PopSidebarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}
export const PopSidebar = ({
  activeSection,
  onSectionClick,
  isOpen,
  onClose
}: PopSidebarProps) => {
  return <>
    {/* Mobile Overlay */}
    {isOpen && <div className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} />}

    {/* Sidebar */}
    <aside className={cn("fixed lg:sticky top-0 left-0 z-50 lg:z-30 h-screen w-72 transform transition-all duration-300 ease-out lg:transform-none no-print shadow-2xl lg:shadow-lg border-r border-[hsl(var(--border-subtle))]", isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0")} style={{
      background: 'linear-gradient(180deg, hsl(var(--bg-surface)) 0%, hsl(var(--bg-deep)) 55%, hsl(var(--bg-deep)) 100%)'
    }}>
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="p-4 lg:p-5 border-b border-sidebar-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-start)/0.2)] to-[hsl(var(--accent-end)/0.2)] border border-[hsl(var(--border-subtle))] flex items-center justify-center shadow-lg">
                <FileText className="w-5 h-5 text-[hsl(var(--accent-solid))]" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-[hsl(var(--text-primary))] text-lg">POP</h2>
                <p className="text-xs text-[hsl(var(--text-secondary))]">Prestação de Contas SDP</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Fechar menu lateral" className="lg:hidden text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--bg-elevated))] h-8 w-8">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 lg:p-4 scrollbar-thin">
          <p className="text-[10px] font-semibold text-[hsl(var(--text-tertiary))] uppercase tracking-[0.05em] mb-3 px-2">
            Sumário
          </p>
          <ul className="space-y-1">
            {sections.map(section => <li key={section.id}>
              <button onClick={() => {
                onSectionClick(section.id);
                onClose();
              }} className={cn("w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 icon-bounce border border-transparent", activeSection === section.id ? "bg-[hsl(var(--bg-elevated))] text-[hsl(var(--text-primary))] border-[hsl(var(--border-accent))] shadow-lg" : "text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--bg-elevated))]/60")}>
                <span className="text-[hsl(var(--accent-solid))]">{section.icon}</span>
                <span className="flex-1 text-sm font-medium leading-tight">{section.title}</span>
                <ChevronRight className={cn("w-4 h-4 transition-transform duration-200", activeSection === section.id && "rotate-90")} />
              </button>
            </li>)}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border/30">
          <div className="text-[10px] text-[hsl(var(--text-tertiary))] text-center space-y-0.5">
            <p className="font-semibold">4ª CRE - GAD</p>
            <p>Versão 2026</p>
          </div>
        </div>
      </div>
    </aside>
  </>;
};
