import { Menu, Plus, FileText, FolderOpen, Search, ChevronDown, Check, User, Send, Eye, Pencil, Trash2, Printer, Download, Shield } from "lucide-react";

interface SeiMockupProps {
  variant: "menu" | "process-tree" | "document-form" | "type-selection" | "icons";
  highlight?: string;
}

// Custom SEI-style icons
const SeiIconButton = ({ icon, label, active = false }: { icon: React.ReactNode; label?: string; active?: boolean }) => (
  <div className={`flex flex-col items-center gap-1 p-1.5 rounded cursor-pointer transition-colors ${active ? 'bg-primary/20' : 'hover:bg-secondary'}`}>
    <div className={`w-6 h-6 flex items-center justify-center ${active ? 'text-primary' : 'text-muted-foreground'}`}>
      {icon}
    </div>
    {label && <span className="text-[10px] text-muted-foreground">{label}</span>}
  </div>
);

// SEI Action Icons Bar
export const SeiIconsBar = () => (
  <div className="flex items-center gap-1 p-2 bg-card border border-border rounded-lg overflow-x-auto">
    <SeiIconButton icon={<Plus className="w-4 h-4" />} label="Incluir" active />
    <SeiIconButton icon={<Send className="w-4 h-4" />} label="Enviar" />
    <SeiIconButton icon={<Eye className="w-4 h-4" />} label="Visualizar" />
    <SeiIconButton icon={<Pencil className="w-4 h-4" />} label="Editar" />
    <SeiIconButton icon={<Shield className="w-4 h-4" />} label="Autenticar" />
    <SeiIconButton icon={<Printer className="w-4 h-4" />} label="Imprimir" />
    <SeiIconButton icon={<Download className="w-4 h-4" />} label="Download" />
  </div>
);

export const SeiMockup = ({ variant, highlight }: SeiMockupProps) => {
  if (variant === "menu") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg max-w-sm">
        {/* SEI Header */}
        <div className="text-primary-foreground px-4 py-3 flex items-center justify-between" style={{ background: 'hsl(215, 75%, 28%)' }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-foreground/20 rounded flex items-center justify-center">
              <span className="text-xs font-bold">SEI</span>
            </div>
            <span className="font-semibold text-sm">SEI!RIO</span>
          </div>
          <User className="w-5 h-5" />
        </div>
        
        {/* Menu Items */}
        <div className="p-3 space-y-1">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer">
            <Search className="w-4 h-4" />
            <span>Pesquisar no Menu</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer">
            <Menu className="w-4 h-4" />
            <span>Estatísticas</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer">
            <FolderOpen className="w-4 h-4" />
            <span>Favoritos</span>
          </div>
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold cursor-pointer ${
            highlight === "iniciar" 
              ? "bg-primary text-primary-foreground shadow-md" 
              : "text-muted-foreground hover:bg-secondary"
          }`}>
            <Plus className="w-4 h-4" />
            <span>Iniciar Processo</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "process-tree") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="text-primary-foreground px-4 py-2.5 text-sm font-medium" style={{ background: 'hsl(215, 75%, 28%)' }}>
          Árvore do Processo
        </div>
        
        <div className="p-3 text-sm">
          {/* Process Root */}
          <div className="flex items-center gap-2 px-2 py-1.5 font-medium text-foreground">
            <ChevronDown className="w-4 h-4 text-primary" />
            <FolderOpen className="w-4 h-4 text-primary" />
            <span>Processo 04.xx.xxx/2025</span>
          </div>
          
          {/* Documents */}
          <div className="ml-6 space-y-1 mt-1">
            {[
              { name: "Despacho de Encaminhamento", signed: true },
              { name: "Demonstrativo - ND 435", signed: true },
              { name: "Demonstrativo - ND 441", signed: true },
              { name: "NF - Empresa Alpha", signed: true },
              { name: "NF - Fornecedor Beta", signed: true },
            ].map((doc, i) => (
              <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-secondary cursor-pointer group">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground group-hover:text-foreground text-xs sm:text-sm truncate">
                  {doc.name}
                </span>
                {doc.signed && (
                  <div className="ml-auto flex items-center gap-1 text-success">
                    <Check className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "type-selection") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="text-primary-foreground px-4 py-2.5 text-sm font-medium" style={{ background: 'hsl(215, 75%, 28%)' }}>
          Escolha o Tipo de Processo
        </div>
        
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Search className="w-4 h-4" />
            <input 
              type="text" 
              placeholder="prestação" 
              className="bg-secondary/50 border border-border rounded px-3 py-1.5 text-foreground w-full"
              defaultValue="prestação"
            />
          </div>
          
          <div className="space-y-1">
            <div className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer">
              Devolução de Prestação de Contas
            </div>
            <div className="px-3 py-2 rounded-lg text-sm bg-primary text-primary-foreground font-semibold cursor-pointer shadow-md">
              EXECUÇÃO FINANCEIRA: SISTEMA DESCENTRALIZADO DE PAGAMENTO - SDP
            </div>
            <div className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer">
              Prestação de Contas de Suprimento de Fundos
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "document-form") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="text-primary-foreground px-4 py-2.5 text-sm font-medium" style={{ background: 'hsl(215, 75%, 28%)' }}>
          Registrar Documento Externo
        </div>
        
        <div className="p-4 space-y-3 text-sm">
          {[
            { label: "Tipo do Documento", value: "Nota Fiscal" },
            { label: "Data do Documento", value: "15/12/2025" },
            { label: "Número", value: "NF-001234" },
            { label: "Nome na Árvore", value: "Empresa Alpha LTDA" },
            { label: "Nível de Acesso", value: "Público", highlight: true },
          ].map((field, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="text-muted-foreground w-36 shrink-0 text-xs sm:text-sm">{field.label}:</span>
              <span className={`font-medium text-xs sm:text-sm ${field.highlight ? "text-primary" : "text-foreground"}`}>
                {field.value}
              </span>
            </div>
          ))}
          
          <div className="pt-3 flex items-center gap-2">
            <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium cursor-pointer hover:bg-primary/90">
              Confirmar
            </div>
            <div className="px-4 py-2 bg-secondary text-foreground rounded-lg text-xs font-medium cursor-pointer hover:bg-secondary/80">
              Cancelar
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "icons") {
    return <SeiIconsBar />;
  }

  return null;
};
