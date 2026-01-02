import { Table2, FileSpreadsheet, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoDrawer, NaturezasDespesaContent } from "./InfoDrawer";
import { SeiMockup } from "./SeiMockup";
import { SideNote } from "./SideNote";

export const SectionThree = () => {
  return (
    <section id="secao-3" className="scroll-mt-20 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="section-number">3</div>
        <div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
            Demonstrativo de Despesas
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Como gerar no SEI!RIO, conferência de dados e naturezas de despesa
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Intro with Side Note */}
        <div className="lg:grid lg:grid-cols-[1fr,260px] lg:gap-6">
          <div className="section-card border-l-4 border-l-primary">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                <Table2 className="w-5 h-5 text-primary" />
              </div>
              <div className="content-spacing">
                <h3 className="section-heading">3.1. Demonstrativo de Despesas – Documento Interno</h3>
                <p className="text-justify leading-relaxed">
                  Utilize o modelo abaixo como referência para preencher o demonstrativo de despesas 
                  no sistema SEI!RIO. Este modelo contempla as naturezas de despesa 435, 441 e 434, 
                  conforme orientações da CGM-RJ.
                </p>
                
                <div className="mt-4 flex justify-center">
                  <SeiMockup variant="demonstrativo-despesas" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Side Note */}
          <div className="mt-4 lg:mt-0">
            <SideNote variant="reading" title="LEITURA COMPLEMENTAR">
              <p className="mb-2">
                Para informações detalhadas sobre naturezas de despesa, consulte:
              </p>
              <p className="text-xs text-muted-foreground">
                Manual de Contabilidade Aplicada ao Setor Público (MCASP) – Portaria Conjunta STN/SOF.
              </p>
            </SideNote>
          </div>
        </div>

        {/* Payment Table Template */}
        <div className="section-card">
          <h3 className="section-heading">
            3.2. Demonstrativo de Pagamentos via Cartão/Boleto Bancário
          </h3>
          
          <div className="overflow-x-auto -mx-6 sm:-mx-8 px-6 sm:px-8">
            <table className="table-institutional">
              <thead>
                <tr>
                  <th className="rounded-tl-lg">Data da Nota</th>
                  <th>Tipo de Transação</th>
                  <th>Favorecido</th>
                  <th>Enquadramento</th>
                  <th>N.D</th>
                  <th className="text-right rounded-tr-lg">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-muted-foreground">DD/MM/AAAA</td>
                  <td className="text-muted-foreground">Cartão/Boleto</td>
                  <td className="text-muted-foreground">Nome</td>
                  <td className="text-muted-foreground">Art. 8, 9, 10</td>
                  <td className="data-code text-muted-foreground">435</td>
                  <td className="text-right data-code">R$ 0,00</td>
                </tr>
                <tr className="bg-primary/5">
                  <td colSpan={5} className="text-right font-semibold">Valor total:</td>
                  <td className="text-right data-code font-semibold">R$ 0,00</td>
                </tr>
                <tr className="bg-accent/10">
                  <td colSpan={5} className="text-right font-semibold">Saldo disponível:</td>
                  <td className="text-right data-code font-semibold text-accent">R$ 0,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Expense Natures */}
        <div className="section-card">
          <div className="flex items-center gap-3 flex-wrap pb-3 mb-4 border-b border-border">
            <h3 className="font-heading font-semibold text-foreground flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full flex-shrink-0"></span>
              3.3. Naturezas de Despesa
            </h3>
            <InfoDrawer title="Naturezas de Despesa" triggerLabel="Saiba mais">
              <NaturezasDespesaContent />
            </InfoDrawer>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border-l-4 border-l-primary">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground font-bold data-code shadow-md">
                  441
                </span>
                <span className="font-bold text-foreground">Natureza 441</span>
              </div>
              <p className="text-sm text-muted-foreground">Material de Consumo</p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border-l-4 border-l-accent">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-accent-foreground font-bold data-code shadow-md">
                  435
                </span>
                <span className="font-bold text-foreground">Natureza 435</span>
              </div>
              <p className="text-sm text-muted-foreground">Serviços de Terceiros</p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl border-l-4 border-l-muted-foreground">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-muted-foreground text-background font-bold data-code shadow-md">
                  434
                </span>
                <span className="font-bold text-foreground">Natureza 434</span>
              </div>
              <p className="text-sm text-muted-foreground">Outros Serviços</p>
            </div>
          </div>
        </div>

        {/* Excel Note with Download Button */}
        <div className="section-card border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
              <FileSpreadsheet className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="section-heading">3.4. Planilha de Apoio</h3>
              <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                O documento original editável em formato Excel (MAPA DE DESPESAS - NATUREZAS 435-441-434.xlsx) 
                segue como anexo a este POP para facilitar o preenchimento e adaptação às necessidades 
                de cada unidade escolar.
              </p>
              
              <a
                href="https://rioeduca-my.sharepoint.com/:x:/g/personal/wilson_mpeixoto_rioeduca_net/IQAgPn37Ap6PR4fGjfFcFY_3AZ7erJVwGFF7TvO5QrjTxTU?e=bSMVpy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 gap-2">
                  <Download className="w-4 h-4" />
                  Baixar Modelo Editável (Excel)
                </Button>
              </a>
              
              <p className="text-xs text-muted-foreground mt-3">
                Clique para abrir o arquivo no SharePoint e baixar o modelo editável
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
