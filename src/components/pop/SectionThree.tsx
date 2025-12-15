import { Table2, AlertCircle, FileSpreadsheet } from "lucide-react";

export const SectionThree = () => {
  return (
    <section id="secao-3" className="scroll-mt-20 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="section-number text-base sm:text-lg">3</div>
        <div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
            Demonstrativo de Despesas
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Como gerar no SEI!RIO, conferência de dados e naturezas de despesa
          </p>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {/* Intro */}
        <div className="section-card p-4 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 shrink-0">
              <Table2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">3.1. Demonstrativo de Despesas – Documento Interno</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Utilize o modelo abaixo como referência para preencher o demonstrativo de despesas 
                no sistema SEI!RIO. Este modelo contempla as naturezas de despesa 435, 441 e 434, 
                conforme orientações da CGM-RJ.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Table Template */}
        <div className="section-card p-4 sm:p-6">
          <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
            Demonstrativo de Pagamentos via Cartão/Boleto Bancário
          </h3>
          
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-[600px] sm:min-w-0 px-4 sm:px-0">
              <table className="table-institutional text-xs sm:text-sm">
                <thead>
                  <tr>
                    <th>Data da Nota</th>
                    <th>Tipo de Transação</th>
                    <th>Favorecido</th>
                    <th>Enquadramento</th>
                    <th>N.D</th>
                    <th className="text-right">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-muted-foreground">DD/MM/AAAA</td>
                    <td className="text-muted-foreground">Cartão/Boleto</td>
                    <td className="text-muted-foreground">Nome</td>
                    <td className="text-muted-foreground">Art. 8, 9, 10</td>
                    <td className="text-muted-foreground">435</td>
                    <td className="text-right font-mono">R$ 0,00</td>
                  </tr>
                  <tr>
                    <td colSpan={5} className="text-right font-semibold">Valor total:</td>
                    <td className="text-right font-mono font-semibold">R$ 0,00</td>
                  </tr>
                  <tr>
                    <td colSpan={5} className="text-right font-semibold">Saldo disponível:</td>
                    <td className="text-right font-mono font-semibold">R$ 0,00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Expense Natures */}
        <div className="section-card p-4 sm:p-6">
          <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Naturezas de Despesa</h3>
          
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-secondary rounded-lg border-l-4 border-l-primary">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground font-bold text-xs sm:text-sm">
                  441
                </span>
                <span className="font-semibold text-foreground text-sm sm:text-base">Natureza 441</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Material de Consumo</p>
            </div>
            
            <div className="p-3 sm:p-4 bg-secondary rounded-lg border-l-4 border-l-success">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-success text-success-foreground font-bold text-xs sm:text-sm">
                  435
                </span>
                <span className="font-semibold text-foreground text-sm sm:text-base">Natureza 435</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Serviços de Terceiros</p>
            </div>
            
            <div className="p-3 sm:p-4 bg-secondary rounded-lg border-l-4 border-l-accent">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent text-accent-foreground font-bold text-xs sm:text-sm">
                  434
                </span>
                <span className="font-semibold text-foreground text-sm sm:text-base">Natureza 434</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Outros Serviços</p>
            </div>
          </div>
        </div>

        {/* Legal Foundation */}
        <div className="section-card p-4 sm:p-6 border-l-4 border-l-warning">
          <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Fundamentação Legal</h3>
          
          <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
            <p className="text-xs sm:text-sm font-medium text-foreground mb-2">DECRETO RIO N° 57.250, DE 19 DE NOVEMBRO DE 2025</p>
            <blockquote className="text-xs sm:text-sm text-muted-foreground italic border-l-2 border-muted-foreground/30 pl-3 sm:pl-4">
              "Art. 26. Os documentos digitais produzidos no âmbito do SEI têm sua autoria, 
              autenticidade e integridade asseguradas mediante utilização de assinatura eletrônica..."
              <br /><br />
              "§ 2° Apenas os documentos produzidos no sistema poderão ser assinados eletronicamente no SEI.Rio."
            </blockquote>
          </div>

          <div className="highlight-box">
            <div className="flex items-start gap-2 sm:gap-3">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-warning shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Conclusão Importante</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Os documentos de prestação de contas que exigem assinatura eletrônica devem ser 
                  obrigatoriamente criados dentro do sistema SEI. <strong className="text-foreground">
                  Não anexe arquivos PDF externos ou planilhas Excel para esta finalidade.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Excel Note */}
        <div className="section-card p-4 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-success/10 shrink-0">
              <FileSpreadsheet className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Planilha de Apoio</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                O documento original editável em formato Excel (MAPA DE DESPESAS - NATUREZAS 435-441-434.xlsx) 
                segue como anexo a este POP para facilitar o preenchimento e adaptação às necessidades 
                de cada unidade escolar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
