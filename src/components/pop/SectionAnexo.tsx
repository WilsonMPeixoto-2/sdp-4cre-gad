import { FileText, ExternalLink, Scale, Clock, Receipt, Users, AlertTriangle, CheckCircle2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const SectionAnexo = () => {
  const documentosExigidos = [
    { documento: "Demonstrativo de despesas por meio de pagamento", obrigatorio: true },
    { documento: "Comprovantes de despesas atestados", obrigatorio: true },
    { documento: "Comprovantes de pagamentos e transferências via internet banking", obrigatorio: true },
    { documento: "Canhotos dos cheques utilizados e cheques inutilizados", obrigatorio: false },
    { documento: "Cheques cancelados", obrigatorio: false },
    { documento: "Fatura do cartão do período", obrigatorio: true },
    { documento: "Extrato bancário do período", obrigatorio: true },
    { documento: "Documentações complementares", obrigatorio: false },
  ];

  const regrasComprovantes = [
    { regra: "Comprovantes devem ser atestados por 2 servidores identificados", artigo: "Art. 25 §1º" },
    { regra: "Atestadores não podem ser os responsáveis pela aplicação dos recursos", artigo: "Art. 25 §1º" },
    { regra: "Despesas de pequeno vulto: comprovadas por relação atestada por 2 servidores", artigo: "Art. 25 §2º" },
    { regra: "Despesas enquadradas no Art. 8º devem ter comprovação obrigatória", artigo: "Art. 25 §3º" },
    { regra: "Notas fiscais expedidas em nome da Prefeitura ou Órgão executor", artigo: "Art. 22 §1º" },
    { regra: "Não são aceitos tíquetes de caixa ou equivalentes fora da legislação", artigo: "Art. 22 §2º" },
    { regra: "Comprovantes aceitos somente com data igual ou posterior ao repasse", artigo: "Art. 22 §3º" },
    { regra: "Comprovantes não podem conter rasuras, acréscimos ou emendas", artigo: "Art. 22 §4º" },
  ];

  const prazosPrestacao = [
    { situacao: "Prestação regular", prazo: "Até 120 dias após liberação de recursos" },
    { situacao: "Solicitação de reposição de recursos", prazo: "Antes de 90 dias (conforme Art. 23 §4º)" },
    { situacao: "Substituição de gestor", prazo: "Imediata" },
    { situacao: "Encerramento do SDP", prazo: "Imediata" },
  ];

  const documentosComprobatorios = [
    { tipo: "Compra de material e insumos", documentos: "Nota fiscal de venda, fatura, cupom fiscal ou DANFE" },
    { tipo: "Prestação de serviços por PJ", documentos: "Nota fiscal de venda, fatura, cupom fiscal ou DANFE" },
    { tipo: "Prestação de serviços por PF (sem INSS)", documentos: "Recibo comum" },
    { tipo: "Prestação de serviços por PF (com INSS)", documentos: "Recibo de Pagamento de Autônomo (RPA)" },
  ];

  return (
    <section id="anexo" className="scroll-mt-20">
      {/* Header */}
      <div className="section-card p-6 sm:p-8 mb-6">
        <div className="flex items-start gap-4">
          <div className="section-number">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Anexo - Legislação de Referência
            </h2>
            <p className="text-muted-foreground">
              Consolidação das principais regras e documentos exigidos conforme Decreto Municipal e Resoluções da CGM/SMFP
            </p>
          </div>
        </div>
      </div>

      {/* Documentos Exigidos */}
      <div className="section-card p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-3 mb-5">
          <Receipt className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            Documentos que Instruem a Prestação de Contas
          </h3>
        </div>

        <div className="overflow-x-auto">
          <Table className="table-institutional">
            <TableHeader>
              <TableRow>
                <TableHead className="bg-primary text-primary-foreground">Documento</TableHead>
                <TableHead className="bg-primary text-primary-foreground w-32 text-center">Obrigatoriedade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documentosExigidos.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.documento}</TableCell>
                  <TableCell className="text-center">
                    {item.obrigatorio ? (
                      <span className="inline-flex items-center gap-1 text-primary font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        Obrigatório
                      </span>
                    ) : (
                      <span className="text-muted-foreground text-sm">Se houver</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Prazos */}
      <div className="section-card p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-3 mb-5">
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            Prazos para Prestação de Contas (Art. 25)
          </h3>
        </div>

        <div className="overflow-x-auto">
          <Table className="table-institutional">
            <TableHeader>
              <TableRow>
                <TableHead className="bg-primary text-primary-foreground">Situação</TableHead>
                <TableHead className="bg-primary text-primary-foreground">Prazo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prazosPrestacao.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.situacao}</TableCell>
                  <TableCell>{item.prazo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Documentos Comprobatórios */}
      <div className="section-card p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-3 mb-5">
          <FileText className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            Documentos Comprobatórios por Tipo de Despesa (Art. 22)
          </h3>
        </div>

        <div className="overflow-x-auto">
          <Table className="table-institutional">
            <TableHeader>
              <TableRow>
                <TableHead className="bg-primary text-primary-foreground">Tipo de Despesa</TableHead>
                <TableHead className="bg-primary text-primary-foreground">Documentos Aceitos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documentosComprobatorios.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.tipo}</TableCell>
                  <TableCell>{item.documentos}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Regras dos Comprovantes */}
      <div className="section-card p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-3 mb-5">
          <Users className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            Regras para Comprovantes de Despesa
          </h3>
        </div>

        <div className="overflow-x-auto">
          <Table className="table-institutional">
            <TableHeader>
              <TableRow>
                <TableHead className="bg-primary text-primary-foreground">Regra</TableHead>
                <TableHead className="bg-primary text-primary-foreground w-28 text-center">Referência</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {regrasComprovantes.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.regra}</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {item.artigo}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Alerta Importante */}
      <div className="section-card p-6 sm:p-8 mb-6 border-l-4 border-primary">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">Atenção</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Os comprovantes de despesa devem conter necessariamente: <strong>discriminação clara do serviço prestado ou material fornecido</strong> (não se admitindo generalização ou abreviaturas) e <strong>data da emissão</strong>. Pagamentos em espécie devem estar devidamente comprovados.
            </p>
          </div>
        </div>
      </div>

      {/* Links para Consulta */}
      <div className="section-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <ExternalLink className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            Consulte a Legislação na Íntegra
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="https://doweb.rio.rj.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Diário Oficial do Rio</p>
              <p className="text-sm text-muted-foreground">Decretos e Resoluções</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
          </a>

          <a
            href="https://www.rio.rj.gov.br/web/cgm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Portal CGM-RJ</p>
              <p className="text-sm text-muted-foreground">Controladoria Geral do Município</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
          </a>
        </div>

        <p className="mt-4 text-sm text-muted-foreground text-center">
          Este resumo é uma referência rápida. Consulte sempre a legislação atualizada para informações completas.
        </p>
      </div>
    </section>
  );
};
