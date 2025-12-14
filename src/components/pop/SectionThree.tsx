import { Table2, AlertCircle, FileSpreadsheet, CheckCircle2 } from "lucide-react";

export const SectionThree = () => {
  return (
    <section id="secao-3" className="scroll-mt-20 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="section-number text-lg">3</div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">
            Demonstrativo de Despesas
          </h2>
          <p className="text-muted-foreground">
            Como gerar no SEI!RIO, conferência de dados e naturezas de despesa
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Intro */}
        <div className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Table2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">3.1. Demonstrativo de Despesas – Documento Interno</h3>
              <p className="text-muted-foreground">
                O demonstrativo de despesas é um documento essencial que registra todos os 
                pagamentos realizados através do Sistema Descentralizado de Pagamento.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Table Template */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Demonstrativo de Pagamentos via Cartão/Boleto Bancário</h3>
          
          <div className="overflow-x-auto">
            <table className="table-institutional text-sm">
              <thead>
                <tr>
                  <th>Data da Nota</th>
                  <th>Tipo de Transação</th>
                  <th>Favorecido</th>
                  <th>Enquadramento</th>
                  <th className="text-right">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-muted-foreground">DD/MM/AAAA</td>
                  <td className="text-muted-foreground">Cartão/Boleto</td>
                  <td className="text-muted-foreground">Nome do Favorecido</td>
                  <td className="text-muted-foreground">Art. 8, 9, 10 (incisos)</td>
                  <td className="text-right font-mono">R$ 0,00</td>
                </tr>
                <tr>
                  <td colSpan={4} className="text-right font-semibold">Total:</td>
                  <td className="text-right font-mono font-semibold">R$ 0,00</td>
                </tr>
                <tr>
                  <td colSpan={4} className="text-right font-semibold">Saldo disponível:</td>
                  <td className="text-right font-mono font-semibold">R$ 0,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Expense Natures */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Naturezas de Despesa</h3>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 bg-secondary rounded-lg border-l-4 border-l-primary">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  441
                </span>
                <span className="font-semibold text-foreground">Natureza 441</span>
              </div>
              <p className="text-sm text-muted-foreground">Material de Consumo</p>
            </div>
            
            <div className="p-4 bg-secondary rounded-lg border-l-4 border-l-success">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-success text-success-foreground font-bold text-sm">
                  435
                </span>
                <span className="font-semibold text-foreground">Natureza 435</span>
              </div>
              <p className="text-sm text-muted-foreground">Serviços de Terceiros</p>
            </div>
            
            <div className="p-4 bg-secondary rounded-lg border-l-4 border-l-accent">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold text-sm">
                  434
                </span>
                <span className="font-semibold text-foreground">Natureza 434</span>
              </div>
              <p className="text-sm text-muted-foreground">Outros Serviços</p>
            </div>
          </div>
        </div>

        {/* Legal Foundation */}
        <div className="section-card p-6 border-l-4 border-l-warning">
          <h3 className="font-semibold text-foreground mb-4">Fundamentação Legal</h3>
          
          <div className="bg-secondary rounded-lg p-4 mb-4">
            <p className="text-sm font-medium text-foreground mb-2">DECRETO RIO N° 57.250, DE 19 DE NOVEMBRO DE 2025</p>
            <blockquote className="text-sm text-muted-foreground italic border-l-2 border-muted-foreground/30 pl-4">
              "Art. 26. Os documentos digitais produzidos no âmbito do SEI têm sua autoria, 
              autenticidade e integridade asseguradas mediante utilização de assinatura eletrônica..."
              <br /><br />
              "§ 2° Apenas os documentos produzidos no sistema poderão ser assinados eletronicamente no SEI.Rio."
            </blockquote>
          </div>

          <div className="highlight-box">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Conclusão Importante</p>
                <p className="text-sm text-muted-foreground">
                  Os documentos de prestação de contas que exigem assinatura eletrônica devem ser 
                  obrigatoriamente criados dentro do sistema SEI. <strong className="text-foreground">
                  Não anexe arquivos PDF externos ou planilhas Excel para esta finalidade.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Excel Note */}
        <div className="section-card p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-success/10">
              <FileSpreadsheet className="w-6 h-6 text-success" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Planilha de Apoio</h3>
              <p className="text-muted-foreground">
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
