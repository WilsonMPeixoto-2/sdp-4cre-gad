import { Info, AlertTriangle, CheckCircle, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "warning" | "success";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
}

const variantStyles: Record<CalloutVariant, { bg: string; border: string; icon: string; iconComponent: LucideIcon }> = {
  info: {
    bg: "bg-accent/12 dark:bg-accent/24",
    border: "border-l-accent",
    icon: "text-accent",
    iconComponent: Info,
  },
  warning: {
    bg: "bg-warning/12 dark:bg-warning/22",
    border: "border-l-warning",
    icon: "text-warning",
    iconComponent: AlertTriangle,
  },
  success: {
    bg: "bg-success/12 dark:bg-success/22",
    border: "border-l-success",
    icon: "text-success",
    iconComponent: CheckCircle,
  },
};

export const Callout = ({ 
  variant = "info", 
  title, 
  children, 
  className,
  icon: CustomIcon 
}: CalloutProps) => {
  const styles = variantStyles[variant];
  const IconComponent = CustomIcon || styles.iconComponent;

  return (
    <div
      className={cn(
        "border-l-4 rounded-r-xl p-5 shadow-sm",
        styles.bg,
        styles.border,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <IconComponent className={cn("w-5 h-5 flex-shrink-0 mt-0.5", styles.icon)} />
        <div className="flex-1 min-w-0">
          {title && (
            <p className="font-bold text-foreground mb-1">{title}</p>
          )}
          <div className="text-sm text-foreground/80 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
