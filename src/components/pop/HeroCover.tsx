import { BookOpen, Calendar, Building2, FileText } from "lucide-react";

export const HeroCover = () => {
  return (
    <div 
      id="hero-cover"
      className="min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-[hsl(215,75%,32%)] via-[hsl(215,75%,28%)] to-[hsl(215,75%,20%)] relative overflow-hidden"
    >
      {/* Premium Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M50%2050c0-5.523%204.477-10%2010-10s10%204.477%2010%2010-4.477%2010-10%2010c0%205.523-4.477%2010-10%2010s-10-4.477-10-10%204.477-10%2010-10zM10%2010c0-5.523%204.477-10%2010-10s10%204.477%2010%2010-4.477%2010-10%2010c0%205.523-4.477%2010-10%2010S0%2025.523%200%2020s4.477-10%2010-10z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        </div>
      </div>
      
      {/* Premium Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10 text-center px-6 py-12 max-w-4xl mx-auto">
        {/* Institution Badge */}
        <div className="inline-flex items-center gap-3 bg-primary-foreground/10 glass-effect border border-primary-foreground/20 px-6 py-3 rounded-full mb-10 shadow-lg">
          <Building2 className="w-5 h-5 text-primary-foreground" />
          <span className="text-primary-foreground font-medium text-sm sm:text-base tracking-wide">
            4ª Coordenadoria Regional de Educação
          </span>
        </div>
        
        {/* Main Title */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-xl text-sm font-bold mb-7 shadow-xl tracking-wide">
            <FileText className="w-4 h-4" />
            PROCEDIMENTO OPERACIONAL PADRÃO
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-primary-foreground leading-[1.1] mb-7 tracking-tight">
            Prestação de Contas
            <br />
            <span className="bg-gradient-to-r from-accent via-[hsl(210,85%,60%)] to-accent bg-clip-text text-transparent">
              SDP no SEI!RIO
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed font-light">
            Guia operacional para diretores(as) e gestores(as) escolares na instrução 
            da Prestação de Contas do SDP diretamente no SEI!RIO.
          </p>
        </div>
        
        {/* Info Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10">
          {[
            { icon: <Building2 className="w-5 h-5" />, label: "GAD", desc: "Gerência de Administração" },
            { icon: <BookOpen className="w-5 h-5" />, label: "POP", desc: "Procedimento Operacional Padrão" },
            { icon: <FileText className="w-5 h-5" />, label: "SEI!RIO", desc: "Sistema Eletrônico" },
            { icon: <Calendar className="w-5 h-5" />, label: "V. 1.0", desc: "Dezembro/2025" },
          ].map((item, i) => (
            <div key={i} className="bg-primary-foreground/8 glass-effect border border-primary-foreground/15 rounded-2xl p-4 text-center transition-all duration-300 hover:bg-primary-foreground/12 hover:border-primary-foreground/25 group">
              <div className="inline-flex items-center justify-center w-11 h-11 bg-primary-foreground/10 rounded-xl mb-2.5 group-hover:bg-primary-foreground/15 transition-colors">
                <span className="text-primary-foreground">{item.icon}</span>
              </div>
              <p className="text-primary-foreground font-bold text-sm tracking-wide">{item.label}</p>
              <p className="text-primary-foreground/65 text-xs mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce mt-10">
          <div className="w-7 h-11 border-2 border-primary-foreground/40 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-pulse"></div>
          </div>
          <p className="text-primary-foreground/50 text-sm mt-3 tracking-wide">Role para continuar</p>
        </div>
      </div>
    </div>
  );
};
