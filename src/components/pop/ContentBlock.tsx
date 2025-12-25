import { cn } from "@/lib/utils";
import { LucideIcon, AlertTriangle, Lightbulb, Target, Ban } from "lucide-react";

type ContentBlockVariant = "what" | "why" | "action" | "errors";

interface ContentBlockProps {
  variant: ContentBlockVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const variantConfig: Record<ContentBlockVariant, {
  icon: LucideIcon;
  defaultTitle: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
}> = {
  what: {
    icon: Target,
    defaultTitle: "O que é",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    borderColor: "border-l-primary",
  },
  why: {
    icon: Lightbulb,
    defaultTitle: "Por que importa",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    borderColor: "border-l-accent",
  },
  action: {
    icon: Target,
    defaultTitle: "O que você precisa fazer",
    iconBg: "bg-success/10",
    iconColor: "text-success",
    borderColor: "border-l-success",
  },
  errors: {
    icon: Ban,
    defaultTitle: "Erros comuns",
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
    borderColor: "border-l-destructive",
  },
};

export const ContentBlock = ({
  variant,
  title,
  children,
  className,
}: ContentBlockProps) => {
  const config = variantConfig[variant];
  const IconComponent = config.icon;
  const displayTitle = title || config.defaultTitle;

  return (
    <div
      className={cn(
        "rounded-xl border-l-4 bg-card p-4 sm:p-5 shadow-sm",
        config.borderColor,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn("p-2 rounded-lg shrink-0", config.iconBg)}>
          <IconComponent className={cn("w-4 h-4", config.iconColor)} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2">
            {displayTitle}
          </h4>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Grid layout for scannable content
interface ContentBlockGridProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentBlockGrid = ({ children, className }: ContentBlockGridProps) => {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {children}
    </div>
  );
};
