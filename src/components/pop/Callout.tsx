import { Info, AlertTriangle, CheckCircle, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "warning" | "success" | "danger";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
}

const variantStyles: Record<CalloutVariant, { className: string; icon: string; iconComponent: LucideIcon }> = {
  info: {
    className: "callout-info",
    icon: "text-accent",
    iconComponent: Info,
  },
  warning: {
    className: "callout-warning",
    icon: "text-warning",
    iconComponent: AlertTriangle,
  },
  success: {
    className: "callout-success",
    icon: "text-success",
    iconComponent: CheckCircle,
  },
  danger: {
    className: "callout-danger",
    icon: "text-destructive",
    iconComponent: AlertTriangle,
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
        "callout",
        styles.className,
        className
      )}
    >
      <div className="flex items-start gap-3 w-full">
        <IconComponent className={cn("callout-icon", styles.icon)} />
        <div className="flex-1 min-w-0">
          {title && (
            <p className="callout-title text-[hsl(var(--text-primary))]">{title}</p>
          )}
          <div className="callout-text">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
