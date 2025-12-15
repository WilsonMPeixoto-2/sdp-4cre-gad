import { ClipboardList, AlertCircle, CheckCircle2, Info, Plus } from "lucide-react";

export const SectionOne = () => {
  return (
    <section id="secao-1" className="scroll-mt-20 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="section-number">1</div>
        <div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
            Abertura do Processo no SEI!
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Acesso ao SEI!RIO, criação do processo, numeração e identificação
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Intro Card */}
        <div className="section-card p-5 sm:p-6 border-l-4 border-l-primary">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 shrink-0">
              <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">1.1. Sobre esta etapa</h3>
              <p className="text-muted-foreground text-sm sm:text-base text-justified leading-relaxed">
                A etapa inicial compreende a autuação do processo administrativo eletrônico, 
                no qual serão inseridos todos os documentos comprobatórios da prestação de contas.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="font-semibold text-foreground mb-4">1.2. Iniciando o Processo</h3>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base text-justified leading-relaxed">
            Para abrir um novo processo no SEI!RIO, o usuário deve selecionar a opção 
            <strong className="text-foreground"> "INICIAR PROCESSO"</strong>, conforme o menu de navegação do sistema.
          </p>

          <div className="bg-gradient-to-r from-secondary to-secondary/50 rounded-xl p-4 mb-4">
            <p className="text-sm font-medium text-foreground mb-3">Menu do Sistema:</p>
            <div className="flex flex-wrap gap-2">
              {["Pesquisar no Menu", "Estatísticas", "Favoritos", "Iniciar Processo"].map((item, i) => (
                <span 
                  key={i}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                    item === "Iniciar Processo" 
                      ? "bg-primary text-primary-foreground font-semibold shadow-md" 
                      : "bg-card text-muted-foreground border border-border/50"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Type Selection */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="font-semibold text-foreground mb-4">1.3. Seleção do Tipo de Processo</h3>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base text-justified leading-relaxed">
            Ao selecionar essa opção, o usuário deverá indicar o TIPO DE PROCESSO a ser instaurado. 
            Os tipos de processo disponíveis serão exibidos de acordo com os termos informados na busca.
          </p>

          <div className="bg-gradient-to-r from-secondary to-secondary/50 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Plus className="w-4 h-4 text-success" />
              <span>Para visualizar a lista completa de tipos de processos disponíveis, clique no botão verde.</span>
            </div>
          </div>

          <div className="highlight-box">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-accent" />
              <span className="font-bold text-foreground">Tipo de Processo Correto:</span>
            </div>
            <p className="text-foreground font-semibold text-sm sm:text-base">
              EXECUÇÃO FINANCEIRA: SISTEMA DESCENTRALIZADO DE PAGAMENTO - SDP
            </p>
          </div>
        </div>

        {/* Classification */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="font-semibold text-foreground mb-4">1.5. Classificação por Assuntos</h3>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base text-justified leading-relaxed">
            Este campo será preenchido automaticamente pelo sistema, em conformidade com o Tipo de 
            Processo selecionado pelo usuário na etapa anterior.
          </p>

          <div className="bg-gradient-to-r from-secondary to-secondary/50 rounded-xl p-4">
            <p className="text-sm text-muted-foreground mb-2">Classificação automática:</p>
            <code className="block bg-card px-4 py-3 rounded-lg border border-border/50 text-sm font-mono text-foreground break-all shadow-sm">
              01.05.03.11 - SISTEMA DESCENTRALIZADO DE PAGAMENTO
            </code>
          </div>
        </div>

        {/* Specification */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="font-semibold text-foreground mb-4">1.8. Especificação</h3>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base text-justified leading-relaxed">
            O cadastrante deverá obrigatoriamente digitar os metadados estabelecidos pela GAD, 
            composto pelo Objetivo do processo (PRESTAÇÃO DE CONTAS DE SDP) + DESIGNAÇÃO DA UNIDADE 
            ESCOLAR seguida da NOMENCLATURA DA UNIDADE.
          </p>

          <div className="highlight-box">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-bold text-foreground">Exemplo de Especificação:</span>
            </div>
            <code className="text-foreground font-mono text-sm break-all bg-card/50 px-3 py-2 rounded-lg block">
              Prestação de contas de SDP - E/CRE(04.30.502) Ciep Elis Regina
            </code>
          </div>
        </div>

        {/* Access Level */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="font-semibold text-foreground mb-4">1.11. Nível de Acesso</h3>
          
          <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
            <table className="table-institutional text-sm">
              <thead>
                <tr>
                  <th className="w-28 sm:w-32 rounded-tl-lg">Nível</th>
                  <th className="rounded-tr-lg">Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-primary">Público</td>
                  <td className="text-justified">Documentos acessíveis a qualquer pessoa, seja usuário interno ou externo via Consulta Pública.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-warning">Restrito</td>
                  <td className="text-justified">Acessíveis apenas para a unidade que criou o processo e por unidades que recebam o processo para instrução.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-destructive">Sigiloso</td>
                  <td className="text-justified">Classificação atribuída a informações confidenciais, com acesso controlado por Credenciais de Acesso.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="highlight-box mt-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-foreground mb-1">Princípio da Publicidade</p>
                <p className="text-sm text-muted-foreground text-justified leading-relaxed">
                  Os processos de prestação de contas do SDP devem, como regra, ser classificados 
                  com nível de acesso <strong className="text-foreground">"Público"</strong>, por se 
                  referirem à aplicação de recursos públicos (Art. 37 CF e Lei nº 12.527/2011 - LAI).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interessados */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="font-semibold text-foreground mb-4">1.12. Interessados</h3>
          <p className="text-muted-foreground text-sm sm:text-base text-justified leading-relaxed">
            Este campo é utilizado para registrar pessoas físicas, unidades administrativas ou demais 
            entidades que possuam interesse direto ou indireto em determinado processo. O preenchimento 
            deste campo é facultativo; contudo, é altamente recomendado, pois contribui para a adequada 
            identificação dos interessados e para a transparência do trâmite processual.
          </p>
        </div>

        {/* Observações */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="font-semibold text-foreground mb-4">1.13. Observações da Unidade</h3>
          <p className="text-muted-foreground text-sm sm:text-base text-justified leading-relaxed">
            O campo "Observações desta unidade" poderá ser preenchido por cada unidade em que o processo 
            tramitar. As observações inseridas por outras unidades aparecerão, na tela Alterar Processo, 
            separadamente, na Lista de observações de outras unidades.
          </p>
        </div>
      </div>
    </section>
  );
};
