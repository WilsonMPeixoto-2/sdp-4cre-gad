import { Upload, FileText, Calendar, Hash, FolderTree, Shield, AlertCircle, CheckCircle2 } from "lucide-react";

export const SectionFour = () => {
  return (
    <section id="secao-4" className="scroll-mt-20 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="section-number text-lg">4</div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">
            Inserção de Documentos Externos
          </h2>
          <p className="text-muted-foreground">
            Notas fiscais, recibos, comprovantes e demais documentos
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* General Considerations */}
        <div className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Upload className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">4.1. Considerações Gerais</h3>
              <p className="text-muted-foreground mb-4">
                Os documentos externos compreendem todos os arquivos digitalizados que não são 
                produzidos diretamente no sistema SEI!RIO, mas que integram o processo administrativo 
                como elementos comprobatórios essenciais.
              </p>
              <p className="text-muted-foreground">
                No contexto da prestação de contas do SDP, os documentos externos mais comuns incluem:
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Notas fiscais", "Recibos", "Comprovantes de pagamento", "Extratos bancários", "Documentos fiscais"].map((doc, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary text-sm text-foreground rounded-full">
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Inclusion Procedure */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">4.2. Procedimento para Inclusão</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
              <div className="step-indicator shrink-0">1</div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Iniciando a Inclusão</h4>
                <p className="text-sm text-muted-foreground">
                  Localize e clique no ícone <strong className="text-foreground">"Incluir Documento"</strong> na 
                  barra de ferramentas. No menu, selecione a opção <strong className="text-foreground">"EXTERNO"</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
              <div className="step-indicator shrink-0">2</div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Preenchimento dos Campos</h4>
                <p className="text-sm text-muted-foreground">
                  O sistema abrirá a tela "Registrar Documento Externo" com campos obrigatórios 
                  para identificação e catalogação do documento.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fields Description */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Campos do Registro</h3>
          
          <div className="grid gap-4">
            <div className="flex items-start gap-4 p-4 border rounded-lg">
              <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground">Tipo do Documento</h4>
                <p className="text-sm text-muted-foreground">
                  Selecione o tipo específico (ex: "Nota Fiscal", "Recibo", "Fatura")
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border rounded-lg">
              <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground">Data do Documento</h4>
                <p className="text-sm text-muted-foreground">
                  Informe a data de emissão que consta no documento original
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border rounded-lg">
              <Hash className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground">Número do Documento</h4>
                <p className="text-sm text-muted-foreground">
                  Preencha com o número identificador (ex: número da nota fiscal)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border rounded-lg">
              <FolderTree className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground">Nome na Árvore</h4>
                <p className="text-sm text-muted-foreground">
                  Recomenda-se preencher com o nome da empresa emissora do documento
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border rounded-lg">
              <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground">Nível de Acesso</h4>
                <p className="text-sm text-muted-foreground">
                  Para documentos do SDP sem informações sigilosas, marque <strong>"Público"</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Table */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Resumo do Preenchimento</h3>
          
          <div className="overflow-x-auto">
            <table className="table-institutional text-sm">
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

        {/* Upload and Authentication */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Anexar e Autenticar</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
              <Upload className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Anexar o Arquivo</p>
                <p className="text-sm text-muted-foreground">
                  Clique em "Escolher Arquivo" e localize o PDF no diretório do seu computador.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Autenticar e Assinar</p>
                <p className="text-sm text-muted-foreground">
                  Localize o ícone "Autenticar Documento" (selo preto com check branco). 
                  Na janela pop-up, insira sua Senha de Rede e clique em Assinar.
                </p>
              </div>
            </div>
          </div>

          <div className="highlight-box mt-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
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
