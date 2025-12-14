import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export const SectionContacts = () => {
  return (
    <section id="contatos" className="scroll-mt-20 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="section-number text-lg">6</div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">
            Contatos da GAD/4ª CRE
          </h2>
          <p className="text-muted-foreground">
            Canais de atendimento e suporte
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Main Contact Card */}
        <div className="section-card overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
            <h3 className="text-xl font-heading font-bold mb-2">
              Gerência de Administração
            </h3>
            <p className="text-primary-foreground/80">
              4ª Coordenadoria Regional de Educação
            </p>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-mail</p>
                <a 
                  href="mailto:gad4cre@rioeduca.net" 
                  className="text-lg font-medium text-primary hover:underline"
                >
                  gad4cre@rioeduca.net
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefone</p>
                <a 
                  href="tel:+552124759209" 
                  className="text-lg font-medium text-primary hover:underline"
                >
                  (21) 2475-9209
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Endereço</p>
                <p className="text-foreground">
                  Rua Professor Luís Rondelli, 150<br />
                  Olaria, Rio de Janeiro - RJ<br />
                  CEP: 21021-630
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Info */}
        <div className="section-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Suporte ao SEI!RIO</h3>
          <p className="text-muted-foreground mb-4">
            Para questões técnicas relacionadas ao sistema SEI!RIO, entre em contato com 
            o suporte técnico da plataforma através dos canais oficiais da Prefeitura.
          </p>
          
          <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Atendimento de segunda a sexta, das 9h às 17h
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-border">
          <p className="text-center text-muted-foreground">
            <strong className="text-foreground">4ª Coordenadoria Regional de Educação</strong><br />
            Gerência de Administração (GAD)<br />
            <span className="text-sm">Versão 1.0 | Dezembro 2025</span>
          </p>
        </div>
      </div>
    </section>
  );
};
