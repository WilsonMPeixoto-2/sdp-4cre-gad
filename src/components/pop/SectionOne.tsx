import { ClipboardList, ChevronRight, AlertCircle, CheckCircle2, Info } from "lucide-react";

export const SectionOne = () => {
  return (
    <section id="secao-1" className="scroll-mt-20 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="section-number text-lg">1</div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">
            Abertura do Processo no SEI!
          </h2>
          <p className="text-muted-foreground">
            Acesso ao SEI!RIO, criação do processo, numeração e identificação
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Intro Card */}
        <div className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <ClipboardList className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">1.1. Sobre esta etapa</h3>
              <p className="text-muted-foreground">
                A etapa inicial compreende a autuação do processo administrativo eletrônico, 
                no qual serão inseridos todos os documentos comprobatórios da prestação de contas.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">1.2. Iniciando o Processo</h3>
          <p className="text-muted-foreground mb-4">
            Para abrir um novo processo no SEI!RIO, o usuário deve selecionar a opção 
            <strong className="text-foreground"> "INICIAR PROCESSO"</strong>, conforme o menu de navegação do sistema.
          </p>

          <div className="bg-secondary rounded-lg p-4 mb-4">
            <p className="text-sm font-medium text-foreground mb-2">Menu do Sistema:</p>
            <div className="flex flex-wrap gap-2">
              {["Pesquisar no Menu", "Estatísticas", "Favoritos", "Iniciar Processo"].map((item, i) => (
                <span 
                  key={i}
                  className={`px-3 py-1.5 rounded text-sm ${
                    item === "Iniciar Processo" 
                      ? "bg-primary text-primary-foreground font-medium" 
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Type Selection */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">1.3. Seleção do Tipo de Processo</h3>
          <p className="text-muted-foreground mb-4">
            Ao selecionar essa opção, o usuário deverá indicar o TIPO DE PROCESSO a ser instaurado. 
            Os tipos de processo disponíveis serão exibidos de acordo com os termos informados na busca.
          </p>

          <div className="highlight-box mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-accent" />
              <span className="font-semibold text-foreground">Tipo de Processo Correto:</span>
            </div>
            <p className="text-foreground font-medium">
              EXECUÇÃO FINANCEIRA: SISTEMA DESCENTRALIZADO DE PAGAMENTO - SDP
            </p>
          </div>
        </div>

        {/* Classification */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">1.5. Classificação por Assuntos</h3>
          <p className="text-muted-foreground mb-4">
            Este campo será preenchido automaticamente pelo sistema, em conformidade com o Tipo de 
            Processo selecionado pelo usuário na etapa anterior.
          </p>

          <div className="bg-secondary rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">Classificação automática:</p>
            <code className="block bg-card px-4 py-2 rounded border text-sm font-mono text-foreground">
              01.05.03.11 - SISTEMA DESCENTRALIZADO DE PAGAMENTO
            </code>
          </div>
        </div>

        {/* Specification */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">1.8. Especificação</h3>
          <p className="text-muted-foreground mb-4">
            O cadastrante deverá obrigatoriamente digitar os metadados estabelecidos pela GAD, 
            composto pelo Objetivo do processo + DESIGNAÇÃO DA UNIDADE ESCOLAR + NOMENCLATURA DA UNIDADE.
          </p>

          <div className="highlight-box">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-semibold text-foreground">Exemplo de Especificação:</span>
            </div>
            <code className="text-foreground font-mono text-sm">
              Prestação de contas de SDP - E/CRE(04.30.502) Ciep Elis Regina
            </code>
          </div>
        </div>

        {/* Access Level */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">1.11. Nível de Acesso</h3>
          
          <div className="overflow-x-auto">
            <table className="table-institutional">
              <thead>
                <tr>
                  <th>Nível</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Público</td>
                  <td>Documentos acessíveis a qualquer pessoa, seja usuário interno ou externo via Consulta Pública.</td>
                </tr>
                <tr>
                  <td className="font-medium">Restrito</td>
                  <td>Acessíveis apenas para a unidade que criou o processo e por unidades que recebam o processo para instrução.</td>
                </tr>
                <tr>
                  <td className="font-medium">Sigiloso</td>
                  <td>Classificação atribuída a informações confidenciais, com acesso controlado por Credenciais de Acesso.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="highlight-box mt-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Princípio da Publicidade</p>
                <p className="text-sm text-muted-foreground">
                  Os processos de prestação de contas do SDP devem, como regra, ser classificados 
                  com nível de acesso <strong className="text-foreground">"Público"</strong>, por se 
                  referirem à aplicação de recursos públicos (Art. 37 CF e Lei nº 12.527/2011).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
