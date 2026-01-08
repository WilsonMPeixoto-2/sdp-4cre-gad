// Search index for the SDP POP content
export interface SearchItem {
    id: string;
    title: string;
    subtitle?: string;
    content: string;
    sectionId: string;
    sectionNumber: string;
    keywords: string[];
}

export const searchIndex: SearchItem[] = [
    // Seção Introdução
    {
        id: "intro-1",
        title: "Apresentação",
        subtitle: "Boas-vindas da GAD/4ª CRE",
        content: "A rotina de uma gestão escolar é intensa. Entre demandas pedagógicas, cuidado com pessoas e urgências do dia a dia, sabemos que a organização administrativa exige tempo.",
        sectionId: "introducao",
        sectionNumber: "0",
        keywords: ["apresentação", "introdução", "boas-vindas", "gestão", "gad", "4ª cre"],
    },

    // Seção 1 - Abertura do Processo
    {
        id: "s1-iniciar",
        title: "Iniciar Processo",
        subtitle: "Como abrir um novo processo no SEI!RIO",
        content: "Para abrir um novo processo no SEI!RIO, o usuário deve selecionar a opção INICIAR PROCESSO no menu de navegação do sistema.",
        sectionId: "secao-1",
        sectionNumber: "1",
        keywords: ["iniciar", "processo", "abertura", "sei", "menu"],
    },
    {
        id: "s1-tipo",
        title: "Tipo de Processo",
        subtitle: "EXECUÇÃO FINANCEIRA: SDP",
        content: "EXECUÇÃO FINANCEIRA: SISTEMA DESCENTRALIZADO DE PAGAMENTO - SDP. O tipo de processo correto para prestação de contas.",
        sectionId: "secao-1",
        sectionNumber: "1",
        keywords: ["tipo", "execução financeira", "sdp", "prestação de contas"],
    },
    {
        id: "s1-especificacao",
        title: "Especificação",
        subtitle: "Formato do campo especificação",
        content: "Prestação de contas de SDP - E/CRE(XX.XX.XXX) Nome da Escola. Formato padrão para o campo especificação.",
        sectionId: "secao-1",
        sectionNumber: "1",
        keywords: ["especificação", "formato", "nomenclatura", "escola"],
    },
    {
        id: "s1-interessados",
        title: "Interessados",
        subtitle: "Código da GAD",
        content: "10729 - E/4a.CRE/GAD. Adicione a GAD como interessada no processo.",
        sectionId: "secao-1",
        sectionNumber: "1",
        keywords: ["interessados", "gad", "10729", "código"],
    },
    {
        id: "s1-nup",
        title: "NUP - Número Único de Protocolo",
        subtitle: "Identificador do processo",
        content: "Após salvar, o sistema gera automaticamente o Número Único de Protocolo (NUP) que identificará o processo.",
        sectionId: "secao-1",
        sectionNumber: "1",
        keywords: ["nup", "número", "protocolo", "identificador"],
    },

    // Seção 2 - Despacho
    {
        id: "s2-despacho",
        title: "Despacho de Encaminhamento",
        subtitle: "Documento de formalização",
        content: "O despacho de encaminhamento é o documento que formaliza a prestação de contas e direciona o processo à GAD.",
        sectionId: "secao-2",
        sectionNumber: "2",
        keywords: ["despacho", "encaminhamento", "formalização", "documento"],
    },
    {
        id: "s2-assinar",
        title: "Assinatura de Documentos",
        subtitle: "Como assinar no SEI!RIO",
        content: "Clique no botão Assinar na barra de ferramentas do documento para assinar eletronicamente.",
        sectionId: "secao-2",
        sectionNumber: "2",
        keywords: ["assinar", "assinatura", "eletrônica", "documento"],
    },

    // Seção 3 - Demonstrativo
    {
        id: "s3-demonstrativo",
        title: "Demonstrativo de Despesas",
        subtitle: "Geração e preenchimento",
        content: "O demonstrativo de despesas deve ser gerado no SEI!RIO e preenchido com todas as despesas realizadas.",
        sectionId: "secao-3",
        sectionNumber: "3",
        keywords: ["demonstrativo", "despesas", "natureza de despesa", "nd"],
    },
    {
        id: "s3-nd435",
        title: "Natureza de Despesa 435",
        subtitle: "Material de consumo",
        content: "ND 435 - Outros Serviços de Terceiros. Utilizada para materiais de consumo e serviços.",
        sectionId: "secao-3",
        sectionNumber: "3",
        keywords: ["435", "nd", "natureza", "material", "consumo"],
    },
    {
        id: "s3-nd441",
        title: "Natureza de Despesa 441",
        subtitle: "Equipamentos e permanentes",
        content: "ND 441 - Material Permanente. Utilizada para equipamentos e bens permanentes.",
        sectionId: "secao-3",
        sectionNumber: "3",
        keywords: ["441", "nd", "permanente", "equipamento"],
    },

    // Seção 4 - Documentos Externos
    {
        id: "s4-externos",
        title: "Documentos Externos",
        subtitle: "Notas fiscais e comprovantes",
        content: "Incluir documentos externos como notas fiscais, recibos, comprovantes e demais documentos comprobatórios.",
        sectionId: "secao-4",
        sectionNumber: "4",
        keywords: ["documentos", "externos", "nota fiscal", "recibo", "comprovante"],
    },
    {
        id: "s4-autenticar",
        title: "Autenticar Documentos",
        subtitle: "Validação de documentos externos",
        content: "Use o botão Autenticar para validar documentos externos anexados ao processo.",
        sectionId: "secao-4",
        sectionNumber: "4",
        keywords: ["autenticar", "validar", "documento", "externo"],
    },

    // Seção 5 - Conferência e Envio
    {
        id: "s5-conferencia",
        title: "Conferência Final",
        subtitle: "Verificação antes do envio",
        content: "Confira todos os documentos do processo antes de enviar. Verifique assinaturas e autenticações.",
        sectionId: "secao-5",
        sectionNumber: "5",
        keywords: ["conferência", "verificação", "checklist", "envio"],
    },
    {
        id: "s5-enviar",
        title: "Enviar Processo",
        subtitle: "Encaminhamento para GAD",
        content: "Clique em Enviar Processo e selecione a unidade 10729 - E/4a.CRE/GAD como destinatário.",
        sectionId: "secao-5",
        sectionNumber: "5",
        keywords: ["enviar", "encaminhar", "gad", "destinatário"],
    },

    // Seção 6 - Contatos
    {
        id: "s6-email",
        title: "E-mail da GAD",
        subtitle: "Contato por e-mail",
        content: "gadcre04@rioeduca.net - E-mail oficial da Gerência de Administração da 4ª CRE.",
        sectionId: "contatos",
        sectionNumber: "6",
        keywords: ["email", "contato", "gad", "rioeduca"],
    },
    {
        id: "s6-telefone",
        title: "Telefone da GAD",
        subtitle: "Contato por telefone",
        content: "(21) 2475-9209 - Telefone da Gerência de Administração da 4ª CRE.",
        sectionId: "contatos",
        sectionNumber: "6",
        keywords: ["telefone", "contato", "2475", "gad"],
    },

    // Anexo
    {
        id: "anexo-legislacao",
        title: "Legislação",
        subtitle: "Base legal do SDP",
        content: "Anexo com a legislação de referência e documentos exigidos para a prestação de contas.",
        sectionId: "anexo",
        sectionNumber: "A",
        keywords: ["legislação", "lei", "decreto", "norma", "anexo"],
    },
];

// Simple fuzzy search function
export function searchContent(query: string): SearchItem[] {
    if (!query || query.length < 2) return [];

    const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const terms = normalizedQuery.split(/\s+/).filter(t => t.length > 1);

    return searchIndex
        .map(item => {
            const normalizedTitle = item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const normalizedContent = item.content.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const normalizedKeywords = item.keywords.join(" ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            let score = 0;

            for (const term of terms) {
                if (normalizedTitle.includes(term)) score += 10;
                if (normalizedKeywords.includes(term)) score += 5;
                if (normalizedContent.includes(term)) score += 2;
            }

            return { item, score };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
        .map(({ item }) => item);
}
