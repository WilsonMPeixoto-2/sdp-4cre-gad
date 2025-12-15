import { useState, useEffect, useCallback } from "react";
import { Menu, ClipboardList, FileText, Table2, Upload, CheckCircle, Phone, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PopHeader } from "@/components/pop/PopHeader";
import { PopSidebar } from "@/components/pop/PopSidebar";
import { HeroCover } from "@/components/pop/HeroCover";
import { SectionDivider } from "@/components/pop/SectionDivider";
import { SectionIntro } from "@/components/pop/SectionIntro";
import { SectionOne } from "@/components/pop/SectionOne";
import { SectionTwo } from "@/components/pop/SectionTwo";
import { SectionThree } from "@/components/pop/SectionThree";
import { SectionFour } from "@/components/pop/SectionFour";
import { SectionFive } from "@/components/pop/SectionFive";
import { SectionContacts } from "@/components/pop/SectionContacts";
import { SectionAnexo } from "@/components/pop/SectionAnexo";
import { BackToTop } from "@/components/pop/BackToTop";

const Index = () => {
  const [activeSection, setActiveSection] = useState("introducao");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSectionClick = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["introducao", "secao-1", "secao-2", "secao-3", "secao-4", "secao-5", "contatos"];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Cover */}
      <HeroCover />

      {/* Header */}
      <PopHeader onPrint={handlePrint} />

      <div className="flex">
        <PopSidebar
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 lg:ml-0">
          <div className="lg:hidden fixed bottom-4 left-4 z-40 no-print">
            <Button size="lg" className="rounded-full shadow-lg" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5 mr-2" />
              Menu
            </Button>
          </div>

          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="space-y-8">
              <SectionIntro />

              <SectionDivider number="1" title="Abertura do Processo" subtitle="Acesso ao SEI!RIO, criação do processo, numeração e identificação" icon={ClipboardList} />
              <SectionOne />

              <SectionDivider number="2" title="Despacho de Encaminhamento" subtitle="Elaboração do documento de formalização da prestação de contas" icon={FileText} />
              <SectionTwo />

              <SectionDivider number="3" title="Demonstrativo de Despesas" subtitle="Como gerar no SEI!RIO, conferência de dados e naturezas de despesa" icon={Table2} />
              <SectionThree />

              <SectionDivider number="4" title="Documentos Externos" subtitle="Notas fiscais, recibos, comprovantes e demais documentos" icon={Upload} />
              <SectionFour />

              <SectionDivider number="5" title="Conferência e Envio" subtitle="Verificação dos documentos e envio para a GAD" icon={CheckCircle} />
              <SectionFive />

              <SectionDivider number="6" title="Contatos" subtitle="Canais de atendimento e suporte da GAD/4ª CRE" icon={Phone} />
              <SectionContacts />

              <SectionDivider number="A" title="Anexo" subtitle="Legislação de referência e documentos exigidos" icon={Scale} />
              <SectionAnexo />
            </div>

            <div className="print-only mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
              <p>Procedimento Operacional Padrão - Prestação de Contas SDP</p>
              <p>4ª Coordenadoria Regional de Educação | GAD</p>
            </div>
          </div>
        </main>
      </div>
      <BackToTop />
    </div>
  );
};

export default Index;
