import { FileText, Download, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoDrawer, AutenticacaoVsAssinaturaContent } from "./InfoDrawer";
import { Callout } from "./Callout";
import { SideNote } from "./SideNote";
import { SeiAssinarIcon } from "./SeiIcons";
import { SeiMockup } from "./SeiMockup";

export const SectionTwo = () => {
  return (
    <section id="secao-2" className="scroll-mt-20 animate-fade-in">
      {/* Download Button - Despacho de Encaminhamento */}
      <div className="mb-6 p-5 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 dark:from-accent/20 dark:to-accent/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="p-2.5 rounded-lg bg-accent/20 flex-shrink-0">
              <FileText className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Modelo do Despacho de Encaminhamento
              </h3>
              <p className="text-sm text-muted-foreground">
                Documento editável (.docx) para formalização da prestação de contas
              </p>
            </div>
          </div>
          <Button
            asChild
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a
              href="https://rioeduca-my.sharepoint.com/:w:/g/personal/wilson_mpeixoto_rioeduca_net/IQC9wPR-JwJySpEGFJeisX7SAU96gsNWnIZiVss7WC0KKjE?e=6sP1ua"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Modelo Editável</span>
            </a>
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Definition Card */}
        <div className="section-card border-l-4 border-l-accent">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
              <FileText className="w-5 h-5 text-accent" />
            </div>
            <div className="content-spacing">
              <h3 className="section-heading">2.1. O Despacho de Encaminhamento</h3>
              <p className="text-justify">
                O Despacho de Encaminhamento é o documento que formaliza a prestação de contas 
                para a Gerência de Administração (GAD).
              </p>
            </div>
          </div>
        </div>

        {/* Functions */}
        <div className="section-card">
          <h3 className="section-heading">Funções Principais</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Formaliza a prestação de contas da unidade gestora do SDP",
              "Registra os valores e datas de liberação dos recursos",
              "Documenta o percentual de recursos consumidos",
              "Estabelece a base documental para análise e aprovação pela GAD",
            ].map((func, i) => (
              <div 
                key={i} 
                className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border-l-4 border-l-primary"
              >
                <p className="text-sm text-foreground leading-relaxed">{func}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Procedure Steps - Timeline */}
        <div className="section-card">
          <h3 className="section-heading">2.2. Procedimentos para Criar o Despacho</h3>
          
          <div className="space-y-4 timeline-steps">
            <div className="flex items-start gap-4 p-5 bg-secondary rounded-xl timeline-step">
              <div className="step-indicator text-sm">1</div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Incluir Documento</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-justify">
                  Com o processo aberto, clique no ícone <strong className="text-foreground">"INCLUIR DOCUMENTO"</strong> na barra de ferramentas do SEI.
                </p>
                <div className="flex justify-center">
                  <SeiMockup variant="incluir-documento" />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-secondary rounded-xl timeline-step">
              <div className="step-indicator text-sm">2</div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Escolha do Tipo de Documento</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-justify">
                  Selecione a opção: <strong className="text-foreground">DESPACHO</strong>
                </p>
                <div className="flex justify-center">
                  <SeiMockup variant="despacho-selection" />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-secondary rounded-xl timeline-step">
              <div className="step-indicator text-sm">3</div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Preenchimento do Editor</h4>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                  No corpo do documento, digite o conteúdo do despacho ou cole o texto padronizado 
                  utilizado pela sua unidade.
                </p>
              </div>
            </div>
            
            <Callout variant="info" title="Dica:">
              Baixe o <strong>Modelo Editável</strong> disponível no início desta página 
              para copiar e colar o texto padrão do despacho.
            </Callout>
          </div>
        </div>

        {/* Preenchimento de Metadados */}
        <div className="section-card">
          <h3 className="section-heading">2.3. Preenchimento de Metadados</h3>
          <div className="content-spacing">
            <p className="text-justify">
              Preencha os campos obrigatórios que identificam o documento no sistema:
            </p>
            
            <div className="flex justify-center">
              <SeiMockup variant="metadados-form" />
            </div>
            
            {/* Campo Descrição */}
            <div className="p-4 bg-secondary rounded-xl border-l-4 border-l-accent">
              <h4 className="font-semibold text-foreground mb-2">Campo: Descrição</h4>
              <code className="block bg-card px-4 py-3 rounded-lg border border-border data-code text-foreground break-all shadow-sm">
                SDP – E/CRE (04.xx.xxx) NOME DA ESCOLA
              </code>
            </div>
            
            {/* Campo Nome na Árvore */}
            <div className="p-4 bg-secondary rounded-xl border-l-4 border-l-primary">
              <h4 className="font-semibold text-foreground mb-2">Campo: Nome na Árvore</h4>
              <code className="block bg-card px-4 py-3 rounded-lg border border-border data-code text-foreground break-all shadow-sm">
                DESPACHO DE ENCAMINHAMENTO
              </code>
            </div>
          </div>
        </div>

        {/* Execution Summary Template */}
        <div className="section-card">
          <h3 className="section-heading">2.4. Modelo de Execução Resumida</h3>
          
          <div className="overflow-x-auto -mx-6 sm:-mx-8 px-6 sm:px-8">
            <table className="table-institutional w-full">
              <thead>
                <tr>
                  <th className="rounded-tl-lg">Saldos e Movimentações</th>
                  <th className="text-right w-28 rounded-tr-lg">Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-muted-foreground">Saldo total inicial em 00/00/202X</td>
                  <td className="text-right data-code">-</td>
                </tr>
                <tr>
                  <td className="pl-6 sm:pl-8 text-muted-foreground">Saldo da natureza <span className="data-code">441</span></td>
                  <td className="text-right data-code">-</td>
                </tr>
                <tr>
                  <td className="pl-6 sm:pl-8 text-muted-foreground">Saldo da natureza <span className="data-code">435</span></td>
                  <td className="text-right data-code">-</td>
                </tr>
                <tr>
                  <td className="pl-6 sm:pl-8 text-muted-foreground">Saldo da natureza <span className="data-code">434</span></td>
                  <td className="text-right data-code">-</td>
                </tr>
                <tr>
                  <td className="text-muted-foreground">Total dos Créditos (ressuprimentos)</td>
                  <td className="text-right data-code">-</td>
                </tr>
                <tr>
                  <td className="text-muted-foreground">Pgtos em cartão (Boletos Bancários)</td>
                  <td className="text-right data-code">-</td>
                </tr>
                <tr className="font-semibold bg-accent/10">
                  <td className="text-foreground">Saldo total final em 00/00/202X</td>
                  <td className="text-right data-code">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Signature */}
        <div className="section-card">
          <div className="flex items-center gap-3 flex-wrap pb-3 mb-4 border-b border-border">
            <h3 className="font-heading font-semibold text-foreground flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full flex-shrink-0"></span>
              2.5. Assinatura e Verificação
            </h3>
            <InfoDrawer title="Assinatura vs Autenticação" triggerLabel="Entenda a diferença">
              <AutenticacaoVsAssinaturaContent />
            </InfoDrawer>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-5 bg-secondary rounded-xl">
              <SeiAssinarIcon size={24} className="flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-foreground mb-2">1. Assinar</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-justify">
                  Clique no ícone <strong className="text-foreground">Assinar Documento</strong> 
                  (representado pela caneta tinteiro preta na barra de ferramentas).
                </p>
                <div className="flex justify-center">
                  <SeiMockup variant="toolbar-assinar" />
                </div>
              </div>
            </div>
            
            <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border-l-4 border-l-primary">
              <p className="font-semibold text-foreground mb-2">2. Verificar</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Certifique-se de que o despacho assinado apareceu corretamente na árvore do processo 
                (menu lateral esquerdo), indicando que o documento foi gerado e assinado com sucesso.
              </p>
            </div>
          </div>

          {/* Dica Pro - Assinatura Externa */}
          <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/20 flex-shrink-0">
                <Link2 className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                  Dica Pro: Assinatura Externa
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-justify">
                  É possível enviar o documento para outra chefia assinar sem precisar tramitar o processo! 
                  Clique no ícone do documento na <strong className="text-foreground">árvore lateral</strong>, 
                  selecione <strong className="text-foreground">"Link para Acesso Direto"</strong> 
                  (ícone de corrente/link) e copie o link gerado para enviar via 
                  <strong className="text-foreground"> WhatsApp</strong> ou 
                  <strong className="text-foreground"> E-mail</strong>.
                </p>
                <div className="flex justify-center">
                  <SeiMockup variant="link-externo" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:grid lg:grid-cols-[1fr,280px] lg:gap-6">
            <Callout variant="info" title="Atenção">
              Caso o documento não apareça como assinado ou não esteja visível na árvore, 
              atualize a página e confira novamente. Persistindo a inconsistência, acione 
              o suporte responsável pelo SEI!RIO antes de dar prosseguimento.
            </Callout>
            
            {/* Side Note */}
            <div className="mt-4 lg:mt-0">
              <SideNote variant="attention" title="PONTO DE ATENÇÃO">
                Documentos <strong>assinados</strong> não podem ser editados. Certifique-se de que o conteúdo está correto antes de assinar.
              </SideNote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
