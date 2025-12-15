import { BookOpen, Calendar, Building2, FileText } from "lucide-react";

export const HeroCover = () => {
  return (
    <div className="min-h-[85vh] sm:min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary to-[hsl(215,70%,25%)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.15%22%3E%3Cpath%20d%3D%22M50%2050c0-5.523%204.477-10%2010-10s10%204.477%2010%2010-4.477%2010-10%2010c0%205.523-4.477%2010-10%2010s-10-4.477-10-10%204.477-10%2010-10zM10%2010c0-5.523%204.477-10%2010-10s10%204.477%2010%2010-4.477%2010-10%2010c0%205.523-4.477%2010-10%2010S0%2025.523%200%2020s4.477-10%2010-10z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center px-6 py-12 max-w-4xl mx-auto">
        {/* Logo/Badge */}
        <div className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-6 py-3 rounded-full mb-8">
          <Building2 className="w-5 h-5 text-primary-foreground" />
          <span className="text-primary-foreground font-medium text-sm sm:text-base">
            4ª Coordenadoria Regional de Educação
          </span>
        </div>
        
        {/* Main Title */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-semibold mb-6 shadow-lg">
            <FileText className="w-4 h-4" />
            PROCEDIMENTO OPERACIONAL PADRÃO
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Prestação de Contas
            <br />
            <span className="text-accent">SDP no SEI!RIO</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Guia operacional para diretores(as) e gestores(as) escolares na instrução 
            da Prestação de Contas do SDP diretamente no SEI!RIO.
          </p>
        </div>
        
        {/* Info Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-8">
          {[
            { icon: <Building2 className="w-5 h-5" />, label: "GAD", desc: "Gerência de Administração" },
            { icon: <BookOpen className="w-5 h-5" />, label: "POP", desc: "Procedimento Operacional Padrão" },
            { icon: <FileText className="w-5 h-5" />, label: "SEI!RIO", desc: "Sistema Eletrônico" },
            { icon: <Calendar className="w-5 h-5" />, label: "v1.0", desc: "Dezembro/2025" },
          ].map((item, i) => (
            <div key={i} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-lg mb-2">
                <span className="text-primary-foreground">{item.icon}</span>
              </div>
              <p className="text-primary-foreground font-bold text-sm">{item.label}</p>
              <p className="text-primary-foreground/70 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce mt-8">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full"></div>
          </div>
          <p className="text-primary-foreground/60 text-sm mt-2">Role para continuar</p>
        </div>
      </div>
    </div>
  );
};
