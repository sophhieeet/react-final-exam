const makeFlag = (label, color = "#2f6f63") => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100"><rect width="160" height="100" rx="12" fill="#fffaf2"/><rect x="8" y="8" width="144" height="84" rx="10" fill="${color}" opacity="0.9"/><text x="80" y="62" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#fffaf2">${label}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const fallbackCountries = [
  {
    cca3: "GEO",
    name: { common: "Georgia" },
    capital: ["Tbilisi"],
    region: "Asia",
    population: 3714000,
    area: 69700,
    languages: { kat: "Georgian" },
    currencies: { GEL: { name: "Georgian lari" } },
    flags: { svg: makeFlag("GE", "#b94a3f"), alt: "Georgia flag placeholder" }
  },
  {
    cca3: "ITA",
    name: { common: "Italy" },
    capital: ["Rome"],
    region: "Europe",
    population: 58870762,
    area: 301336,
    languages: { ita: "Italian" },
    currencies: { EUR: { name: "Euro" } },
    flags: { svg: makeFlag("IT", "#2f6f63"), alt: "Italy flag placeholder" }
  },
  {
    cca3: "FRA",
    name: { common: "France" },
    capital: ["Paris"],
    region: "Europe",
    population: 68170628,
    area: 551695,
    languages: { fra: "French" },
    currencies: { EUR: { name: "Euro" } },
    flags: { svg: makeFlag("FR", "#405d88"), alt: "France flag placeholder" }
  },
  {
    cca3: "JPN",
    name: { common: "Japan" },
    capital: ["Tokyo"],
    region: "Asia",
    population: 125416877,
    area: 377930,
    languages: { jpn: "Japanese" },
    currencies: { JPY: { name: "Japanese yen" } },
    flags: { svg: makeFlag("JP", "#b94a3f"), alt: "Japan flag placeholder" }
  },
  {
    cca3: "ESP",
    name: { common: "Spain" },
    capital: ["Madrid"],
    region: "Europe",
    population: 47450795,
    area: 505992,
    languages: { spa: "Spanish" },
    currencies: { EUR: { name: "Euro" } },
    flags: { svg: makeFlag("ES", "#c77745"), alt: "Spain flag placeholder" }
  },
  {
    cca3: "GRC",
    name: { common: "Greece" },
    capital: ["Athens"],
    region: "Europe",
    population: 10423054,
    area: 131990,
    languages: { ell: "Greek" },
    currencies: { EUR: { name: "Euro" } },
    flags: { svg: makeFlag("GR", "#487b8f"), alt: "Greece flag placeholder" }
  },
  {
    cca3: "TUR",
    name: { common: "Turkey" },
    capital: ["Ankara"],
    region: "Asia",
    population: 85341241,
    area: 783562,
    languages: { tur: "Turkish" },
    currencies: { TRY: { name: "Turkish lira" } },
    flags: { svg: makeFlag("TR", "#a64a42"), alt: "Turkey flag placeholder" }
  },
  {
    cca3: "NLD",
    name: { common: "Netherlands" },
    capital: ["Amsterdam"],
    region: "Europe",
    population: 17811291,
    area: 41850,
    languages: { nld: "Dutch" },
    currencies: { EUR: { name: "Euro" } },
    flags: { svg: makeFlag("NL", "#405d88"), alt: "Netherlands flag placeholder" }
  },
  {
    cca3: "PRT",
    name: { common: "Portugal" },
    capital: ["Lisbon"],
    region: "Europe",
    population: 10305564,
    area: 92090,
    languages: { por: "Portuguese" },
    currencies: { EUR: { name: "Euro" } },
    flags: { svg: makeFlag("PT", "#2f6f63"), alt: "Portugal flag placeholder" }
  },
  {
    cca3: "CAN",
    name: { common: "Canada" },
    capital: ["Ottawa"],
    region: "Americas",
    population: 38005238,
    area: 9984670,
    languages: { eng: "English", fra: "French" },
    currencies: { CAD: { name: "Canadian dollar" } },
    flags: { svg: makeFlag("CA", "#b94a3f"), alt: "Canada flag placeholder" }
  },
  {
    cca3: "AUS",
    name: { common: "Australia" },
    capital: ["Canberra"],
    region: "Oceania",
    population: 25687041,
    area: 7692024,
    languages: { eng: "English" },
    currencies: { AUD: { name: "Australian dollar" } },
    flags: { svg: makeFlag("AU", "#405d88"), alt: "Australia flag placeholder" }
  },
  {
    cca3: "BRA",
    name: { common: "Brazil" },
    capital: ["Brasilia"],
    region: "Americas",
    population: 203062512,
    area: 8515767,
    languages: { por: "Portuguese" },
    currencies: { BRL: { name: "Brazilian real" } },
    flags: { svg: makeFlag("BR", "#2f6f63"), alt: "Brazil flag placeholder" }
  }
];
