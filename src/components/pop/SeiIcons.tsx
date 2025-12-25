import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

// Ícone "Incluir Documento" - documento branco com + dourado (mais fiel ao SEI)
export const SeiIncluirIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Documento base */}
    <path
      d="M5 3C5 2.44772 5.44772 2 6 2H14L19 7V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3Z"
      fill="#FFFFFF"
      stroke="#666666"
      strokeWidth="1.5"
    />
    {/* Dobra do documento */}
    <path
      d="M14 2V7H19"
      fill="#E8E8E8"
      stroke="#666666"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M14 2L19 7"
      stroke="#666666"
      strokeWidth="1.5"
    />
    {/* Círculo dourado com + */}
    <circle cx="15" cy="17" r="5" fill="#F5C518" stroke="#CC9900" strokeWidth="1" />
    <path
      d="M15 14V20M12 17H18"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Ícone "Assinar" - caneta com pena dourada (estilo SEI)
export const SeiAssinarIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Corpo da caneta */}
    <path
      d="M17 3L21 7L8 20H4V16L17 3Z"
      fill="#4A4A4A"
      stroke="#333333"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Ponta da caneta */}
    <path
      d="M4 16L8 20"
      stroke="#333333"
      strokeWidth="1.5"
    />
    {/* Detalhe dourado */}
    <path
      d="M15 5L19 9"
      stroke="#F5C518"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Linha de assinatura */}
    <path
      d="M3 22C5 20 7 21 9 20C11 19 13 21 15 20"
      stroke="#333333"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// Ícone "Enviar Processo" - envelope com seta (estilo SEI)
export const SeiEnviarIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Envelope base */}
    <rect
      x="2"
      y="5"
      width="20"
      height="14"
      rx="2"
      fill="#E8F0E8"
      stroke="#2E7D32"
      strokeWidth="1.5"
    />
    {/* Aba do envelope */}
    <path
      d="M2 7L12 14L22 7"
      stroke="#2E7D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Seta de envio */}
    <path
      d="M16 11L20 15L16 19"
      fill="#43A047"
      stroke="#2E7D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15H20"
      stroke="#2E7D32"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Ícone "Pasta" - pasta de arquivos amarela (estilo SEI)
export const SeiPastaIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Aba da pasta */}
    <path
      d="M2 7C2 5.89543 2.89543 5 4 5H9L11 8H20C21.1046 8 22 8.89543 22 10V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V7Z"
      fill="#F5C518"
      stroke="#CC9900"
      strokeWidth="1.5"
    />
    {/* Detalhe superior */}
    <path
      d="M2 10H22"
      stroke="#CC9900"
      strokeWidth="0.75"
      strokeOpacity="0.5"
    />
    {/* Sombra inferior */}
    <path
      d="M4 20H20"
      stroke="#B8860B"
      strokeWidth="0.5"
    />
  </svg>
);

// Ícone "Iniciar Processo" - documento com + verde (estilo SEI)
export const SeiIniciarProcessoIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Documento base */}
    <path
      d="M5 3C5 2.44772 5.44772 2 6 2H14L19 7V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3Z"
      fill="#FFFFFF"
      stroke="#666666"
      strokeWidth="1.5"
    />
    {/* Dobra do documento */}
    <path
      d="M14 2V7H19"
      fill="#E8E8E8"
      stroke="#666666"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Linhas de texto no documento */}
    <path d="M7 10H15M7 13H12" stroke="#CCCCCC" strokeWidth="1" strokeLinecap="round" />
    {/* Círculo verde com + */}
    <circle cx="15" cy="17" r="5" fill="#43A047" stroke="#2E7D32" strokeWidth="1" />
    <path
      d="M15 14V20M12 17H18"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Ícone "Interessados" - pessoas/usuários (estilo SEI)
export const SeiInteressadosIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Pessoa principal */}
    <circle cx="9" cy="7" r="4" fill="#E0E0E0" stroke="#666666" strokeWidth="1.5" />
    <path
      d="M2 20C2 16.134 5.13401 13 9 13C12.866 13 16 16.134 16 20V21H2V20Z"
      fill="#E0E0E0"
      stroke="#666666"
      strokeWidth="1.5"
    />
    {/* Pessoa secundária (atrás) */}
    <circle cx="17" cy="8" r="3" fill="#C0C0C0" stroke="#888888" strokeWidth="1" />
    <path
      d="M13 21V20C13 18.5 14 17 15.5 16C17 15 19 15 20.5 16C21.5 17 22 18 22 20V21"
      fill="#C0C0C0"
      stroke="#888888"
      strokeWidth="1"
    />
  </svg>
);

// Ícone "Autenticar" - documento com check verde
export const SeiAutenticarIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Documento base */}
    <path
      d="M5 3C5 2.44772 5.44772 2 6 2H14L19 7V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3Z"
      fill="#FFFFFF"
      stroke="#666666"
      strokeWidth="1.5"
    />
    {/* Dobra do documento */}
    <path
      d="M14 2V7H19"
      fill="#E8E8E8"
      stroke="#666666"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Círculo verde com check */}
    <circle cx="15" cy="17" r="5" fill="#43A047" stroke="#2E7D32" strokeWidth="1" />
    <path
      d="M12.5 17L14 18.5L17.5 15"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Ícone "Visualizar" - olho (estilo SEI)
export const SeiVisualizarIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z"
      fill="#E3F2FD"
      stroke="#1976D2"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12.5" r="3.5" fill="#1976D2" stroke="#0D47A1" strokeWidth="1" />
    <circle cx="12" cy="12.5" r="1.5" fill="#FFFFFF" />
  </svg>
);

// Ícone "Imprimir" - impressora (estilo SEI)
export const SeiImprimirIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Corpo da impressora */}
    <rect x="4" y="8" width="16" height="8" rx="1" fill="#E0E0E0" stroke="#666666" strokeWidth="1.5" />
    {/* Papel saindo */}
    <path
      d="M6 16V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V16"
      fill="#FFFFFF"
      stroke="#666666"
      strokeWidth="1.5"
    />
    {/* Bandeja de papel */}
    <path
      d="M7 8V5C7 4.44772 7.44772 4 8 4H16C16.5523 4 17 4.44772 17 5V8"
      fill="#FFFFFF"
      stroke="#666666"
      strokeWidth="1.5"
    />
    {/* Linhas de texto no papel */}
    <path d="M9 17H15M9 19H13" stroke="#CCCCCC" strokeWidth="0.75" strokeLinecap="round" />
    {/* Luz de status */}
    <circle cx="17" cy="11" r="1" fill="#43A047" />
  </svg>
);

// Ícone "Download" - seta para baixo (estilo SEI)
export const SeiDownloadIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Seta */}
    <path
      d="M12 4V16M12 16L7 11M12 16L17 11"
      stroke="#1976D2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Base */}
    <path
      d="M4 17V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V17"
      stroke="#1976D2"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Ícone "Link Externo" - elo de corrente (estilo SEI)
export const SeiLinkIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 14L14 10"
      stroke="#1976D2"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M15 9L17.5 6.5C18.8807 5.11929 21.1193 5.11929 22.5 6.5C23.8807 7.88071 23.8807 10.1193 22.5 11.5L20 14"
      stroke="#1976D2"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9 15L6.5 17.5C5.11929 18.8807 2.88071 18.8807 1.5 17.5C0.119289 16.1193 0.119289 13.8807 1.5 12.5L4 10"
      stroke="#1976D2"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Ícone "Salvar" - disquete (estilo SEI)
export const SeiSalvarIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 3C5 2.44772 5.44772 2 6 2H16L21 7V21C21 21.5523 20.5523 22 20 22H6C5.44772 22 5 21.5523 5 21V3Z"
      fill="#1976D2"
      stroke="#0D47A1"
      strokeWidth="1.5"
    />
    {/* Área do disquete */}
    <rect x="7" y="2" width="10" height="7" fill="#FFFFFF" stroke="#0D47A1" strokeWidth="0.5" />
    {/* Label */}
    <rect x="8" y="13" width="8" height="7" rx="1" fill="#E3F2FD" stroke="#0D47A1" strokeWidth="0.5" />
    {/* Linhas no label */}
    <path d="M9 15H15M9 17H13" stroke="#1976D2" strokeWidth="0.5" strokeLinecap="round" />
  </svg>
);
