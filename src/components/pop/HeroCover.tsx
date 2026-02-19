import { BookOpen, Calendar, Building2, FileText } from "lucide-react";
import { motion } from "framer-motion";

const heroCards = [
  { icon: <Building2 className="w-6 h-6" />, label: "GAD", desc: "Gerência de Administração" },
  { icon: <BookOpen className="w-6 h-6" />, label: "POP", desc: "Procedimento Operacional Padrão" },
  { icon: <FileText className="w-6 h-6" />, label: "SEI!RIO", desc: "Sistema Eletrônico" },
  { icon: <Calendar className="w-6 h-6" />, label: "V. 1.1", desc: "Fevereiro/2026" },
];

export const HeroCover = () => {
  return (
    <section id="hero-cover" className="relative min-h-[90vh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[hsl(var(--bg-deep))]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(199 89% 48% / 0.12), transparent), radial-gradient(circle, hsl(210 20% 95% / 0.04) 1px, transparent 1px)",
          backgroundSize: "auto, 32px 32px",
        }}
      />

      <div className="relative z-10 text-center px-6 py-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 backdrop-blur-xl bg-[hsl(var(--bg-glass))] border border-[hsl(var(--border-subtle))] px-5 py-2 rounded-full mb-10"
        >
          <Building2 className="w-5 h-5 text-[hsl(var(--text-primary))]" />
          <span className="text-[hsl(var(--text-primary))] font-semibold text-xs tracking-[0.05em] uppercase">
            4ª Coordenadoria Regional de Educação
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--bg-glass))] border border-[hsl(var(--border-subtle))] text-[hsl(var(--text-primary))] px-5 py-2 rounded-full text-xs font-semibold tracking-[0.05em] uppercase mb-7">
            <FileText className="w-4 h-4" />
            Procedimento Operacional Padrão
          </div>
          <h1 className="font-heading font-extrabold text-[hsl(var(--text-primary))] mb-6">
            Prestação de Contas
            <br />
            <span className="hero-title-accent bg-gradient-to-br from-[hsl(var(--accent-start))] to-[hsl(var(--accent-end))] bg-clip-text text-transparent">
              SDP no SEI!RIO
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[hsl(var(--text-secondary))] max-w-[600px] mx-auto text-base sm:text-lg mb-12"
        >
          Guia operacional para diretores(as) e gestores(as) escolares na instrução da Prestação de Contas do SDP diretamente no SEI!RIO.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
        >
          {heroCards.map((item) => (
            <motion.div
              key={item.label}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl p-6 text-center backdrop-blur-[16px] bg-[hsl(var(--bg-glass))] border border-[hsl(var(--border-subtle))] transition-all duration-300 hover:-translate-y-[2px] hover:border-[hsl(var(--border-accent))] hover:shadow-[0_8px_32px_hsl(199_89%_48%/_0.1)]"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-start)/0.15)] to-[hsl(var(--accent-end)/0.15)] mb-3">
                <span className="text-[hsl(var(--accent-solid))]">{item.icon}</span>
              </div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.05em] text-[hsl(var(--text-primary))]">{item.label}</p>
              <p className="text-xs text-[hsl(var(--text-secondary))] mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8">
          <div className="w-8 h-12 border-2 border-[hsl(var(--border-default))] rounded-full mx-auto flex items-start justify-center p-2">
            <div
              className="w-1.5 h-3 bg-[hsl(var(--text-secondary))] rounded-full"
              style={{ animation: "hero-scroll-bounce 2s infinite" }}
            />
          </div>
          <p className="text-[hsl(var(--text-tertiary))] text-sm mt-3 tracking-wide">Role para continuar</p>
        </div>
      </div>
    </section>
  );
};
