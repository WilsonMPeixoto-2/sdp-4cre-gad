import { Users, BookOpen, FileCheck, Target } from "lucide-react";

export const SectionIntro = () => {
  return (
    <section id="introducao" className="scroll-mt-20 animate-fade-in">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-primary via-primary to-primary/80 rounded-2xl p-6 sm:p-8 lg:p-10 text-primary-foreground mb-6 sm:mb-8 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-5 shadow-lg">
            <BookOpen className="w-4 h-4" />
            Procedimento Operacional Padrão
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-4 leading-tight">
            Prestação de Contas no SEI!RIO
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/90 leading-relaxed text-justified">
            Guia completo para realização da prestação de contas do Sistema Descentralizado 
            de Pagamento (SDP) através do sistema SEI!RIO.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {[
          { icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Objetivo", desc: "Padronizar procedimentos", color: "from-primary/10 to-primary/5" },
          { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Público", desc: "Diretores e Gestores", color: "from-success/10 to-success/5" },
          { icon: <FileCheck className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Sistema", desc: "SEI!RIO", color: "from-accent/10 to-accent/5" },
          { icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Versão", desc: "2025 - Atualizado", color: "from-warning/10 to-warning/5" },
        ].map((item, index) => (
          <div key={index} className={`section-card p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 bg-gradient-to-br ${item.color}`}>
            <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-card text-primary shadow-sm">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">{item.title}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Welcome Message */}
      <div className="section-card p-5 sm:p-6 lg:p-8">
        <h2 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-accent rounded-full"></span>
          Prezados(as) Diretores(as),
        </h2>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4 text-sm sm:text-base">
          <p className="text-justified leading-relaxed">
            A rotina de uma gestão escolar é intensa. Entre demandas pedagógicas, cuidado com pessoas 
            e urgências do dia a dia, sabemos que a organização administrativa exige tempo, atenção e, 
            muitas vezes, decisões rápidas. Por isso, a 4ª Coordenadoria Regional de Educação, por meio 
            da Gerência de Administração (GAD), reafirma aqui um compromisso simples e objetivo: 
            <strong className="text-foreground"> estar ao lado das equipes gestoras, com orientação clara, apoio contínuo e diálogo.</strong>
          </p>
          <p className="text-justified leading-relaxed">
            A chegada do SEI!RIO representa uma mudança importante na forma como registramos, 
            acompanhamos e formalizamos os processos administrativos. Toda transição traz desafios — 
            e é exatamente nesse momento que a parceria entre CRE e escolas faz diferença. 
            Este material foi pensado para facilitar o caminho, reduzir inseguranças, evitar retrabalho 
            e dar mais previsibilidade às rotinas.
          </p>
          <p className="text-justified leading-relaxed">
            Este é o primeiro de uma série de documentos de orientação que a 4ª CRE está construindo 
            para apoiar as direções, tanto nos procedimentos de gestão escolar quanto no uso do novo 
            sistema processual SEI!RIO. A cada novo guia, nossa intenção é a mesma: transformar regras 
            e etapas em rotinas mais simples, seguras e executáveis, respeitando o contexto real de cada unidade.
          </p>
          <p className="text-justified leading-relaxed">
            Conte com a 4ª CRE/GAD. Seguimos à disposição para orientar, ouvir e aprimorar continuamente 
            esses materiais, em parceria com vocês.
          </p>
        </div>

        {/* Signatures */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8 pt-6 border-t border-border/50">
          <div className="text-center p-4 sm:p-5 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl">
            <p className="font-bold text-foreground text-sm sm:text-base">Fátima das Graças Lima Barros</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Coordenadora – E/4ª CRE</p>
          </div>
          <div className="text-center p-4 sm:p-5 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl">
            <p className="font-bold text-foreground text-sm sm:text-base">Bianca Barreto da Fonseca Coelho</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Gerente – E/4ª CRE/GAD</p>
          </div>
        </div>
      </div>
    </section>
  );
};
