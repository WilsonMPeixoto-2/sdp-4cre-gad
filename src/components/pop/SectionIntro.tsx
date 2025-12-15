import { Users, BookOpen, FileCheck, Target } from "lucide-react";

export const SectionIntro = () => {
  return (
    <section id="introducao" className="scroll-mt-20 animate-fade-in">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-primary-foreground mb-6 sm:mb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
            Procedimento Operacional Padrão
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-3 sm:mb-4">
            Prestação de Contas no SEI!RIO
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
            Guia completo para realização da prestação de contas do Sistema Descentralizado 
            de Pagamento (SDP) através do sistema SEI!RIO.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {[
          { icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Objetivo", desc: "Padronizar procedimentos" },
          { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Público", desc: "Diretores e Gestores" },
          { icon: <FileCheck className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Sistema", desc: "SEI!RIO" },
          { icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Versão", desc: "2025 - Atualizado" },
        ].map((item, index) => (
          <div key={index} className="section-card p-3 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 text-primary">
              {item.icon}
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-foreground">{item.title}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Welcome Message */}
      <div className="section-card p-4 sm:p-6 lg:p-8">
        <h2 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3 sm:mb-4">
          Prezados(as) Diretores(as),
        </h2>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-3 sm:space-y-4 text-sm sm:text-base">
          <p>
            A rotina de uma gestão escolar é intensa. Entre demandas pedagógicas, cuidado com pessoas 
            e urgências do dia a dia, sabemos que a organização administrativa exige tempo, atenção e, 
            muitas vezes, decisões rápidas. Por isso, a 4ª Coordenadoria Regional de Educação, por meio 
            da Gerência de Administração (GAD), reafirma aqui um compromisso simples e objetivo: 
            <strong className="text-foreground"> estar ao lado das equipes gestoras, com orientação clara, apoio contínuo e diálogo.</strong>
          </p>
          <p>
            A chegada do SEI!RIO representa uma mudança importante na forma como registramos, 
            acompanhamos e formalizamos os processos administrativos. Toda transição traz desafios — 
            e é exatamente nesse momento que a parceria entre CRE e escolas faz diferença. 
            Este material foi pensado para facilitar o caminho, reduzir inseguranças, evitar retrabalho 
            e dar mais previsibilidade às rotinas.
          </p>
          <p>
            Este é o primeiro de uma série de documentos de orientação que a 4ª CRE está construindo 
            para apoiar as direções, tanto nos procedimentos de gestão escolar quanto no uso do novo 
            sistema processual SEI!RIO. A cada novo guia, nossa intenção é a mesma: transformar regras 
            e etapas em rotinas mais simples, seguras e executáveis, respeitando o contexto real de cada unidade.
          </p>
          <p>
            Conte com a 4ª CRE/GAD. Seguimos à disposição para orientar, ouvir e aprimorar continuamente 
            esses materiais, em parceria com vocês.
          </p>
        </div>

        {/* Signatures */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
          <div className="text-center p-3 sm:p-4 bg-secondary rounded-lg">
            <p className="font-bold text-foreground text-sm sm:text-base">Fátima das Graças Lima Barros</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Coordenadora – E/4ª CRE</p>
          </div>
          <div className="text-center p-3 sm:p-4 bg-secondary rounded-lg">
            <p className="font-bold text-foreground text-sm sm:text-base">Bianca Barreto da Fonseca Coelho</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Gerente – E/4ª CRE/GAD</p>
          </div>
        </div>
      </div>
    </section>
  );
};
