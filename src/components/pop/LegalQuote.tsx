import { Quote, Scale, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface LegalQuoteProps {
  text: string;
  source: string;
  article?: string;
  link?: string;
  className?: string;
}

export const LegalQuote = ({ text, source, article, link, className }: LegalQuoteProps) => {
  return (
    <div className={cn(
      "relative my-6 pl-6 pr-4 py-5 rounded-xl",
      "bg-gradient-to-r from-primary/5 via-primary/3 to-transparent",
      "border-l-4 border-primary",
      "dark:from-primary/10 dark:via-primary/5 dark:to-transparent",
      className
    )}>
      {/* Quote icon */}
      <div className="absolute -left-3 top-5 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-md">
        <Quote className="w-3 h-3 text-primary-foreground" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Article badge */}
        {article && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 rounded-md">
            <Scale className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary">{article}</span>
          </div>
        )}

        {/* Quote text */}
        <blockquote className="text-foreground/90 text-sm sm:text-base leading-relaxed italic">
          "{text}"
        </blockquote>

        {/* Source */}
        <div className="flex items-center gap-2 pt-1">
          {link ? (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors group content-link"
            >
              <span>{source}</span>
              <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            <span className="text-xs text-muted-foreground font-medium">{source}</span>
          )}
        </div>
      </div>
    </div>
  );
};
