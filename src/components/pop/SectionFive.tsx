import { CheckCircle, Send, FileCheck, AlertCircle, TreeDeciduous } from "lucide-react";

export const SectionFive = () => {
  return (
    <section id="secao-5" className="scroll-mt-20 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="section-number text-lg">5</div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">
            Conferência Final e Envio
          </h2>
          <p className="text-muted-foreground">
            Verificação dos documentos e envio para a GAD
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Intro */}
        <div className="section-card p-6 border-l-4 border-l-success">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-success/10">
              <CheckCircle className="w-6 h-6 text-success" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Verificação Essencial</h3>
              <p className="text-muted-foreground">
                Após inserir todos os documentos, é fundamental fazer uma verificação final 
                antes de enviar o processo para garantir que tudo está correto.
              </p>
            </div>
          </div>
        </div>

        {/* Verification Steps */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Checklist de Verificação</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
              <div className="step-indicator shrink-0 bg-success">
                <TreeDeciduous className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">5.1. Verifique a Árvore do Processo</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Confira o menu lateral esquerdo que mostra a lista de arquivos. Todos os documentos 
                  devem estar listados corretamente.
                </p>
                <div className="bg-card p-3 rounded border">
                  <p className="text-xs text-muted-foreground mb-2">Exemplo de estrutura:</p>
                  <div className="space-y-1 text-sm font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">📁</span>
                      <span>Processo 04.xx...</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <span className="text-success">✓</span>
                      <span>Despacho Inicial</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <span className="text-success">✓</span>
                      <span>Demonstrativo de Despesas</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <span className="text-success">✓</span>
                      <span>Nota Fiscal (Empresa X)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
              <div className="step-indicator shrink-0 bg-success">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">5.2. Confira Assinaturas</h4>
                <p className="text-sm text-muted-foreground">
                  Verifique se todos os documentos estão autenticados/assinados. 
                  Devem ter um <strong className="text-foreground">ícone amarelo</strong> ao lado 
                  indicando a autenticação.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Send Process */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">5.3. Envio para a GAD</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="p-3 rounded-xl bg-primary/10">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Procedimento de Envio</h4>
                <p className="text-sm text-muted-foreground">
                  Após a conferência completa, clique no ícone de envio (representado por um envelope).
                </p>
              </div>
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-medium text-foreground mb-3">5.4. Campo "Destinatários"</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Digite <strong className="text-foreground">"GAD"</strong> e selecione a unidade correspondente:
              </p>
              
              <div className="bg-card p-3 rounded border">
                <code className="text-sm font-mono text-primary block mb-2">
                  10729 - Gerência de Administração (E/4a.CRE/GAD)
                </code>
                <p className="text-xs text-muted-foreground">
                  ⚠️ Certifique-se de selecionar a GAD da 4ª CRE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other GADs Reference */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Referência: Códigos das GADs</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Para referência, seguem os códigos das Gerências de Administração das CREs:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { code: "10714", name: "E/1a.CRE/GAD" },
              { code: "10719", name: "E/2a.CRE/GAD" },
              { code: "10724", name: "E/3a.CRE/GAD" },
              { code: "10729", name: "E/4a.CRE/GAD", highlight: true },
              { code: "10734", name: "E/5a.CRE/GAD" },
              { code: "10739", name: "E/6a.CRE/GAD" },
              { code: "10709", name: "E/10a.CRE/GAD" },
            ].map((gad, i) => (
              <div 
                key={i} 
                className={`px-4 py-2 rounded text-sm font-mono ${
                  gad.highlight 
                    ? "bg-primary text-primary-foreground font-semibold" 
                    : "bg-secondary text-foreground"
                }`}
              >
                {gad.code} - {gad.name}
              </div>
            ))}
          </div>
        </div>

        {/* Final Alert */}
        <div className="highlight-box">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Antes de Enviar</p>
              <p className="text-sm text-muted-foreground">
                Revise cuidadosamente todos os documentos e informações. Após o envio, 
                alterações só poderão ser feitas mediante solicitação à GAD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
