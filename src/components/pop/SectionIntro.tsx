import { Users, BookOpen, FileCheck, Target } from "lucide-react";

export const SectionIntro = () => {
  return (
    <section id="introducao" className="scroll-mt-20 animate-fade-in">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-primary-foreground mb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Procedimento Operacional Padrão
          </div>
          <h1 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Prestação de Contas no SEI!RIO
          </h1>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Guia completo para realização da prestação de contas do Sistema Descentralizado 
            de Pagamento (SDP) através do sistema SEI!RIO.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: <Target className="w-6 h-6" />, title: "Objetivo", desc: "Padronizar procedimentos" },
          { icon: <Users className="w-6 h-6" />, title: "Público", desc: "Diretores e Gestores" },
          { icon: <FileCheck className="w-6 h-6" />, title: "Sistema", desc: "SEI!RIO" },
          { icon: <BookOpen className="w-6 h-6" />, title: "Versão", desc: "2025 - Atualizado" },
        ].map((item, index) => (
          <div key={index} className="section-card p-5 flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Welcome Message */}
      <div className="section-card p-6 lg:p-8">
        <h2 className="text-xl font-heading font-bold text-foreground mb-4">
          Prezados(as) Diretores(as),
        </h2>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
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
            sistema processual SEI!RIO.
          </p>
        </div>

        {/* Signatures */}
        <div className="grid md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-border">
          <div className="text-center p-4 bg-secondary rounded-lg">
            <p className="font-bold text-foreground">Fátima das Graças Lima Barros</p>
            <p className="text-sm text-muted-foreground">Coordenadora – E/4ª CRE</p>
          </div>
          <div className="text-center p-4 bg-secondary rounded-lg">
            <p className="font-bold text-foreground">Bianca Barreto da Fonseca Coelho</p>
            <p className="text-sm text-muted-foreground">Gerente – E/4ª CRE/GAD</p>
          </div>
        </div>
      </div>
    </section>
  );
};
