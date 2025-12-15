import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const SectionContacts = () => {
  return (
    <section id="contatos" className="scroll-mt-20 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="section-number text-base sm:text-lg">6</div>
        <div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
            Contatos da GAD/4ª CRE
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Canais de atendimento e suporte
          </p>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {/* Main Contact Card */}
        <div className="section-card overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/80 p-4 sm:p-6 text-primary-foreground">
            <h3 className="text-lg sm:text-xl font-heading font-bold mb-1 sm:mb-2">
              Gerência de Administração
            </h3>
            <p className="text-primary-foreground/80 text-sm sm:text-base">
              4ª Coordenadoria Regional de Educação
            </p>
          </div>
          
          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary rounded-lg">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">E-mail</p>
                <a 
                  href="mailto:gad4cre@rioeduca.net" 
                  className="text-sm sm:text-lg font-medium text-primary hover:underline break-all"
                >
                  gad4cre@rioeduca.net
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary rounded-lg">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Telefone</p>
                <a 
                  href="tel:+552124759209" 
                  className="text-sm sm:text-lg font-medium text-primary hover:underline"
                >
                  (21) 2475-9209
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary rounded-lg">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Endereço</p>
                <p className="text-foreground text-sm sm:text-base">
                  Rua Professor Luís Rondelli, 150<br />
                  Olaria, Rio de Janeiro - RJ<br />
                  CEP: 21021-630
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Info */}
        <div className="section-card p-4 sm:p-6">
          <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Suporte ao SEI!RIO</h3>
          <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
            Para questões técnicas relacionadas ao sistema SEI!RIO, entre em contato com 
            o suporte técnico da plataforma através dos canais oficiais da Prefeitura.
          </p>
          
          <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-secondary rounded-lg">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground shrink-0" />
            <p className="text-xs sm:text-sm text-muted-foreground">
              Atendimento de segunda a sexta, das 9h às 17h
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-border">
          <p className="text-center text-muted-foreground text-sm sm:text-base">
            <strong className="text-foreground">4ª Coordenadoria Regional de Educação</strong><br />
            Gerência de Administração (GAD)<br />
            <span className="text-xs sm:text-sm">Versão 2025 | Dezembro 2025</span>
          </p>
        </div>
      </div>
    </section>
  );
};
