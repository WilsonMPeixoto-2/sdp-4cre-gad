const lastUpdatedFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "America/Sao_Paulo",
});

const getDocumentLastModified = () => {
  if (typeof document === "undefined" || !document.lastModified) {
    return new Date();
  }

  const parsed = new Date(document.lastModified);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
};

export const getLastUpdatedLabel = () => {
  return lastUpdatedFormatter.format(getDocumentLastModified());
};
