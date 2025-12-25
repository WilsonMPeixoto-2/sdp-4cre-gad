import { Menu, FileText, Search, ChevronDown, Check, User, ChevronRight } from "lucide-react";
import { 
  SeiIncluirIcon, 
  SeiAssinarIcon, 
  SeiEnviarIcon, 
  SeiPastaIcon, 
  SeiIniciarProcessoIcon, 
  SeiInteressadosIcon,
  SeiAutenticarIcon,
  SeiVisualizarIcon,
  SeiImprimirIcon,
  SeiDownloadIcon,
  SeiLinkIcon,
  SeiSalvarIcon
} from "./SeiIcons";

interface SeiMockupProps {
  variant: "menu" | "process-tree" | "document-form" | "type-selection" | "type-selection-icon" | "icons" | "iniciar-processo-form" | "incluir-documento" | "despacho-selection" | "metadados-form" | "toolbar-assinar" | "link-externo" | "nup-gerado" | "salvar-btn" | "demonstrativo-despesas" | "toolbar-autenticar" | "enviar-processo" | "destinatarios-form";
  highlight?: string;
}

// Custom SEI-style icons button
const SeiIconButton = ({ icon, label, active = false }: { icon: React.ReactNode; label?: string; active?: boolean }) => (
  <div className={`flex flex-col items-center gap-1 p-2 rounded cursor-pointer transition-all ${active ? 'bg-primary/15 ring-2 ring-primary/30' : 'hover:bg-secondary/80'}`}>
    <div className="w-6 h-6 flex items-center justify-center">
      {icon}
    </div>
    {label && <span className={`text-[10px] ${active ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>{label}</span>}
  </div>
);

// SEI Action Icons Bar with custom SEI icons
export const SeiIconsBar = () => (
  <div className="flex items-center gap-1 p-2.5 bg-gradient-to-b from-card to-secondary/30 border border-border rounded-lg shadow-sm overflow-x-auto">
    <SeiIconButton icon={<SeiIncluirIcon size={22} />} label="Incluir" active />
    <SeiIconButton icon={<SeiEnviarIcon size={22} />} label="Enviar" />
    <SeiIconButton icon={<SeiVisualizarIcon size={22} />} label="Visualizar" />
    <SeiIconButton icon={<SeiAssinarIcon size={22} />} label="Assinar" />
    <SeiIconButton icon={<SeiAutenticarIcon size={22} />} label="Autenticar" />
    <SeiIconButton icon={<SeiImprimirIcon size={22} />} label="Imprimir" />
    <SeiIconButton icon={<SeiDownloadIcon size={22} />} label="Download" />
  </div>
);

// Reusable SEI Header - estilo mais fiel ao SEI!RIO
const SeiHeader = ({ title, variant = "primary" }: { title: string; variant?: "primary" | "success" | "warning" }) => {
  const bgColors = {
    primary: "linear-gradient(180deg, hsl(215, 65%, 35%) 0%, hsl(215, 75%, 28%) 100%)",
    success: "linear-gradient(180deg, hsl(142, 60%, 38%) 0%, hsl(142, 70%, 32%) 100%)",
    warning: "linear-gradient(180deg, hsl(45, 85%, 50%) 0%, hsl(40, 90%, 45%) 100%)"
  };
  
  return (
    <div 
      className="text-white px-4 py-2.5 text-sm font-semibold flex items-center gap-2 shadow-sm"
      style={{ background: bgColors[variant] }}
    >
      <div className="w-1.5 h-4 bg-white/30 rounded-full" />
      {title}
    </div>
  );
};

// Reusable SEI Form Field
const SeiFormField = ({ label, value, highlight = false, required = false }: { label: string; value: string; highlight?: boolean; required?: boolean }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-1">
    <span className="text-muted-foreground w-40 shrink-0 text-xs sm:text-sm font-medium">
      {label}{required && <span className="text-primary font-bold ml-0.5">*</span>}:
    </span>
    <span className={`font-medium text-xs sm:text-sm ${highlight ? "text-primary font-semibold" : "text-foreground"}`}>
      {value}
    </span>
  </div>
);

// SEI-style button
const SeiButton = ({ children, variant = "primary", icon }: { children: React.ReactNode; variant?: "primary" | "secondary"; icon?: React.ReactNode }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-semibold cursor-pointer transition-all shadow-sm ${
    variant === "primary" 
      ? "bg-gradient-to-b from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80" 
      : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
  }`}>
    {icon}
    {children}
  </div>
);

export const SeiMockup = ({ variant, highlight }: SeiMockupProps) => {
  if (variant === "menu") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg max-w-sm">
        {/* SEI Header mais autêntico */}
        <div 
          className="text-white px-4 py-3 flex items-center justify-between"
          style={{ background: 'linear-gradient(180deg, hsl(215, 65%, 35%) 0%, hsl(215, 75%, 28%) 100%)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shadow-inner border border-white/10">
              <span className="text-xs font-black tracking-tight">SEI!</span>
            </div>
            <div>
              <span className="font-bold text-sm">SEI!RIO</span>
              <p className="text-[10px] text-white/70">Sistema Eletrônico de Informações</p>
            </div>
          </div>
          <User className="w-5 h-5 text-white/80" />
        </div>
        
        {/* Menu Items com estilo SEI */}
        <div className="p-2 space-y-0.5 bg-gradient-to-b from-secondary/20 to-transparent">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
            <Search className="w-4 h-4" />
            <span>Pesquisar no Menu</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
            <Menu className="w-4 h-4" />
            <span>Estatísticas</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
            <SeiPastaIcon size={18} />
            <span>Favoritos</span>
          </div>
          <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all ${
            highlight === "iniciar" 
              ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md ring-2 ring-primary/30" 
              : "text-muted-foreground hover:bg-secondary"
          }`}>
            <SeiIniciarProcessoIcon size={20} />
            <span>Iniciar Processo</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "process-tree") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <SeiHeader title="Árvore do Processo" />
        
        <div className="p-3 text-sm bg-gradient-to-b from-secondary/10 to-transparent">
          {/* Process Root */}
          <div className="flex items-center gap-2 px-2 py-2 font-semibold text-foreground bg-primary/5 rounded-lg mb-1">
            <ChevronDown className="w-4 h-4 text-primary" />
            <SeiPastaIcon size={20} />
            <span>Processo 04.xx.xxx/2025</span>
          </div>
          
          {/* Documents com estilo de árvore */}
          <div className="ml-4 border-l-2 border-border/50 pl-3 space-y-0.5 mt-2">
            {[
              { name: "Despacho de Encaminhamento", signed: true },
              { name: "Demonstrativo - ND 435", signed: true },
              { name: "Demonstrativo - ND 441", signed: true },
              { name: "NF - Empresa Alpha", signed: true },
              { name: "NF - Fornecedor Beta", signed: true },
            ].map((doc, i) => (
              <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-secondary/80 cursor-pointer group transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-border -ml-[19px] mr-1" />
                <FileText className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-muted-foreground group-hover:text-foreground text-xs sm:text-sm truncate transition-colors">
                  {doc.name}
                </span>
                {doc.signed && (
                  <div className="ml-auto flex items-center gap-1 px-1.5 py-0.5 bg-success/10 rounded text-success">
                    <Check className="w-3 h-3" />
                    <span className="text-[10px] font-medium">Assinado</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Ícone de seleção de tipo (círculo verde com +) - versão pequena inline
  if (variant === "type-selection-icon") {
    return (
      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-b from-success to-success/80 shadow-sm ring-1 ring-success/30">
        <span className="text-white text-sm font-bold leading-none">+</span>
      </span>
    );
  }

  if (variant === "type-selection") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <SeiHeader title="Escolha o Tipo de Processo" />
        
        <div className="p-4 space-y-3 bg-gradient-to-b from-secondary/10 to-transparent">
          <div className="flex items-center gap-2 text-sm">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="prestação" 
              className="bg-background border border-border rounded-lg px-3 py-2 text-foreground w-full focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              defaultValue="prestação"
              readOnly
            />
          </div>
          
          <div className="space-y-1">
            <div className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
              Devolução de Prestação de Contas
            </div>
            <div className="px-3 py-2.5 rounded-lg text-sm bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold cursor-pointer shadow-md ring-2 ring-primary/20">
              EXECUÇÃO FINANCEIRA: SISTEMA DESCENTRALIZADO DE PAGAMENTO - SDP
            </div>
            <div className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
              Prestação de Contas de Suprimento de Fundos
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Formulário Iniciar Processo com todos os campos
  if (variant === "iniciar-processo-form") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <SeiHeader title="Iniciar Processo" />
        
        <div className="p-4 space-y-4 text-sm">
          {/* Campos preenchidos automaticamente */}
          <div className="bg-gradient-to-r from-secondary/50 to-secondary/30 rounded-lg p-3 space-y-2 border border-border/50">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">Preenchimento Automático</div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="text-muted-foreground w-40 shrink-0 text-xs sm:text-sm">
                Tipo de Processo:
              </span>
              <span className="text-xs sm:text-sm text-foreground/80 italic">
                EXECUÇÃO FINANCEIRA: SDP
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="text-muted-foreground w-40 shrink-0 text-xs sm:text-sm">
                Classificação:
              </span>
              <span className="text-xs sm:text-sm text-foreground/80 italic">
                01.05.03.11 - SDP
              </span>
            </div>
          </div>
          
          <div className="border-t border-border pt-4">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-3">Campos a Preencher</p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
            <span className="text-muted-foreground w-40 shrink-0 text-xs sm:text-sm font-medium">
              Especificação<span className="text-primary font-bold ml-0.5">*</span>:
            </span>
            <div className="flex-1">
              <span className="font-medium text-xs sm:text-sm text-foreground">
                Prestação de contas de SDP - E/CRE(04.30.502) Ciep Elis Regina
              </span>
              <span className="block text-[10px] text-muted-foreground mt-1 italic">(exemplo de preenchimento)</span>
            </div>
          </div>
          <SeiFormField 
            label="Interessados" 
            value="10729 - E/4a.CRE/GAD" 
            required 
          />
          <SeiFormField 
            label="Nível de Acesso" 
            value="Público" 
            highlight 
            required 
          />
          <SeiFormField 
            label="Observações" 
            value="(opcional)" 
          />
          
          <div className="pt-4 flex items-center gap-3 border-t border-border">
            <SeiButton variant="primary" icon={<SeiSalvarIcon size={16} />}>
              Salvar
            </SeiButton>
            <SeiButton variant="secondary">
              Cancelar
            </SeiButton>
          </div>
        </div>
      </div>
    );
  }

  // Ícone Incluir Documento destacado
  if (variant === "incluir-documento") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg max-w-md">
        <SeiHeader title="Barra de Ferramentas do Processo" />
        
        <div className="p-4 bg-gradient-to-b from-secondary/10 to-transparent">
          <div className="flex items-center gap-1.5 flex-wrap bg-gradient-to-b from-card to-secondary/20 p-2 rounded-lg border border-border/50">
            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-gradient-to-b from-primary/20 to-primary/10 ring-2 ring-primary/50 cursor-pointer shadow-sm">
              <SeiIncluirIcon size={26} />
              <span className="text-[10px] font-bold text-primary">Incluir</span>
            </div>
            <SeiIconButton icon={<SeiEnviarIcon size={22} />} label="Enviar" />
            <SeiIconButton icon={<SeiVisualizarIcon size={22} />} label="Visualizar" />
            <SeiIconButton icon={<SeiAssinarIcon size={22} />} label="Assinar" />
            <SeiIconButton icon={<SeiImprimirIcon size={22} />} label="Imprimir" />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Clique em <span className="font-bold text-primary">Incluir Documento</span> para adicionar um novo documento
          </p>
        </div>
      </div>
    );
  }

  // Seleção de tipo DESPACHO
  if (variant === "despacho-selection") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <SeiHeader title="Gerar Documento" />
        
        <div className="p-4 space-y-3 bg-gradient-to-b from-secondary/10 to-transparent">
          <div className="flex items-center gap-2 text-sm">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="despacho" 
              className="bg-background border border-border rounded-lg px-3 py-2 text-foreground w-full focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              defaultValue="despacho"
              readOnly
            />
          </div>
          
          <div className="space-y-1">
            <div className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
              Despacho Decisório
            </div>
            <div className="px-3 py-2.5 rounded-lg text-sm bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold cursor-pointer shadow-md flex items-center gap-2 ring-2 ring-primary/20">
              <FileText className="w-4 h-4" />
              DESPACHO
            </div>
            <div className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
              Despacho de Arquivamento
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Formulário de Metadados do Documento
  if (variant === "metadados-form") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <SeiHeader title="Gerar Documento - Metadados" />
        
        <div className="p-4 space-y-4 text-sm">
          <div className="space-y-2">
            <label className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1 font-medium">
              Descrição<span className="text-primary font-bold">*</span>:
            </label>
            <div className="bg-background border border-border rounded-lg px-3 py-2.5 text-foreground font-mono text-xs sm:text-sm">
              SDP – E/CRE (04.30.502) CIEP ELIS REGINA
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1 font-medium">
              Nome na Árvore<span className="text-primary font-bold">*</span>:
            </label>
            <div className="bg-background border border-border rounded-lg px-3 py-2.5 text-foreground font-mono text-xs sm:text-sm">
              DESPACHO DE ENCAMINHAMENTO
            </div>
          </div>
          
          <div className="pt-4 border-t border-border">
            <SeiButton variant="primary">
              Confirmar Dados
            </SeiButton>
          </div>
        </div>
      </div>
    );
  }

  // Barra com botão Assinar destacado
  if (variant === "toolbar-assinar") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg max-w-md">
        <SeiHeader title="Ferramentas do Documento" />
        
        <div className="p-4 bg-gradient-to-b from-secondary/10 to-transparent">
          <div className="flex items-center gap-1.5 flex-wrap bg-gradient-to-b from-card to-secondary/20 p-2 rounded-lg border border-border/50">
            <SeiIconButton icon={<SeiVisualizarIcon size={22} />} label="Visualizar" />
            <SeiIconButton icon={<SeiImprimirIcon size={22} />} label="Imprimir" />
            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-gradient-to-b from-accent/20 to-accent/10 ring-2 ring-accent/50 cursor-pointer shadow-sm">
              <SeiAssinarIcon size={26} />
              <span className="text-[10px] font-bold text-accent">Assinar</span>
            </div>
            <SeiIconButton icon={<SeiDownloadIcon size={22} />} label="Download" />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Clique em <span className="font-bold text-accent">Assinar</span> para assinar o documento
          </p>
        </div>
      </div>
    );
  }

  // Menu de Link para Acesso Externo
  if (variant === "link-externo") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg max-w-xs">
        <SeiHeader title="Opções do Documento" />
        
        <div className="p-3 space-y-0.5 text-sm">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
            <SeiVisualizarIcon size={18} />
            <span>Visualizar Documento</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
            <SeiImprimirIcon size={18} />
            <span>Imprimir Documento</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-semibold cursor-pointer ring-1 ring-primary/30 transition-colors">
            <SeiLinkIcon size={18} />
            <span>Link para Acesso Direto</span>
            <ChevronRight className="w-4 h-4 ml-auto" />
          </div>
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary cursor-pointer transition-colors">
            <SeiDownloadIcon size={18} />
            <span>Download</span>
          </div>
        </div>
        
        <div className="px-4 pb-4">
          <p className="text-xs text-muted-foreground bg-gradient-to-r from-secondary/50 to-secondary/30 p-3 rounded-lg border border-border/50">
            💡 Copie o link gerado e envie via WhatsApp ou E-mail para assinatura externa
          </p>
        </div>
      </div>
    );
  }

  // NUP Gerado
  if (variant === "nup-gerado") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <SeiHeader title="Processo Criado com Sucesso!" variant="success" />
        
        <div className="p-6 text-center bg-gradient-to-b from-success/5 to-transparent">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success/20 mb-4">
            <Check className="w-6 h-6 text-success" />
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold">
            Número Único de Protocolo (NUP)
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-success font-mono tracking-wide">
            000704.000601/2025-51
          </p>
          <p className="text-[10px] text-muted-foreground mt-2 italic">(Exemplo ilustrativo)</p>
          <div className="mt-4 p-3 bg-secondary/30 rounded-lg border border-border/50">
            <p className="text-xs text-muted-foreground">
              O SEI não gera capa de processo. O NUP acima é o único identificador gerado automaticamente.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Botão Salvar
  if (variant === "salvar-btn") {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground rounded-lg shadow-lg font-bold text-sm cursor-default hover:from-primary/90 hover:to-primary/80 transition-all ring-2 ring-primary/20">
          <SeiSalvarIcon size={20} />
          SALVAR
        </div>
      </div>
    );
  }

  if (variant === "document-form") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <SeiHeader title="Registrar Documento Externo" />
        
        <div className="p-4 space-y-3 text-sm">
          {[
            { label: "Tipo do Documento", value: "Nota Fiscal" },
            { label: "Data do Documento", value: "15/12/2025" },
            { label: "Número", value: "NF-001234" },
            { label: "Nome na Árvore", value: "Empresa Alpha LTDA" },
            { label: "Nível de Acesso", value: "Público", highlight: true },
          ].map((field, i) => (
            <SeiFormField key={i} label={field.label} value={field.value} highlight={field.highlight} />
          ))}
          
          <div className="pt-4 flex items-center gap-3 border-t border-border">
            <SeiButton variant="primary">
              Confirmar
            </SeiButton>
            <SeiButton variant="secondary">
              Cancelar
            </SeiButton>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "icons") {
    return <SeiIconsBar />;
  }

  // Demonstrativo de Despesas - Seção 3
  if (variant === "demonstrativo-despesas") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <SeiHeader title="Demonstrativo de Despesas - SEI!RIO" />
        
        <div className="p-4">
          <div className="bg-gradient-to-r from-secondary/50 to-secondary/30 rounded-lg p-3 mb-4 border border-border/50">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 font-semibold">Documento interno em edição</p>
            <p className="text-sm font-bold text-foreground">DEMONSTRATIVO DE DESPESAS - ND 435</p>
          </div>
          
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gradient-to-r from-primary/15 to-primary/10">
                  <th className="border-b border-border/50 px-3 py-2 text-left font-bold text-foreground">Data</th>
                  <th className="border-b border-border/50 px-3 py-2 text-left font-bold text-foreground">Favorecido</th>
                  <th className="border-b border-border/50 px-3 py-2 text-center font-bold text-foreground">N.D</th>
                  <th className="border-b border-border/50 px-3 py-2 text-right font-bold text-foreground">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="border-b border-border/30 px-3 py-2 text-muted-foreground">05/12/2025</td>
                  <td className="border-b border-border/30 px-3 py-2 text-foreground">Alpha Materiais LTDA</td>
                  <td className="border-b border-border/30 px-3 py-2 text-center font-mono font-semibold text-primary">435</td>
                  <td className="border-b border-border/30 px-3 py-2 text-right font-mono">R$ 350,00</td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="border-b border-border/30 px-3 py-2 text-muted-foreground">10/12/2025</td>
                  <td className="border-b border-border/30 px-3 py-2 text-foreground">Beta Serviços ME</td>
                  <td className="border-b border-border/30 px-3 py-2 text-center font-mono font-semibold text-primary">435</td>
                  <td className="border-b border-border/30 px-3 py-2 text-right font-mono">R$ 480,00</td>
                </tr>
                <tr className="bg-gradient-to-r from-primary/10 to-primary/5">
                  <td colSpan={3} className="px-3 py-2 text-right font-bold text-foreground">Total ND 435:</td>
                  <td className="px-3 py-2 text-right font-mono font-bold text-primary text-sm">R$ 830,00</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex items-center gap-2 justify-end">
            <SeiButton variant="primary" icon={<SeiSalvarIcon size={16} />}>
              Salvar
            </SeiButton>
          </div>
        </div>
      </div>
    );
  }

  // Toolbar Autenticar - Seção 4
  if (variant === "toolbar-autenticar") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg max-w-md">
        <SeiHeader title="Ferramentas do Documento Externo" />
        
        <div className="p-4 bg-gradient-to-b from-secondary/10 to-transparent">
          <div className="flex items-center gap-1.5 flex-wrap bg-gradient-to-b from-card to-secondary/20 p-2 rounded-lg border border-border/50">
            <SeiIconButton icon={<SeiVisualizarIcon size={22} />} label="Visualizar" />
            <SeiIconButton icon={<SeiImprimirIcon size={22} />} label="Imprimir" />
            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-gradient-to-b from-success/20 to-success/10 ring-2 ring-success/50 cursor-pointer shadow-sm">
              <SeiAutenticarIcon size={26} />
              <span className="text-[10px] font-bold text-success">Autenticar</span>
            </div>
            <SeiIconButton icon={<SeiDownloadIcon size={22} />} label="Download" />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Clique em <span className="font-bold text-success">Autenticar</span> para validar o documento externo
          </p>
        </div>
      </div>
    );
  }

  // Enviar Processo - Seção 5
  if (variant === "enviar-processo") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg max-w-md">
        <SeiHeader title="Barra de Ações do Processo" />
        
        <div className="p-4 bg-gradient-to-b from-secondary/10 to-transparent">
          <div className="flex items-center gap-1.5 flex-wrap bg-gradient-to-b from-card to-secondary/20 p-2 rounded-lg border border-border/50">
            <SeiIconButton icon={<SeiIncluirIcon size={22} />} label="Incluir" />
            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-gradient-to-b from-accent/20 to-accent/10 ring-2 ring-accent/50 cursor-pointer shadow-sm">
              <SeiEnviarIcon size={26} />
              <span className="text-[10px] font-bold text-accent">Enviar</span>
            </div>
            <SeiIconButton icon={<SeiVisualizarIcon size={22} />} label="Visualizar" />
            <SeiIconButton icon={<SeiAssinarIcon size={22} />} label="Assinar" />
            <SeiIconButton icon={<SeiImprimirIcon size={22} />} label="Imprimir" />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Clique em <span className="font-bold text-accent">Enviar Processo</span> para encaminhar à GAD
          </p>
        </div>
      </div>
    );
  }

  // Formulário de Destinatários - Seção 5
  if (variant === "destinatarios-form") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <SeiHeader title="Enviar Processo" />
        
        <div className="p-4 space-y-4 text-sm">
          <div className="space-y-2">
            <label className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1 font-medium">
              Unidades<span className="text-primary font-bold">*</span>:
            </label>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="GAD" 
                className="bg-background border border-border rounded-lg px-3 py-2 text-foreground w-full text-xs sm:text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                defaultValue="GAD"
                readOnly
              />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/30 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-foreground">
                10729 - Gerência de Administração (E/4a.CRE/GAD)
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-muted-foreground text-xs sm:text-sm font-medium">
              Manter aberto na unidade atual:
            </label>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-border bg-card"></div>
              <span className="text-xs text-muted-foreground">Não (recomendado)</span>
            </div>
          </div>
          
          <div className="pt-4 flex items-center gap-3 border-t border-border">
            <SeiButton variant="primary" icon={<SeiEnviarIcon size={16} />}>
              Enviar
            </SeiButton>
            <SeiButton variant="secondary">
              Cancelar
            </SeiButton>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
