import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const SectionContacts = () => {
  return (
    <section id="contatos" className="scroll-mt-20 animate-fade-in">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="section-number">6</div>
        <div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
            Contatos da GAD/4ª CRE
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Canais de atendimento e suporte
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Main Contact Card */}
        <div className="section-card overflow-hidden">
          <div className="bg-gradient-to-r from-primary via-primary to-primary/80 p-5 sm:p-6 text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-heading font-bold mb-1">
                Gerência de Administração
              </h3>
              <p className="text-primary-foreground/80">
                4ª Coordenadoria Regional de Educação
              </p>
            </div>
          </div>
          
          <div className="p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">E-mail</p>
                <a 
                  href="mailto:gad4cre@rioeduca.net" 
                  className="text-base sm:text-lg font-semibold text-primary hover:underline break-all"
                >
                  gad4cre@rioeduca.net
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Telefone</p>
                <a 
                  href="tel:+552124759209" 
                  className="text-base sm:text-lg font-semibold text-primary hover:underline"
                >
                  (21) 2475-9209
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Endereço</p>
                <p className="text-foreground font-medium">
                  Rua Professor Luís Rondelli, 150<br />
                  Olaria, Rio de Janeiro - RJ<br />
                  CEP: 21021-630
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Info */}
        <div className="section-card p-5 sm:p-6">
          <h3 className="font-semibold text-foreground mb-4">Suporte ao SEI!RIO</h3>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base text-justified leading-relaxed">
            Para questões técnicas relacionadas ao sistema SEI!RIO, entre em contato com 
            o suporte técnico da plataforma através dos canais oficiais da Prefeitura.
          </p>
          
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl">
            <Clock className="w-5 h-5 text-muted-foreground shrink-0" />
            <p className="text-sm text-muted-foreground">
              Atendimento de segunda a sexta, das 9h às 17h
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-6 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-xl border border-border/50">
          <p className="text-center text-muted-foreground">
            <strong className="text-foreground text-lg">4ª Coordenadoria Regional de Educação</strong><br />
            <span className="text-sm">Gerência de Administração (GAD)</span><br />
            <span className="text-xs text-muted-foreground/70 mt-2 block">Versão 2025 | Dezembro 2025</span>
          </p>
        </div>
      </div>
    </section>
  );
};
