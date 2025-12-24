import { Menu, FileText, Search, ChevronDown, Check, User, Eye, Printer, Download, Save, Link2, ChevronRight } from "lucide-react";
import { SeiIncluirIcon, SeiAssinarIcon, SeiEnviarIcon, SeiPastaIcon, SeiIniciarProcessoIcon, SeiInteressadosIcon } from "./SeiIcons";

interface SeiMockupProps {
  variant: "menu" | "process-tree" | "document-form" | "type-selection" | "type-selection-icon" | "icons" | "iniciar-processo-form" | "incluir-documento" | "despacho-selection" | "metadados-form" | "toolbar-assinar" | "link-externo" | "nup-gerado" | "salvar-btn" | "demonstrativo-despesas" | "toolbar-autenticar" | "enviar-processo" | "destinatarios-form";
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

// SEI Action Icons Bar with custom SEI icons
export const SeiIconsBar = () => (
  <div className="flex items-center gap-1 p-2 bg-card border border-border rounded-lg overflow-x-auto">
    <SeiIconButton icon={<SeiIncluirIcon size={20} />} label="Incluir" active />
    <SeiIconButton icon={<SeiEnviarIcon size={20} />} label="Enviar" />
    <SeiIconButton icon={<Eye className="w-5 h-5" />} label="Visualizar" />
    <SeiIconButton icon={<SeiAssinarIcon size={20} />} label="Assinar" />
    <SeiIconButton icon={<SeiAssinarIcon size={20} />} label="Autenticar" />
    <SeiIconButton icon={<Printer className="w-5 h-5" />} label="Imprimir" />
    <SeiIconButton icon={<Download className="w-5 h-5" />} label="Download" />
  </div>
);

// Reusable SEI Header
const SeiHeader = ({ title }: { title: string }) => (
  <div className="text-primary-foreground px-4 py-2.5 text-sm font-medium" style={{ background: 'hsl(215, 75%, 28%)' }}>
    {title}
  </div>
);

// Reusable SEI Form Field
const SeiFormField = ({ label, value, highlight = false, required = false }: { label: string; value: string; highlight?: boolean; required?: boolean }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
    <span className="text-muted-foreground w-40 shrink-0 text-xs sm:text-sm">
      {label}{required && <span className="text-destructive">*</span>}:
    </span>
    <span className={`font-medium text-xs sm:text-sm ${highlight ? "text-primary" : "text-foreground"}`}>
      {value}
    </span>
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
            <SeiPastaIcon size={16} />
            <span>Favoritos</span>
          </div>
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold cursor-pointer ${
            highlight === "iniciar" 
              ? "bg-primary text-primary-foreground shadow-md" 
              : "text-muted-foreground hover:bg-secondary"
          }`}>
            <SeiIniciarProcessoIcon size={18} />
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
        
        <div className="p-3 text-sm">
          {/* Process Root */}
          <div className="flex items-center gap-2 px-2 py-1.5 font-medium text-foreground">
            <ChevronDown className="w-4 h-4 text-primary" />
            <SeiPastaIcon size={18} />
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

  // Ícone de seleção de tipo (círculo verde com +) - versão pequena inline
  if (variant === "type-selection-icon") {
    return (
      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 shadow-sm">
        <span className="text-white text-sm font-bold leading-none">+</span>
      </span>
    );
  }

  if (variant === "type-selection") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <SeiHeader title="Escolha o Tipo de Processo" />
        
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Search className="w-4 h-4" />
            <input 
              type="text" 
              placeholder="prestação" 
              className="bg-secondary/50 border border-border rounded px-3 py-1.5 text-foreground w-full"
              defaultValue="prestação"
              readOnly
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

  // Formulário Iniciar Processo com todos os campos
  if (variant === "iniciar-processo-form") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <SeiHeader title="Iniciar Processo" />
        
        <div className="p-4 space-y-3 text-sm">
          {/* Campos preenchidos automaticamente */}
          <div className="bg-muted/50 rounded-lg p-3 space-y-2 border border-border/50">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="text-muted-foreground w-40 shrink-0 text-xs sm:text-sm">
                Tipo de Processo:
              </span>
              <span className="text-xs sm:text-sm text-foreground/70 italic">
                EXECUÇÃO FINANCEIRA: SDP <span className="text-[10px] font-bold">(preenchimento automático)</span>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="text-muted-foreground w-40 shrink-0 text-xs sm:text-sm">
                Classificação:
              </span>
              <span className="text-xs sm:text-sm text-foreground/70 italic">
                01.05.03.11 - SDP <span className="text-[10px] font-bold">(preenchimento automático)</span>
              </span>
            </div>
          </div>
          
          <div className="border-t border-border pt-3">
            <p className="text-xs text-muted-foreground mb-2">Campos a preencher:</p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="text-muted-foreground w-40 shrink-0 text-xs sm:text-sm">
              Especificação<span className="text-destructive">*</span>:
            </span>
            <span className="font-medium text-xs sm:text-sm text-foreground">
              Prestação de contas de SDP - E/CRE(04.30.502) Ciep Elis Regina <span className="text-muted-foreground font-normal">(exemplo de preenchimento)</span>
            </span>
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
          
          <div className="pt-3 flex items-center gap-2">
            <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium cursor-pointer hover:bg-primary/90 flex items-center gap-2">
              <Save className="w-4 h-4" />
              Salvar
            </div>
            <div className="px-4 py-2 bg-secondary text-foreground rounded-lg text-xs font-medium cursor-pointer hover:bg-secondary/80">
              Cancelar
            </div>
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
        
        <div className="p-4">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-primary/20 border-2 border-primary cursor-pointer">
              <SeiIncluirIcon size={24} className="text-primary" />
              <span className="text-[10px] font-semibold text-primary">Incluir</span>
            </div>
            <SeiIconButton icon={<SeiEnviarIcon size={20} />} label="Enviar" />
            <SeiIconButton icon={<Eye className="w-5 h-5" />} label="Visualizar" />
            <SeiIconButton icon={<SeiAssinarIcon size={20} />} label="Assinar" />
            <SeiIconButton icon={<Printer className="w-5 h-5" />} label="Imprimir" />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Clique em <span className="font-semibold text-primary">Incluir Documento</span> para adicionar um novo documento
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
        
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Search className="w-4 h-4" />
            <input 
              type="text" 
              placeholder="despacho" 
              className="bg-secondary/50 border border-border rounded px-3 py-1.5 text-foreground w-full"
              defaultValue="despacho"
              readOnly
            />
          </div>
          
          <div className="space-y-1">
            <div className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer">
              Despacho Decisório
            </div>
            <div className="px-3 py-2 rounded-lg text-sm bg-primary text-primary-foreground font-semibold cursor-pointer shadow-md flex items-center gap-2">
              <FileText className="w-4 h-4" />
              DESPACHO
            </div>
            <div className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary cursor-pointer">
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
            <label className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
              Descrição<span className="text-destructive">*</span>:
            </label>
            <div className="bg-secondary/50 border border-border rounded px-3 py-2 text-foreground font-mono text-xs sm:text-sm">
              SDP – E/CRE (04.30.502) CIEP ELIS REGINA
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
              Nome na Árvore<span className="text-destructive">*</span>:
            </label>
            <div className="bg-secondary/50 border border-border rounded px-3 py-2 text-foreground font-mono text-xs sm:text-sm">
              DESPACHO DE ENCAMINHAMENTO
            </div>
          </div>
          
          <div className="pt-3 flex items-center gap-2">
            <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium cursor-pointer hover:bg-primary/90">
              Confirmar Dados
            </div>
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
        
        <div className="p-4">
          <div className="flex items-center gap-2 flex-wrap">
            <SeiIconButton icon={<Eye className="w-5 h-5" />} label="Visualizar" />
            <SeiIconButton icon={<Printer className="w-5 h-5" />} label="Imprimir" />
            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-accent/20 border-2 border-accent cursor-pointer">
              <SeiAssinarIcon size={24} className="text-accent" />
              <span className="text-[10px] font-semibold text-accent">Assinar</span>
            </div>
            <SeiIconButton icon={<Download className="w-5 h-5" />} label="Download" />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Clique em <span className="font-semibold text-accent">Assinar</span> para assinar o documento
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
        
        <div className="p-3 space-y-1 text-sm">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary cursor-pointer">
            <Eye className="w-4 h-4" />
            <span>Visualizar Documento</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary cursor-pointer">
            <Printer className="w-4 h-4" />
            <span>Imprimir Documento</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary font-semibold cursor-pointer border border-primary/30">
            <Link2 className="w-4 h-4" />
            <span>Link para Acesso Direto</span>
            <ChevronRight className="w-4 h-4 ml-auto" />
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary cursor-pointer">
            <Download className="w-4 h-4" />
            <span>Download</span>
          </div>
        </div>
        
        <div className="px-4 pb-4">
          <p className="text-xs text-muted-foreground bg-secondary/50 p-2 rounded-lg">
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
        <div className="text-primary-foreground px-4 py-2.5 text-sm font-medium flex items-center gap-2" style={{ background: 'hsl(142, 76%, 36%)' }}>
          <Check className="w-4 h-4" />
          Processo Criado com Sucesso!
        </div>
        
        <div className="p-6 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
            Número Único de Protocolo (NUP)
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-success font-mono tracking-wide">
            000704.000601/2025-51 <span className="text-sm font-normal text-muted-foreground italic">(Exemplo ilustrativo)</span>
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            O SEI não gera capa de processo. O NUP acima é o único identificador gerado automaticamente.
          </p>
        </div>
      </div>
    );
  }

  // Botão Salvar
  if (variant === "salvar-btn") {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg shadow-lg font-semibold text-sm cursor-default hover:bg-primary/90 transition-colors">
          <Save className="w-5 h-5" />
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

  // Demonstrativo de Despesas - Seção 3
  if (variant === "demonstrativo-despesas") {
    return (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <SeiHeader title="Demonstrativo de Despesas - SEI!RIO" />
        
        <div className="p-4">
          <div className="bg-secondary/30 rounded-lg p-3 mb-4">
            <p className="text-xs text-muted-foreground mb-2">Documento interno em edição:</p>
            <p className="text-sm font-semibold text-foreground">DEMONSTRATIVO DE DESPESAS - ND 435</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border border-border/50 px-2 py-1.5 text-left font-semibold text-foreground">Data</th>
                  <th className="border border-border/50 px-2 py-1.5 text-left font-semibold text-foreground">Favorecido</th>
                  <th className="border border-border/50 px-2 py-1.5 text-left font-semibold text-foreground">N.D</th>
                  <th className="border border-border/50 px-2 py-1.5 text-right font-semibold text-foreground">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-secondary/50">
                  <td className="border border-border/50 px-2 py-1.5 text-muted-foreground">05/12/2025</td>
                  <td className="border border-border/50 px-2 py-1.5 text-foreground">Alpha Materiais LTDA</td>
                  <td className="border border-border/50 px-2 py-1.5 text-center font-mono text-primary">435</td>
                  <td className="border border-border/50 px-2 py-1.5 text-right font-mono">R$ 350,00</td>
                </tr>
                <tr className="hover:bg-secondary/50">
                  <td className="border border-border/50 px-2 py-1.5 text-muted-foreground">10/12/2025</td>
                  <td className="border border-border/50 px-2 py-1.5 text-foreground">Beta Serviços ME</td>
                  <td className="border border-border/50 px-2 py-1.5 text-center font-mono text-primary">435</td>
                  <td className="border border-border/50 px-2 py-1.5 text-right font-mono">R$ 480,00</td>
                </tr>
                <tr className="bg-primary/5">
                  <td colSpan={3} className="border border-border/50 px-2 py-1.5 text-right font-semibold text-foreground">Total ND 435:</td>
                  <td className="border border-border/50 px-2 py-1.5 text-right font-mono font-semibold text-primary">R$ 830,00</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex items-center gap-2 justify-end">
            <div className="px-3 py-1.5 bg-primary text-primary-foreground rounded text-xs font-medium flex items-center gap-1.5">
              <Save className="w-3.5 h-3.5" />
              Salvar
            </div>
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
        
        <div className="p-4">
          <div className="flex items-center gap-2 flex-wrap">
            <SeiIconButton icon={<Eye className="w-5 h-5" />} label="Visualizar" />
            <SeiIconButton icon={<Printer className="w-5 h-5" />} label="Imprimir" />
            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-success/20 border-2 border-success cursor-pointer">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center">
                  <Check className="w-3 h-3 text-background" />
                </div>
              </div>
              <span className="text-[10px] font-semibold text-success">Autenticar</span>
            </div>
            <SeiIconButton icon={<Download className="w-5 h-5" />} label="Download" />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Clique em <span className="font-semibold text-success">Autenticar</span> para validar o documento externo
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
        
        <div className="p-4">
          <div className="flex items-center gap-2 flex-wrap">
            <SeiIconButton icon={<SeiIncluirIcon size={20} />} label="Incluir" />
            <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-accent/20 border-2 border-accent cursor-pointer">
              <SeiEnviarIcon size={24} className="text-accent" />
              <span className="text-[10px] font-semibold text-accent">Enviar</span>
            </div>
            <SeiIconButton icon={<Eye className="w-5 h-5" />} label="Visualizar" />
            <SeiIconButton icon={<SeiAssinarIcon size={20} />} label="Assinar" />
            <SeiIconButton icon={<Printer className="w-5 h-5" />} label="Imprimir" />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Clique em <span className="font-semibold text-accent">Enviar Processo</span> para encaminhar à GAD
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
            <label className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
              Unidades<span className="text-destructive">*</span>:
            </label>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="GAD" 
                className="bg-secondary/50 border border-border rounded px-3 py-1.5 text-foreground w-full text-xs sm:text-sm"
                defaultValue="GAD"
                readOnly
              />
            </div>
          </div>
          
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-foreground">
                10729 - Gerência de Administração (E/4a.CRE/GAD)
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-muted-foreground text-xs sm:text-sm">
              Manter aberto na unidade atual:
            </label>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-border bg-card"></div>
              <span className="text-xs text-muted-foreground">Não (recomendado)</span>
            </div>
          </div>
          
          <div className="pt-3 flex items-center gap-2">
            <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium cursor-pointer hover:bg-primary/90 flex items-center gap-2">
              <SeiEnviarIcon size={16} />
              Enviar
            </div>
            <div className="px-4 py-2 bg-secondary text-foreground rounded-lg text-xs font-medium cursor-pointer hover:bg-secondary/80">
              Cancelar
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
