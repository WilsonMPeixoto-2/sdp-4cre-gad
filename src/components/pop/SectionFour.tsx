import { Upload, FileText, Calendar, Hash, FolderTree, Shield, AlertCircle, CheckCircle2 } from "lucide-react";

export const SectionFour = () => {
  return (
    <section id="secao-4" className="scroll-mt-20 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="section-number text-base sm:text-lg">4</div>
        <div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
            Inserção de Documentos Externos
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Notas fiscais, recibos, comprovantes e demais documentos
          </p>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {/* General Considerations */}
        <div className="section-card p-4 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 shrink-0">
              <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">4.1. Considerações Gerais</h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                Os documentos externos compreendem todos os arquivos digitalizados que não são 
                produzidos diretamente no sistema SEI!RIO, mas que integram o processo administrativo 
                como elementos comprobatórios essenciais.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                No contexto da prestação de contas do SDP, os documentos externos mais comuns incluem:
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Notas fiscais", "Recibos", "Comprovantes de pagamento", "Extratos bancários"].map((doc, i) => (
                  <span key={i} className="px-2 sm:px-3 py-1 bg-secondary text-xs sm:text-sm text-foreground rounded-full">
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Inclusion Procedure */}
        <div className="section-card p-4 sm:p-6">
          <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">4.2. Procedimento para Inclusão</h3>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary rounded-lg">
              <div className="step-indicator shrink-0 text-xs sm:text-sm">1</div>
              <div>
                <h4 className="font-medium text-foreground mb-1 text-sm sm:text-base">Iniciando a Inclusão</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Localize e clique no ícone <strong className="text-foreground">"Incluir Documento"</strong> na 
                  barra de ferramentas. No menu, selecione a opção <strong className="text-foreground">"EXTERNO"</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary rounded-lg">
              <div className="step-indicator shrink-0 text-xs sm:text-sm">2</div>
              <div>
                <h4 className="font-medium text-foreground mb-1 text-sm sm:text-base">Preenchimento dos Campos</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  O sistema abrirá a tela "Registrar Documento Externo" com campos obrigatórios 
                  para identificação e catalogação do documento.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fields Description */}
        <div className="section-card p-4 sm:p-6">
          <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Campos do Registro</h3>
          
          <div className="grid gap-3 sm:gap-4">
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground text-sm sm:text-base">Tipo do Documento</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Selecione o tipo específico (ex: "Nota Fiscal", "Recibo", "Fatura")
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground text-sm sm:text-base">Data do Documento</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Informe a data de emissão que consta no documento original
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg">
              <Hash className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground text-sm sm:text-base">Número do Documento</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Preencha com o número identificador (ex: número da nota fiscal)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg">
              <FolderTree className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground text-sm sm:text-base">Nome na Árvore</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Recomenda-se preencher com o nome da empresa emissora do documento
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground text-sm sm:text-base">Nível de Acesso</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Para documentos do SDP sem informações sigilosas, marque <strong>"Público"</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Table */}
        <div className="section-card p-4 sm:p-6">
          <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Resumo do Preenchimento</h3>
          
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-[400px] sm:min-w-0 px-4 sm:px-0">
              <table className="table-institutional text-xs sm:text-sm">
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium">TIPO DO DOCUMENTO</td>
                    <td>Selecione "Nota Fiscal" (ou Recibo/Fatura)</td>
                  </tr>
                  <tr>
                    <td className="font-medium">DATA DO DOCUMENTO</td>
                    <td>Data de emissão da Nota</td>
                  </tr>
                  <tr>
                    <td className="font-medium">NÚMERO</td>
                    <td>Número da NF</td>
                  </tr>
                  <tr>
                    <td className="font-medium">NOME NA ÁRVORE</td>
                    <td>Nome da empresa emissora</td>
                  </tr>
                  <tr>
                    <td className="font-medium">FORMATO</td>
                    <td>Digitalizado nesta unidade</td>
                  </tr>
                  <tr>
                    <td className="font-medium">TIPO DE CONFERÊNCIA</td>
                    <td>"Cópia Simples" ou "Original"</td>
                  </tr>
                  <tr>
                    <td className="font-medium">NÍVEL DE ACESSO</td>
                    <td>Público</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Upload and Authentication */}
        <div className="section-card p-4 sm:p-6">
          <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Anexar e Autenticar</h3>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-secondary rounded-lg">
              <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm sm:text-base">Anexar o Arquivo</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Clique em "Escolher Arquivo" e localize o PDF no diretório do seu computador.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-secondary rounded-lg">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm sm:text-base">Autenticar e Assinar</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Localize o ícone "Autenticar Documento" (selo preto com check branco). 
                  Na janela pop-up, insira sua Senha de Rede e clique em Assinar.
                </p>
              </div>
            </div>
          </div>

          <div className="highlight-box mt-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-muted-foreground">
                <strong className="text-foreground">Importante:</strong> O procedimento de autenticação 
                é obrigatório para validar o documento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
