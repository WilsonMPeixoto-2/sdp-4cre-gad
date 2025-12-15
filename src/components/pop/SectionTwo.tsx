import { FileText, PenLine, AlertCircle, CheckCircle2 } from "lucide-react";

export const SectionTwo = () => {
  return (
    <section id="secao-2" className="scroll-mt-20 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="section-number">2</div>
        <div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
            Despacho de Encaminhamento
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Elaboração do documento de formalização da prestação de contas
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Definition Card */}
        <div className="section-card p-5 sm:p-6 border-l-4 border-l-primary">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 shrink-0">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">2.1. O Despacho de Encaminhamento</h3>
              <p className="text-muted-foreground text-sm sm:text-base text-justified leading-relaxed">
                O Despacho de Encaminhamento é o documento que formaliza a prestação de contas 
                para a Gerência de Administração (GAD).
              </p>
            </div>
          </div>
        </div>

        {/* Functions */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="font-semibold text-foreground mb-4">Funções Principais</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Formaliza a prestação de contas da unidade gestora do SDP",
              "Registra os valores e datas de liberação dos recursos",
              "Documenta o percentual de recursos consumidos",
              "Estabelece a base documental para análise e aprovação pela GAD",
            ].map((func, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm text-foreground text-justified leading-relaxed">{func}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Procedure Steps */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="font-semibold text-foreground mb-4">2.2. Procedimentos para Criar o Despacho</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl">
              <div className="step-indicator shrink-0 text-sm">1</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Incluir Documento</h4>
                <p className="text-sm text-muted-foreground text-justified leading-relaxed">
                  Com o processo aberto, clique no ícone <strong className="text-foreground">"INCLUIR DOCUMENTO"</strong> (representado por uma 
                  folha de papel A4 branca com a borda na cor amarela)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl">
              <div className="step-indicator shrink-0 text-sm">2</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Escolha do Tipo de Documento</h4>
                <p className="text-sm text-muted-foreground text-justified leading-relaxed">
                  Selecione o tipo: <strong className="text-foreground">"Encaminhamento da Prestação de Contas dos Gestores SDP"</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl">
              <div className="step-indicator shrink-0 text-sm">3</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Preenchimento do Editor</h4>
                <p className="text-sm text-muted-foreground text-justified leading-relaxed">
                  No corpo do documento, digite o conteúdo do despacho ou cole o texto padronizado 
                  utilizado pela sua unidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Specification Format */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="font-semibold text-foreground mb-4">2.5. Especificação do Documento</h3>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base text-justified leading-relaxed">
            O campo deve ser preenchido seguindo o formato exato indicado:
          </p>
          
          <div className="highlight-box">
            <p className="font-bold text-foreground mb-2">Formato obrigatório:</p>
            <code className="block bg-card px-4 py-3 rounded-lg border border-border/50 text-sm font-mono text-foreground break-all shadow-sm">
              SDP – E/CRE (04.xx.xxx) NOME DA ESCOLA
            </code>
          </div>
        </div>

        {/* Execution Summary Template */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="font-semibold text-foreground mb-4">Modelo de Execução Resumida</h3>
          
          <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
            <table className="table-institutional text-sm">
              <thead>
                <tr>
                  <th className="rounded-tl-lg">Saldos e Movimentações</th>
                  <th className="text-right w-28 rounded-tr-lg">Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Saldo total inicial em 00/00/202X</td>
                  <td className="text-right font-mono">-</td>
                </tr>
                <tr>
                  <td className="pl-6 sm:pl-8">Saldo da natureza 441</td>
                  <td className="text-right font-mono">-</td>
                </tr>
                <tr>
                  <td className="pl-6 sm:pl-8">Saldo da natureza 435</td>
                  <td className="text-right font-mono">-</td>
                </tr>
                <tr>
                  <td className="pl-6 sm:pl-8">Saldo da natureza 434</td>
                  <td className="text-right font-mono">-</td>
                </tr>
                <tr>
                  <td>Total dos Créditos (ressuprimentos)</td>
                  <td className="text-right font-mono">-</td>
                </tr>
                <tr>
                  <td>Pgtos em cartão (Boletos Bancários)</td>
                  <td className="text-right font-mono">-</td>
                </tr>
                <tr className="font-semibold bg-primary/10">
                  <td>Saldo total final em 00/00/202X</td>
                  <td className="text-right font-mono">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Signature */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="font-semibold text-foreground mb-4">2.7. Assinatura e Verificação</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl">
              <PenLine className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">1. Assinar</p>
                <p className="text-sm text-muted-foreground text-justified leading-relaxed">
                  Clique no ícone Assinar Documento (representado por uma caneta preta na barra de ferramentas).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">2. Verificar</p>
                <p className="text-sm text-muted-foreground text-justified leading-relaxed">
                  Certifique-se de que o despacho assinado apareceu corretamente na árvore do processo 
                  (menu lateral esquerdo), indicando que o documento foi gerado e assinado com sucesso.
                </p>
              </div>
            </div>
          </div>

          <div className="highlight-box mt-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground text-justified leading-relaxed">
                Caso o documento não apareça como assinado ou não esteja visível na árvore, 
                atualize a página e confira novamente. Persistindo a inconsistência, acione 
                o suporte responsável pelo SEI!RIO antes de dar prosseguimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
