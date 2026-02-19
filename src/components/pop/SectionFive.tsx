import { CheckCircle, Send, FileCheck, AlertCircle, FolderTree } from "lucide-react";
import { SeiMockup } from "./SeiMockup";
import { CopyButton } from "./CopyButton";
import { SideNote } from "./SideNote";
import { Callout } from "./Callout";
import { ContentBlock, ContentBlockGrid } from "./ContentBlock";

export const SectionFive = () => {
  const gadCodes = [
    { code: "10714", name: "E/1a.CRE/GAD" },
    { code: "10719", name: "E/2a.CRE/GAD" },
    { code: "10724", name: "E/3a.CRE/GAD" },
    { code: "10729", name: "E/4a.CRE/GAD", highlight: true },
    { code: "10734", name: "E/5a.CRE/GAD" },
    { code: "10739", name: "E/6a.CRE/GAD" },
    { code: "10709", name: "E/10a.CRE/GAD" },
  ];

  return (
    <section id="secao-5" className="scroll-mt-20 animate-fade-in">
      {/* Section Header - padronizado com divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="section-number">5</div>
        <div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
            Conferência e Envio
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Verificação dos documentos e envio para a GAD
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Quick Scan Blocks - Mobile-friendly overview */}
        <ContentBlockGrid>
          <ContentBlock variant="what" title="O que é">
            <p>
              Etapa final de verificação da documentação antes do envio à GAD para análise.
            </p>
          </ContentBlock>
          <ContentBlock variant="action" title="O que fazer">
            <p>
              Conferir árvore do processo, verificar assinaturas/autenticações e enviar para a GAD da 4ª CRE.
            </p>
          </ContentBlock>
        </ContentBlockGrid>

        {/* Intro */}
        <div className="section-card p-5 sm:p-6 border-l-4 border-l-accent">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/10 shrink-0">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Verificação Essencial</h3>
              <p className="text-muted-foreground text-sm sm:text-base text-justify leading-relaxed">
                Após inserir todos os documentos, é fundamental fazer uma verificação final 
                antes de enviar o processo para garantir que tudo está correto.
              </p>
            </div>
          </div>
        </div>

        {/* Verification Steps */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="section-heading">Checklist de Verificação</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl">
              <div className="step-indicator shrink-0 bg-accent text-sm">
                <FolderTree className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground mb-1">5.1. Verifique a Árvore do Processo</p>
                <p className="text-sm text-muted-foreground mb-3 text-justify leading-relaxed">
                  Confira o menu lateral esquerdo que mostra a lista de arquivos. Todos os documentos 
                  devem estar listados corretamente.
                </p>
                <div className="flex justify-center">
                  <SeiMockup variant="process-tree" />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl">
              <div className="step-indicator shrink-0 bg-accent text-sm">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">5.2. Confira Assinaturas</p>
                <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                  Verifique se todos os documentos estão autenticados/assinados. 
                  Devem ter um <strong className="text-foreground">ícone de check</strong> ao lado 
                  indicando a autenticação.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Send Process */}
        <div className="lg:grid lg:grid-cols-[1fr,260px] lg:gap-6">
          <div className="section-card p-5 sm:p-6">
            <h3 className="section-heading">5.3. Envio para a GAD</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">Procedimento de Envio</h4>
                  <p className="text-sm text-muted-foreground text-justify leading-relaxed mb-3">
                    Após a conferência completa, clique no ícone de envio (representado por um envelope).
                  </p>
                  <div className="flex justify-center">
                    <SeiMockup variant="enviar-processo" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-3">5.4. Campo "Destinatários"</h4>
                <p className="text-sm text-muted-foreground mb-3 text-justify leading-relaxed">
                  Digite <strong className="text-foreground">"GAD"</strong> e selecione a unidade correspondente:
                </p>
                
                <div className="mb-4 flex justify-center">
                  <SeiMockup variant="destinatarios-form" />
                </div>
                
                <div className="bg-card p-4 rounded-xl border border-border/50">
                  <div className="flex items-center justify-between gap-2">
                    <code className="text-sm data-code text-primary break-all font-semibold">
                      10729 - Gerência de Administração (E/4a.CRE/GAD)
                    </code>
                    <CopyButton text="10729 - Gerência de Administração (E/4a.CRE/GAD)" label="Código copiado!" />
                  </div>
                  <p className="text-xs text-primary flex items-center gap-1 mt-2">
                    <AlertCircle className="w-3 h-3" />
                    Certifique-se de selecionar a GAD da 4ª CRE
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Side Note */}
          <div className="mt-4 lg:mt-0">
            <SideNote variant="attention" title="PONTO DE ATENÇÃO">
              <p className="text-sm mb-3">
                Após o envio, o processo não poderá mais ser editado pela sua unidade.
              </p>
              <p className="text-sm">
                Alterações só poderão ser feitas mediante solicitação à GAD.
              </p>
            </SideNote>
          </div>
        </div>

        {/* Other GADs Reference */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="section-heading">Referência: Códigos das GADs</h3>
          <p className="text-sm text-muted-foreground mb-4 text-justify leading-relaxed">
            Para referência, seguem os códigos das Gerências de Administração das CREs:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {gadCodes.map((gad, i) => (
              <div 
                key={i} 
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm data-code transition-all ${
                  gad.highlight 
                    ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold shadow-md" 
                    : "bg-card text-foreground border border-border/50 hover:border-primary/30"
                }`}
              >
                <span>{gad.code} - {gad.name}</span>
                <CopyButton 
                  text={`${gad.code} - ${gad.name}`} 
                  label="Código copiado!" 
                  className={gad.highlight ? "hover:bg-primary-foreground/20" : ""}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Final Alert */}
        <Callout variant="info" title="Antes de Enviar">
          <p className="text-sm text-muted-foreground text-justify leading-relaxed">
            Revise cuidadosamente todos os documentos e informações. Após o envio, 
            alterações só poderão ser feitas mediante solicitação à GAD.
          </p>
        </Callout>
      </div>
    </section>
  );
};
