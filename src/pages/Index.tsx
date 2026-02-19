import { useState, useEffect, useCallback, useRef, lazy, Suspense } from "react";
import { Menu, ClipboardList, FileText, Table2, Upload, CheckCircle, Phone, Scale, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PopSidebar } from "@/components/pop/PopSidebar";
import { HeroCover } from "@/components/pop/HeroCover";
import { SectionDivider } from "@/components/pop/SectionDivider";
import { SectionIntro } from "@/components/pop/SectionIntro";
import { SectionOne } from "@/components/pop/SectionOne";
import { ReadingProgressBar } from "@/components/pop/ReadingProgressBar";
import { AnimatedSection } from "@/components/pop/AnimatedSection";
import { BottomToolbar } from "@/components/pop/BottomToolbar";
import { CommandPalette } from "@/components/pop/CommandPalette";

// Lazy load sections below the fold to reduce initial bundle
const SectionTwo = lazy(() => import("@/components/pop/SectionTwo").then(m => ({ default: m.SectionTwo })));
const SectionThree = lazy(() => import("@/components/pop/SectionThree").then(m => ({ default: m.SectionThree })));
const SectionFour = lazy(() => import("@/components/pop/SectionFour").then(m => ({ default: m.SectionFour })));
const SectionFive = lazy(() => import("@/components/pop/SectionFive").then(m => ({ default: m.SectionFive })));
const SectionContacts = lazy(() => import("@/components/pop/SectionContacts").then(m => ({ default: m.SectionContacts })));
const SectionAnexo = lazy(() => import("@/components/pop/SectionAnexo").then(m => ({ default: m.SectionAnexo })));
const BackToTop = lazy(() => import("@/components/pop/BackToTop").then(m => ({ default: m.BackToTop })));
const DocumentFooter = lazy(() => import("@/components/pop/DocumentFooter").then(m => ({ default: m.DocumentFooter })));
const DownloadSection = lazy(() => import("@/components/pop/DownloadSection").then(m => ({ default: m.DownloadSection })));

// Loading placeholder for lazy components - Premium Shimmer
const SectionLoader = () => (
  <div className="py-8 space-y-4">
    <div className="skeleton-shimmer h-12 w-3/4 mx-auto" />
    <div className="skeleton-shimmer h-40 w-full rounded-xl" />
    <div className="skeleton-shimmer h-24 w-full rounded-xl" />
  </div>
);



const Index = () => {
  const [activeSection, setActiveSection] = useState("introducao");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Global keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSectionClick = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  }, []);

  const handlePrint = useCallback(() => {
    const originalTitle = document.title;
    const printTitle = "SDP_PRESTACAO_DE_CONTAS_GAD_4_CRE";

    const restoreTitle = () => {
      document.title = originalTitle;
    };

    // Keep the professional name while the print dialog is open.
    window.addEventListener("afterprint", restoreTitle, { once: true });

    // Set professional PDF filename.
    document.title = printTitle;

    // Let the browser apply the title change before opening the print dialog.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => window.print());
    });
  }, []);

  // Track visible sections via IntersectionObserver to avoid forced reflows
  const visibleSectionsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const sectionIds = ["introducao", "secao-1", "secao-2", "secao-3", "secao-4", "secao-5", "contatos", "anexo"];
    const elements = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleSectionsRef.current.add(id);
          } else {
            visibleSectionsRef.current.delete(id);
          }
        });

        // Set active section to the first visible one in document order
        for (const id of sectionIds) {
          if (visibleSectionsRef.current.has(id)) {
            setActiveSection(id);
            break;
          }
        }
      },
      { rootMargin: "-100px 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Hero Cover */}
      <HeroCover />

      <div className="flex">
        <PopSidebar
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 lg:ml-0">
          {/* Mobile buttons - adjusted position for bottom toolbar */}
          <div className="lg:hidden fixed bottom-20 left-4 z-40 no-print flex gap-2">
            <Button size="lg" className="rounded-full shadow-xl" onClick={() => setSidebarOpen(true)} aria-label="Abrir menu de navegação">
              <Menu className="w-5 h-5 mr-2" />
              Menu
            </Button>
            <Button size="lg" variant="outline" className="rounded-full shadow-xl bg-background" onClick={() => setSearchOpen(true)} aria-label="Abrir busca">
              <Search className="w-5 h-5" />
            </Button>
          </div>

          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="space-y-8">
              <AnimatedSection>
                <SectionIntro />
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <SectionDivider number="1" title="Abertura do Processo" subtitle="Acesso ao SEI!RIO, criação do processo, numeração e identificação" icon={ClipboardList} />
              </AnimatedSection>
              <AnimatedSection delay={150}>
                <SectionOne />
              </AnimatedSection>

              <Suspense fallback={<SectionLoader />}>
                <AnimatedSection delay={100}>
                  <SectionDivider number="2" title="Despacho de Encaminhamento" subtitle="Elaboração do documento de formalização da prestação de contas" icon={FileText} />
                </AnimatedSection>
                <AnimatedSection delay={150}>
                  <SectionTwo />
                </AnimatedSection>

                <AnimatedSection delay={100}>
                  <SectionDivider number="3" title="Demonstrativo de Despesas" subtitle="Como gerar no SEI!RIO, conferência de dados e naturezas de despesa" icon={Table2} />
                </AnimatedSection>
                <AnimatedSection delay={150}>
                  <SectionThree />
                </AnimatedSection>

                <AnimatedSection delay={100}>
                  <SectionDivider number="4" title="Documentos Externos" subtitle="Notas fiscais, recibos, comprovantes e demais documentos" icon={Upload} />
                </AnimatedSection>
                <AnimatedSection delay={150}>
                  <SectionFour />
                </AnimatedSection>

                <AnimatedSection delay={100}>
                  <SectionDivider number="5" title="Conferência e Envio" subtitle="Verificação dos documentos e envio para a GAD" icon={CheckCircle} />
                </AnimatedSection>
                <AnimatedSection delay={150}>
                  <SectionFive />
                </AnimatedSection>

                <AnimatedSection delay={100}>
                  <SectionDivider number="6" title="Contatos" subtitle="Canais de atendimento e suporte da GAD/4ª CRE" icon={Phone} />
                </AnimatedSection>
                <AnimatedSection delay={150}>
                  <SectionContacts onPrint={handlePrint} />
                </AnimatedSection>

                {/* Download Section */}
                <AnimatedSection delay={100}>
                  <DownloadSection />
                </AnimatedSection>

                {/* Anexo section without animation to ensure visibility */}
                <div id="anexo-divider">
                  <SectionDivider number="A" title="Anexo" subtitle="Legislação de referência e documentos exigidos" icon={Scale} />
                </div>
                <SectionAnexo />

                {/* Document Footer */}
                <DocumentFooter />
              </Suspense>
            </div>

            <div className="print-only mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
              <p>Procedimento Operacional Padrão - Prestação de Contas SDP</p>
              <p>4ª Coordenadoria Regional de Educação | GAD</p>
            </div>

            {/* Bottom padding for toolbar */}
            <div className="h-20 no-print" />
          </div>
        </main>
      </div>
      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
      <BottomToolbar onPrint={handlePrint} />

      {/* Global Search Command Palette */}
      <CommandPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleSectionClick}
      />

    </div>
  );
};

export default Index;
