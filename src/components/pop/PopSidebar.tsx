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
  { id: "introducao", number: "0", title: "Apresentação", icon: <FileText className="w-4 h-4" /> },
  { id: "secao-1", number: "1", title: "Abertura do Processo", icon: <ClipboardList className="w-4 h-4" /> },
  { id: "secao-2", number: "2", title: "Despacho de Encaminhamento", icon: <FileText className="w-4 h-4" /> },
  { id: "secao-3", number: "3", title: "Demonstrativo de Despesas", icon: <Table2 className="w-4 h-4" /> },
  { id: "secao-4", number: "4", title: "Documentos Externos", icon: <Upload className="w-4 h-4" /> },
  { id: "secao-5", number: "5", title: "Conferência e Envio", icon: <CheckCircle className="w-4 h-4" /> },
  { id: "contatos", number: "6", title: "Contatos", icon: <Phone className="w-4 h-4" /> },
  { id: "anexo", number: "A", title: "Anexo - Legislação", icon: <Scale className="w-4 h-4" /> },
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
          className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-50 lg:z-30 h-screen w-72 transform transition-all duration-300 ease-out lg:transform-none no-print",
          "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/60 dark:border-slate-700/40",
          "shadow-soft-xl",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 lg:p-5 border-b border-slate-200/60 dark:border-slate-700/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-soft">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-slate-900 dark:text-slate-100 text-lg">POP</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Prestação de Contas SDP</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="lg:hidden text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 h-8 w-8 rounded-lg"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-3 lg:p-4 scrollbar-thin">
            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 px-2">
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
                      "w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 relative",
                      activeSection === section.id
                        ? "bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200"
                    )}
                  >
                    {/* Active indicator */}
                    {activeSection === section.id && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-sky-600 dark:bg-sky-400 rounded-r-full" />
                    )}
                    <span className={cn(
                      "flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold transition-all",
                      activeSection === section.id
                        ? "bg-sky-600 text-white shadow-soft"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    )}>
                      {section.number}
                    </span>
                    <span className="flex-1 text-sm leading-tight">{section.title}</span>
                    <ChevronRight className={cn(
                      "w-4 h-4 transition-transform duration-200 text-slate-400",
                      activeSection === section.id && "rotate-90 text-sky-600 dark:text-sky-400"
                    )} />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200/60 dark:border-slate-700/40">
            <div className="text-[10px] text-slate-400 dark:text-slate-500 text-center space-y-0.5">
              <p className="font-semibold">4ª CRE - GAD</p>
              <p>Versão 2025</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
