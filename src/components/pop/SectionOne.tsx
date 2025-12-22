import { ClipboardList, Save } from "lucide-react";
import { SeiMockup } from "./SeiMockup";
import { CopyButton } from "./CopyButton";
import { Callout } from "./Callout";

export const SectionOne = () => {
  return (
    <section id="secao-1" className="scroll-mt-20 animate-fade-in">
      <div className="space-y-8">
        {/* Intro Card */}
        <div className="section-card border-l-4 border-l-accent">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/10 shrink-0">
              <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <div className="content-spacing">
              <h3 className="section-heading">1.1. Objetivo desta Etapa</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                A etapa inicial destina-se à abertura do processo administrativo eletrônico e à inserção do acervo documental comprobatório relativo à prestação de contas.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="section-card">
          <h3 className="section-heading">1.2. Iniciando o Processo</h3>
          <div className="content-spacing">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Para abrir um novo processo no SEI!RIO, o usuário deve selecionar a opção 
              <strong className="text-foreground"> "INICIAR PROCESSO"</strong>, conforme o menu de navegação do sistema.
            </p>

            <div className="mt-6">
              <p className="text-sm font-medium text-foreground mb-3">Visualização do menu:</p>
              <SeiMockup variant="menu" highlight="iniciar" />
            </div>
          </div>
        </div>

        {/* Type Selection */}
        <div className="section-card">
          <div className="flex items-start gap-4">
            <div className="shrink-0 hidden sm:block">
              <SeiMockup variant="type-selection-icon" />
            </div>
            <div className="flex-1">
              <h3 className="section-heading">1.3. Seleção do Tipo de Processo</h3>
              <div className="content-spacing">
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Ao selecionar essa opção, o usuário deverá indicar o TIPO DE PROCESSO a ser instaurado. 
                  Os tipos de processo disponíveis serão exibidos de acordo com os termos informados na busca.
                </p>

                <div className="mt-6">
                  <p className="text-sm font-medium text-foreground mb-3">Tela de seleção:</p>
                  <SeiMockup variant="type-selection" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tela Iniciar Processo */}
        <div className="section-card">
          <h3 className="section-heading">1.4. Tela Iniciar Processo</h3>
          <div className="content-spacing">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Após selecionar o tipo de processo, o sistema abrirá a tela <strong className="text-foreground">"INICIAR PROCESSO"</strong>.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-2">
              Nesta tela, você deverá preencher os campos: <strong className="text-foreground">Especificação</strong>, <strong className="text-foreground">Interessados</strong>, e selecionar o <strong className="text-foreground">Nível de Acesso</strong> adequado.
            </p>
            
            <Callout variant="info" title="Campos Preenchidos Automaticamente" className="mt-4">
              <p className="text-sm text-muted-foreground">
                Os campos <strong className="text-foreground">Tipo de Processo</strong> (EXECUÇÃO FINANCEIRA: SDP) e <strong className="text-foreground">Classificação</strong> (01.05.03.11 - SDP) já serão preenchidos automaticamente pelo sistema.
              </p>
            </Callout>
            
            <div className="mt-6">
              <p className="text-sm font-medium text-foreground mb-3">Formulário de cadastro:</p>
              <SeiMockup variant="iniciar-processo-form" />
            </div>
          </div>
        </div>

        {/* Specification */}
        <div className="section-card">
          <h3 className="section-heading">1.5. Especificação <span className="text-sm font-normal text-muted-foreground">(preenchimento obrigatório)</span></h3>
          <div className="content-spacing">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              O cadastrante deverá obrigatoriamente digitar os metadados estabelecidos pela GAD, 
              composto pelo Objetivo do processo (PRESTAÇÃO DE CONTAS DE SDP) + DESIGNAÇÃO DA UNIDADE 
              ESCOLAR seguida da NOMENCLATURA DA UNIDADE.
            </p>

            <Callout variant="success" title="Exemplo de Especificação:">
              <div className="flex items-center gap-2 mt-2">
                <code className="flex-1 text-foreground data-code text-sm break-all bg-card/50 px-3 py-2 rounded-lg">
                  Prestação de contas de SDP - E/CRE(04.30.502) Ciep Elis Regina
                </code>
                <CopyButton text="Prestação de contas de SDP - E/CRE(04.30.502) Ciep Elis Regina" label="Copiado!" />
              </div>
            </Callout>
          </div>
        </div>

        {/* Classification */}
        <div className="section-card">
          <h3 className="section-heading">1.6. Classificação por Assuntos</h3>
          <div className="content-spacing">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Este campo será preenchido automaticamente pelo sistema, em conformidade com o Tipo de 
              Processo selecionado pelo usuário na etapa anterior.
            </p>

            <div className="bg-gradient-to-r from-secondary to-secondary/50 rounded-xl p-5">
              <p className="text-sm text-muted-foreground mb-3">Classificação automática:</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-card px-4 py-3 rounded-lg border border-border text-sm data-code text-foreground break-all shadow-sm">
                  01.05.03.11 - SISTEMA DESCENTRALIZADO DE PAGAMENTO
                </code>
                <CopyButton text="01.05.03.11 - SISTEMA DESCENTRALIZADO DE PAGAMENTO" label="Copiado!" />
              </div>
            </div>
          </div>
        </div>

        {/* Access Level */}
        <div className="section-card">
          <h3 className="section-heading">1.7. Nível de Acesso</h3>
          <div className="content-spacing">
            <div className="overflow-x-auto -mx-6 sm:-mx-8 px-6 sm:px-8">
              <table className="table-institutional text-sm w-full">
                <thead>
                  <tr>
                    <th className="w-28 sm:w-32 rounded-tl-lg">Nível</th>
                    <th className="rounded-tr-lg">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold text-accent">Público</td>
                    <td className="text-muted-foreground leading-relaxed">Documentos acessíveis a qualquer pessoa, seja usuário interno ou externo via Consulta Pública.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-warning">Restrito</td>
                    <td className="text-muted-foreground leading-relaxed">Acessíveis apenas para a unidade que criou o processo e por unidades que recebam o processo para instrução.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-destructive">Sigiloso</td>
                    <td className="text-muted-foreground leading-relaxed">Classificação atribuída a informações confidenciais, com acesso controlado por Credenciais de Acesso.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout variant="info" title="Orientação" className="mt-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Selecione a opção <strong className="text-primary font-bold">PÚBLICO</strong> para atender ao Princípio da Publicidade (Art. 37 CF e LAI), salvo justificativa anexa ao processo para a não publicidade.
              </p>
            </Callout>
          </div>
        </div>

        {/* Interessados */}
        <div className="section-card">
          <h3 className="section-heading">1.8. Interessados</h3>
          <div className="content-spacing">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Este campo é utilizado para registrar unidades ou entidades que possuam interesse no processo.
            </p>
            <Callout variant="success" title="Adicione a GAD como interessada:">
              <div className="flex items-center gap-2 mt-2">
                <code className="flex-1 text-foreground data-code text-sm bg-card/50 px-3 py-2 rounded-lg">
                  10729 - E/4a.CRE/GAD
                </code>
                <CopyButton text="10729 - E/4a.CRE/GAD" label="Código copiado!" />
              </div>
            </Callout>
          </div>
        </div>

        {/* Observações */}
        <div className="section-card">
          <h3 className="section-heading">1.9. Observações da Unidade</h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            O campo "Observações desta unidade" poderá ser preenchido por cada unidade em que o processo 
            tramitar. As observações inseridas por outras unidades aparecerão, na tela Alterar Processo, 
            separadamente, na Lista de observações de outras unidades.
          </p>
        </div>

        {/* Salvando o Processo */}
        <div className="section-card">
          <h3 className="section-heading">1.10. Salvando o Processo</h3>
          <div className="content-spacing">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Após preencher todos os campos obrigatórios, clique no botão 
              <strong className="text-foreground"> SALVAR</strong> para concluir a abertura do processo.
            </p>
            
            <div className="mt-6">
              <SeiMockup variant="salvar-btn" />
            </div>
          </div>
        </div>

        {/* Resultado: NUP */}
        <div className="section-card border-l-4 border-l-success">
          <h3 className="section-heading">1.11. Resultado: O Número do Processo (NUP)</h3>
          <div className="content-spacing">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Após salvar, o sistema gerará automaticamente o <strong className="text-foreground">Número Único de Protocolo (NUP)</strong>, 
              que identificará o processo em todas as etapas subsequentes.
            </p>
            
            <div className="mt-6">
              <SeiMockup variant="nup-gerado" />
            </div>
            
            <Callout variant="info" className="mt-4">
              <p className="text-sm">
                <strong>Nota:</strong> O SEI não gera capa de processo. O NUP acima é o 
                único identificador gerado automaticamente pelo sistema.
              </p>
            </Callout>
          </div>
        </div>
      </div>
    </section>
  );
};
