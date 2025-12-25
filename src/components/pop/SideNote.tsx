import { cn } from "@/lib/utils";
import { AlertTriangle, BookOpen, Lightbulb, Info } from "lucide-react";

type SideNoteVariant = "attention" | "reading" | "tip" | "note";

interface SideNoteProps {
  variant?: SideNoteVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const variantConfig: Record<SideNoteVariant, { 
  headerBg: string; 
  headerText: string;
  bodyBg: string;
  icon: React.ComponentType<{ className?: string }>;
  defaultTitle: string;
}> = {
  attention: {
    headerBg: "bg-primary",
    headerText: "text-primary-foreground",
    bodyBg: "bg-primary/5 border-primary/20",
    icon: AlertTriangle,
    defaultTitle: "PONTO DE ATENÇÃO",
  },
  reading: {
    headerBg: "bg-primary",
    headerText: "text-primary-foreground",
    bodyBg: "bg-primary/5 border-primary/20",
    icon: BookOpen,
    defaultTitle: "LEITURA COMPLEMENTAR",
  },
  tip: {
    headerBg: "bg-accent",
    headerText: "text-accent-foreground",
    bodyBg: "bg-accent/5 border-accent/20",
    icon: Lightbulb,
    defaultTitle: "DICA",
  },
  note: {
    headerBg: "bg-muted",
    headerText: "text-foreground",
    bodyBg: "bg-muted/50 border-border",
    icon: Info,
    defaultTitle: "OBSERVAÇÃO",
  },
};

export const SideNote = ({
  variant = "attention",
  title,
  children,
  className,
}: SideNoteProps) => {
  const config = variantConfig[variant];
  const IconComponent = config.icon;
  const displayTitle = title || config.defaultTitle;

  return (
    <aside
      className={cn(
        "rounded-lg overflow-hidden border shadow-sm",
        config.bodyBg,
        className
      )}
    >
      {/* Header */}
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-2.5 font-semibold text-xs tracking-wide uppercase",
          config.headerBg,
          config.headerText
        )}
      >
        <IconComponent className="w-4 h-4" />
        <span>{displayTitle}</span>
      </div>
      
      {/* Body */}
      <div className="p-4">
        <div className="text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </aside>
  );
};

// Float variant that can be positioned laterally in a grid layout
export const SideNoteFloat = ({
  variant = "attention",
  title,
  children,
  className,
  position = "left",
}: SideNoteProps & { position?: "left" | "right" }) => {
  return (
    <div className={cn(
      "lg:float-none lg:w-auto",
      position === "left" ? "lg:mr-6" : "lg:ml-6",
      className
    )}>
      <SideNote variant={variant} title={title}>
        {children}
      </SideNote>
    </div>
  );
};
