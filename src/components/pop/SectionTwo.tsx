import { FileText, Edit, Save, PenLine, AlertCircle, CheckCircle2 } from "lucide-react";

export const SectionTwo = () => {
  return (
    <section id="secao-2" className="scroll-mt-20 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="section-number text-lg">2</div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">
            Despacho de Encaminhamento
          </h2>
          <p className="text-muted-foreground">
            Elaboração do documento de formalização da prestação de contas
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Definition Card */}
        <div className="section-card p-6 border-l-4 border-l-primary">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">2.1. O Despacho de Encaminhamento</h3>
              <p className="text-muted-foreground">
                O Despacho de Encaminhamento é o documento que formaliza a prestação de contas 
                para a Gerência de Administração (GAD).
              </p>
            </div>
          </div>
        </div>

        {/* Functions */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Funções Principais</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Formaliza a prestação de contas da unidade gestora do SDP",
              "Registra os valores e datas de liberação dos recursos",
              "Documenta o percentual de recursos consumidos",
              "Estabelece a base documental para análise e aprovação pela GAD",
            ].map((func, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{func}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Procedure Steps */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">2.2. Procedimentos para Criar o Despacho</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
              <div className="step-indicator shrink-0">1</div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Abertura do Processo</h4>
                <p className="text-sm text-muted-foreground">
                  Com o processo aberto, observe a barra de ícones superior e clique no primeiro ícone: 
                  <strong className="text-foreground"> "INCLUIR DOCUMENTO"</strong> (representado por uma 
                  folha de papel A4 branca com a borda na cor amarela)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
              <div className="step-indicator shrink-0">2</div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Escolha do Tipo de Documento</h4>
                <p className="text-sm text-muted-foreground">
                  Selecione o tipo: <strong className="text-foreground">"Encaminhamento da Prestação de Contas dos Gestores SDP"</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
              <div className="step-indicator shrink-0">3</div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Preenchimento do Editor</h4>
                <p className="text-sm text-muted-foreground">
                  No corpo do documento, digite o conteúdo do despacho ou cole o texto padronizado 
                  utilizado pela sua unidade, assegurando linguagem formal e adequada aos atos oficiais.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Specification Format */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">2.5. Especificação do Documento</h3>
          <p className="text-muted-foreground mb-4">
            O campo deve ser preenchido seguindo o formato exato indicado:
          </p>
          
          <div className="highlight-box">
            <p className="font-medium text-foreground mb-2">Formato obrigatório:</p>
            <code className="block bg-card px-4 py-3 rounded border text-sm font-mono text-foreground">
              SDP – E/CRE (04.xx.xxx) NOME DA ESCOLA
            </code>
          </div>
        </div>

        {/* Execution Summary Template */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Modelo de Execução Resumida</h3>
          
          <div className="overflow-x-auto">
            <table className="table-institutional text-sm">
              <thead>
                <tr>
                  <th>Saldos e Movimentações</th>
                  <th className="text-right">Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Saldo total inicial em 00/00/202X</td>
                  <td className="text-right font-mono">-</td>
                </tr>
                <tr>
                  <td className="pl-8">Saldo da natureza 441</td>
                  <td className="text-right font-mono">-</td>
                </tr>
                <tr>
                  <td className="pl-8">Saldo da natureza 435</td>
                  <td className="text-right font-mono">-</td>
                </tr>
                <tr>
                  <td className="pl-8">Saldo da natureza 434</td>
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
                <tr className="font-semibold bg-primary/5">
                  <td>Saldo total final em 00/00/202X</td>
                  <td className="text-right font-mono">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Signature */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">2.7. Assinatura e Verificação</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
              <PenLine className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Assinar</p>
                <p className="text-sm text-muted-foreground">
                  Clique no ícone Assinar Documento (representado por uma caneta preta na barra de ferramentas).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Verificar</p>
                <p className="text-sm text-muted-foreground">
                  Certifique-se de que o despacho assinado apareceu corretamente na árvore do processo 
                  (menu lateral esquerdo).
                </p>
              </div>
            </div>
          </div>

          <div className="highlight-box mt-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Caso o documento não apareça como assinado ou não esteja visível na árvore, 
                atualize a página e confira novamente. Persistindo a inconsistência, acione 
                o suporte responsável pelo SEI!RIO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
