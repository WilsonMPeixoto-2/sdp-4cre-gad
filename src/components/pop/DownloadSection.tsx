import { Download, FileText, Table2, FileCheck, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  url?: string;
  disabled?: boolean;
}

const downloads: DownloadItem[] = [
  {
    title: "Modelo de Despacho",
    description: "Despacho padrão para encaminhamento da prestação de contas",
    icon: <FileText className="w-5 h-5" />,
    url: "https://rioeduca-my.sharepoint.com/:w:/g/personal/wilson_mpeixoto_rioeduca_net/IQC9wPR-JwJySpEGFJeisX7SAU96gsNWnIZiVss7WC0KKjE?e=6sP1ua",
  },
  {
    title: "Demonstrativo de Despesas",
    description: "Modelo do demonstrativo por meio de pagamento",
    icon: <Table2 className="w-5 h-5" />,
    url: "https://rioeduca-my.sharepoint.com/:x:/g/personal/wilson_mpeixoto_rioeduca_net/IQAgPn37Ap6PR4fGjfFcFY_3AZ7erJVwGFF7TvO5QrjTxTU?e=bSMVpy",
  },
  {
    title: "Checklist de Documentos",
    description: "Lista de verificação para conferência da prestação",
    icon: <FileCheck className="w-5 h-5" />,
    url: "#checklist-section",
  },
];

export const DownloadSection = () => {
  return (
    <div className="section-card p-6 sm:p-8 my-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-primary/12 ring-1 ring-primary/20">
          <Download className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Modelos e Documentos</h3>
          <p className="text-sm text-muted-foreground">Arquivos úteis para a prestação de contas</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {downloads.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-5 rounded-xl border transition-all duration-300 bg-card border-border/60 hover:border-primary/35 hover:shadow-lg group"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/12 ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
              <span className="text-primary">
                {item.icon}
              </span>
            </div>
            
            <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{item.description}</p>
            
            <a
              href={item.url}
              target={item.url?.startsWith('#') ? undefined : "_blank"}
              rel={item.url?.startsWith('#') ? undefined : "noopener noreferrer"}
            >
              <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary">
                <Download className="w-4 h-4 mr-2" />
                {item.url?.startsWith('#') ? 'Ver' : 'Baixar'}
              </Button>
            </a>
          </div>
        ))}
      </div>

      {/* External resources */}
      <div className="mt-6 pt-6 border-t border-border/50">
        <p className="text-sm text-muted-foreground mb-3">Recursos externos:</p>
        <div className="flex flex-wrap gap-2">
          <a
            href="https://doweb.rio.rj.gov.br/portal/edicoes/download/5089#page=16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary hover:bg-secondary/80 rounded-lg text-sm text-foreground transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Res. 107/2022
          </a>
          <a
            href="https://doweb.rio.rj.gov.br/portal/edicoes/download/5024#page=3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary hover:bg-secondary/80 rounded-lg text-sm text-foreground transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Decreto 50.162/2022
          </a>
        </div>
      </div>
    </div>
  );
};
