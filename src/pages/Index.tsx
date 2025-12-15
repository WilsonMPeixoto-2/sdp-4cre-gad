import { useState, useEffect, useCallback } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PopHeader } from "@/components/pop/PopHeader";
import { PopSidebar } from "@/components/pop/PopSidebar";
import { SectionIntro } from "@/components/pop/SectionIntro";
import { SectionOne } from "@/components/pop/SectionOne";
import { SectionTwo } from "@/components/pop/SectionTwo";
import { SectionThree } from "@/components/pop/SectionThree";
import { SectionFour } from "@/components/pop/SectionFour";
import { SectionFive } from "@/components/pop/SectionFive";
import { SectionContacts } from "@/components/pop/SectionContacts";

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

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "introducao",
        "secao-1",
        "secao-2",
        "secao-3",
        "secao-4",
        "secao-5",
        "contatos",
      ];

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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <PopHeader onPrint={handlePrint} />

      <div className="flex">
        {/* Sidebar */}
        <PopSidebar
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          {/* Mobile Menu Button */}
          <div className="lg:hidden fixed bottom-4 left-4 z-40 no-print">
            <Button
              size="lg"
              className="rounded-full shadow-lg"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5 mr-2" />
              Menu
            </Button>
          </div>

          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="space-y-12">
              <SectionIntro />
              <SectionOne />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <SectionContacts />
            </div>

            {/* Print Footer */}
            <div className="print-only mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
              <p>Procedimento Operacional Padrão - Prestação de Contas SDP</p>
              <p>4ª Coordenadoria Regional de Educação | GAD</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
