import { useState, useEffect } from "react";
import { CheckCircle2, Circle, Trash2, Sparkles, AlertCircle, FileText, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface SubTask {
  id: string;
  label: string;
  required: boolean;
}

interface Step {
  id: number;
  title: string;
  description: string;
  tasks: SubTask[];
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "Abertura do Processo",
    description: "Criação do processo no SEI!RIO e parametrização inicial.",
    tasks: [
      { id: "step1_iniciar", label: "Clicar em 'Iniciar Processo' no menu do SEI", required: true },
      { id: "step1_tipo", label: "Selecionar o tipo: 'EXECUÇÃO FINANCEIRA: SISTEMA DESCENTRALIZADO DE PAGAMENTO - SDP'", required: true },
      { id: "step1_especificacao", label: "Especificação: Preencher com 'Prestação de contas de SDP - E/CRE (04.XX.XXX) - Nome da Escola'", required: true },
      { id: "step1_interessados", label: "Interessados: Adicionar '10729 - E/4a.CRE/GAD'", required: true },
      { id: "step1_acesso", label: "Definir Nível de Acesso como 'Público'", required: true },
    ]
  },
  {
    id: 2,
    title: "Despacho de Encaminhamento",
    description: "Formalização e justificativa do envio da prestação de contas.",
    tasks: [
      { id: "step2_gerar", label: "Clicar em 'Incluir Documento' e escolher tipo 'DESPACHO'", required: true },
      { id: "step2_desc", label: "Descrição: Preencher com 'SDP – E/CRE (04.XX.XXX) - Nome da Escola'", required: true },
      { id: "step2_arvore", label: "Nome na Árvore: Preencher com 'DESPACHO DE ENCAMINHAMENTO'", required: true },
      { id: "step2_texto", label: "Redigir e salvar o texto do despacho no editor do SEI", required: true },
      { id: "step2_assinar", label: "Assinar eletronicamente o Despacho", required: true },
    ]
  },
  {
    id: 3,
    title: "Demonstrativo de Despesas",
    description: "Declaração interna dos valores gastos por Natureza de Despesa.",
    tasks: [
      { id: "step3_tipo", label: "Incluir um documento 'DEMONSTRATIVO' (ou similar interno)", required: true },
      { id: "step3_nd", label: "Separar os demonstrativos por Natureza de Despesa (ex: ND 435 e ND 441)", required: true },
      { id: "step3_valores", label: "Preencher a tabela de despesas com datas, favorecidos, notas e valores", required: true },
      { id: "step3_assinar", label: "Assinar o(s) demonstrativo(s) após salvar", required: true },
    ]
  },
  {
    id: 4,
    title: "Documentos Externos (Notas Fiscais)",
    description: "Upload e autenticação das notas fiscais e comprovantes bancários.",
    tasks: [
      { id: "step4_gerar", label: "Incluir documento tipo 'EXTERNO' para cada Nota Fiscal/Recibo", required: true },
      { id: "step4_metadados", label: "Preencher metadados: Tipo, Data de Emissão, Nº do Documento e Fornecedor", required: true },
      { id: "step4_formato", label: "Definir Formato como 'Digitalizado nesta unidade' e Conferência como 'Original' ou 'Cópia Simples'", required: true },
      { id: "step4_upload", label: "Fazer upload do arquivo PDF correspondente", required: true },
      { id: "step4_autenticar", label: "Autenticar o documento usando a senha de rede (não assinar!)", required: true },
      { id: "step4_cartao", label: "Se pago via Cartão, anexar o comprovante da transação junto à NF", required: false },
    ]
  },
  {
    id: 5,
    title: "Conferência e Envio",
    description: "Verificação dos documentos e tramitação para a GAD.",
    tasks: [
      { id: "step5_conferencia", label: "Conferir se todos os itens externos estão devidamente autenticados (selo preto)", required: true },
      { id: "step5_assinaturas", label: "Verificar se todos os documentos internos estão assinados (caneta vermelha)", required: true },
      { id: "step5_enviar", label: "Clicar no ícone 'Enviar Processo'", required: true },
      { id: "step5_unidade", label: "Inserir a unidade de destino: 'E/4a.CRE/GAD' (10729)", required: true },
      { id: "step5_manter", label: "Desmarcar a opção 'Manter aberto na unidade atual' e clicar em Enviar", required: true },
    ]
  }
];

export const ServerChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [activeStep, setActiveStep] = useState<number>(1);
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({ 1: true });

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sdp_sei_checklist_v2");
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Error reading localStorage", e);
    }
  }, []);

  // Save state to localStorage on update
  const saveState = (newChecked: Record<string, boolean>) => {
    setCheckedItems(newChecked);
    try {
      localStorage.setItem("sdp_sei_checklist_v2", JSON.stringify(newChecked));
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }
  };

  const handleToggle = (id: string, stepId: number) => {
    const updated = { ...checkedItems, [id]: !checkedItems[id] };
    saveState(updated);

    // Toast notification for positive reinforcement
    if (updated[id]) {
      // Check if all subtasks in this step are completed
      const step = STEPS.find(s => s.id === stepId);
      if (step) {
        const stepAllDone = step.tasks.every(t => !t.required || updated[t.id]);
        if (stepAllDone) {
          toast.success(`Etapa ${stepId}: "${step.title}" concluída! 🎉`, {
            description: "Continue assim para finalizar o processo no SEI.",
            duration: 3500,
          });
          
          // Auto-expand next step if not last
          if (stepId < STEPS.length) {
            setExpandedSteps(prev => ({ ...prev, [stepId + 1]: true }));
            setActiveStep(stepId + 1);
          }
        }
      }
    }
  };

  const handleReset = () => {
    if (window.confirm("Deseja realmente limpar todo o progresso do checklist?")) {
      saveState({});
      setExpandedSteps({ 1: true });
      setActiveStep(1);
      toast.info("Progresso do checklist resetado.");
    }
  };

  const toggleExpand = (stepId: number) => {
    setExpandedSteps(prev => ({ ...prev, [stepId]: !prev[stepId] }));
  };

  // Calculations
  const allTasks = STEPS.flatMap(s => s.tasks);
  const requiredTasks = allTasks.filter(t => t.required);
  
  const completedRequiredCount = requiredTasks.filter(t => checkedItems[t.id]).length;
  const totalRequiredCount = requiredTasks.length;
  const progressPercent = totalRequiredCount > 0 
    ? Math.round((completedRequiredCount / totalRequiredCount) * 100) 
    : 0;

  const isStepCompleted = (step: Step) => {
    return step.tasks.every(t => !t.required || checkedItems[t.id]);
  };

  const isAllCompleted = progressPercent === 100;

  return (
    <div className="section-card p-5 sm:p-7 border border-border relative overflow-hidden bg-gradient-to-b from-card to-secondary/10">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
            <CheckCircle2 className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground tracking-tight">
              Checklist de Execução do Servidor
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Acompanhe seu progresso real de montagem do processo no SEI!RIO
            </p>
          </div>
        </div>
        
        {completedRequiredCount > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleReset}
            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all text-xs font-semibold rounded-lg self-start sm:self-center gap-1.5"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Limpar Progresso
          </Button>
        )}
      </div>

      {/* General Progress Bar */}
      <div className="mb-6 p-4 rounded-xl bg-secondary/50 border border-border/50 shadow-inner">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Progresso Geral da Prestação
          </span>
          <span className="text-sm font-bold text-accent font-mono">
            {progressPercent}% ({completedRequiredCount} de {totalRequiredCount} obrigatórios)
          </span>
        </div>
        <Progress value={progressPercent} className="h-2.5 transition-all duration-500" aria-label="Progresso do processo SEI" />
        
        <AnimatePresence>
          {isAllCompleted && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-3 p-3 bg-success/10 border border-success/30 rounded-lg flex items-start gap-2.5"
            >
              <Sparkles className="w-5 h-5 text-success shrink-0 mt-0.5 animate-pulse" />
              <div>
                <p className="text-xs font-bold text-success uppercase tracking-wider">
                  Processo Pronto para Envio!
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  Todas as etapas obrigatórias foram cumpridas. Você já pode tramitar o processo para a **GAD (10729)** no SEI!RIO com segurança.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Stepper Steps List */}
      <div className="space-y-4 relative">
        {STEPS.map((step, idx) => {
          const isCompleted = isStepCompleted(step);
          const isExpanded = !!expandedSteps[step.id];
          const stepNum = step.id;

          return (
            <div 
              key={step.id} 
              className={`rounded-xl border transition-all duration-300 ${
                isCompleted 
                  ? "bg-success/5 border-success/20 shadow-sm" 
                  : isExpanded 
                    ? "bg-card border-border/80 shadow-md ring-1 ring-border/20" 
                    : "bg-secondary/30 border-border/40 opacity-85 hover:opacity-100"
              }`}
            >
              {/* Step Header Accordion Toggle */}
              <div 
                onClick={() => toggleExpand(step.id)}
                className="flex items-center justify-between p-4 cursor-pointer select-none"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Circle Badge Number or Done Mark */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-all duration-300 ${
                    isCompleted 
                      ? "bg-success text-success-foreground shadow-sm shadow-success/20" 
                      : isExpanded 
                        ? "bg-accent text-accent-foreground shadow-sm shadow-accent/20" 
                        : "bg-muted text-muted-foreground"
                  }`}>
                    {isCompleted ? <Check className="w-4 h-4" /> : stepNum}
                  </div>
                  
                  <div className="min-w-0">
                    <h4 className={`font-heading font-semibold text-sm sm:text-base leading-tight transition-colors ${
                      isCompleted ? "text-success/90 line-through decoration-success/30" : "text-foreground"
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate max-w-[220px] sm:max-w-md mt-0.5">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="text-muted-foreground p-1 hover:bg-secondary rounded-lg transition-colors">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>

              {/* Step Tasks List (Animated) */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-border/40"
                  >
                    <div className="p-4 bg-gradient-to-b from-transparent to-secondary/15 space-y-2.5">
                      {step.tasks.map((task) => {
                        const checked = !!checkedItems[task.id];
                        return (
                          <div 
                            key={task.id}
                            onClick={() => handleToggle(task.id, step.id)}
                            className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer select-none transition-all ${
                              checked 
                                ? "bg-success/5 border-success/20 hover:bg-success/10" 
                                : "bg-background border-border/40 hover:border-accent/40 hover:bg-secondary/40"
                            }`}
                          >
                            <Checkbox 
                              checked={checked}
                              onCheckedChange={() => handleToggle(task.id, step.id)}
                              aria-label={`Tarefa: ${task.label}`}
                              className="mt-0.5 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <p className={`text-xs sm:text-sm leading-relaxed transition-all ${
                                checked 
                                  ? "text-muted-foreground line-through opacity-70" 
                                  : "text-foreground/90 font-medium"
                              }`}>
                                {task.label}
                              </p>
                            </div>
                            <span className={`text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded shrink-0 ${
                              task.required 
                                ? checked 
                                  ? "bg-success/15 text-success" 
                                  : "bg-accent/15 text-accent"
                                : "bg-muted text-muted-foreground"
                            }`}>
                              {task.required ? "Obrigatorio" : "Opcional"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
