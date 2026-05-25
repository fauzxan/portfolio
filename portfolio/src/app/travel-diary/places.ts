export type Place = {
  slug: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
  date: string;
};

export const places: Place[] = [
  // India
  { slug: "chennai",            name: "Chennai",          country: "India",          lat: 13.0827, lng:  80.2707, date: "TBD" },
  { slug: "bengaluru",          name: "Bengaluru",        country: "India",          lat: 12.9716, lng:  77.5946, date: "TBD" },
  { slug: "kochi",              name: "Kochi",            country: "India",          lat:  9.9312, lng:  76.2673, date: "TBD" },
  { slug: "mumbai",             name: "Mumbai",           country: "India",          lat: 19.0760, lng:  72.8777, date: "TBD" },

  // UAE
  { slug: "dubai",              name: "Dubai",            country: "UAE",            lat: 25.2048, lng:  55.2708, date: "TBD" },
  { slug: "sharjah",            name: "Sharjah",          country: "UAE",            lat: 25.3463, lng:  55.4209, date: "TBD" },
  { slug: "abu-dhabi",          name: "Abu Dhabi",        country: "UAE",            lat: 24.4539, lng:  54.3773, date: "TBD" },

  // Oman
  { slug: "musandam",           name: "Musandam",         country: "Oman",           lat: 26.1932, lng:  56.2487, date: "TBD" },

  // Saudi Arabia
  { slug: "makkah",             name: "Makkah",           country: "Saudi Arabia",   lat: 21.4225, lng:  39.8262, date: "TBD" },
  { slug: "medina",             name: "Medina",           country: "Saudi Arabia",   lat: 24.5247, lng:  39.5692, date: "TBD" },

  // Singapore (home base)
  { slug: "singapore",          name: "Singapore",        country: "Singapore",      lat:  1.3521, lng: 103.8198, date: "TBD" },

  // Malaysia
  { slug: "johor-bahru",        name: "Johor Bahru",      country: "Malaysia",       lat:  1.4927, lng: 103.7414, date: "TBD" },
  { slug: "kuala-lumpur",       name: "Kuala Lumpur",     country: "Malaysia",       lat:  3.1390, lng: 101.6869, date: "TBD" },
  { slug: "cameron-highlands",  name: "Cameron Highlands",country: "Malaysia",       lat:  4.4710, lng: 101.3760, date: "TBD" },
  { slug: "genting-highlands",  name: "Genting Highlands",country: "Malaysia",       lat:  3.4232, lng: 101.7920, date: "TBD" },
  { slug: "melaka",             name: "Melaka",           country: "Malaysia",       lat:  2.1896, lng: 102.2501, date: "TBD" },
  { slug: "penang",             name: "Penang",           country: "Malaysia",       lat:  5.4141, lng: 100.3288, date: "TBD" },
  { slug: "desaru",             name: "Desaru",           country: "Malaysia",       lat:  1.4979, lng: 104.2737, date: "TBD" },

  // Thailand
  { slug: "phuket",             name: "Phuket",           country: "Thailand",       lat:  7.8804, lng:  98.3923, date: "TBD" },
  { slug: "bangkok",            name: "Bangkok",          country: "Thailand",       lat: 13.7563, lng: 100.5018, date: "TBD" },

  // Indonesia
  { slug: "bali",               name: "Bali",             country: "Indonesia",      lat: -8.3405, lng: 115.0920, date: "TBD" },
  { slug: "batam",              name: "Batam",            country: "Indonesia",      lat:  1.0456, lng: 104.0305, date: "TBD" },
  { slug: "bintan",             name: "Bintan",           country: "Indonesia",      lat:  1.0593, lng: 104.4078, date: "TBD" },

  // Hong Kong (city-state)
  { slug: "hong-kong",          name: "Hong Kong",        country: "Hong Kong",      lat: 22.3193, lng: 114.1694, date: "TBD" },

  // Macau (city-state)
  { slug: "macau",              name: "Macau",            country: "Macau",          lat: 22.1987, lng: 113.5439, date: "TBD" },

  // Philippines
  { slug: "manila",             name: "Manila",           country: "Philippines",    lat: 14.5995, lng: 120.9842, date: "TBD" },
  { slug: "cebu",               name: "Cebu",             country: "Philippines",    lat: 10.3157, lng: 123.8854, date: "TBD" },
  { slug: "bohol",              name: "Bohol",            country: "Philippines",    lat:  9.6469, lng: 123.8553, date: "TBD" },
  { slug: "coron",              name: "Coron",            country: "Philippines",    lat: 11.9985, lng: 120.2049, date: "TBD" },
  { slug: "el-nido",            name: "El Nido",          country: "Philippines",    lat: 11.1817, lng: 119.4116, date: "TBD" },

  // Australia
  { slug: "sydney",             name: "Sydney",           country: "Australia",      lat: -33.8688, lng: 151.2093, date: "TBD" },
  { slug: "blue-mountains",     name: "Blue Mountains",   country: "Australia",      lat: -33.6584, lng: 150.3043, date: "TBD" },

  // Italy
  { slug: "rome",               name: "Rome",             country: "Italy",          lat: 41.9028, lng:  12.4964, date: "TBD" },
  { slug: "florence",           name: "Florence",         country: "Italy",          lat: 43.7696, lng:  11.2558, date: "TBD" },
  { slug: "pisa",               name: "Pisa",             country: "Italy",          lat: 43.7228, lng:  10.4017, date: "TBD" },
  { slug: "milan",              name: "Milan",            country: "Italy",          lat: 45.4642, lng:   9.1900, date: "TBD" },
  { slug: "venice",             name: "Venice",           country: "Italy",          lat: 45.4408, lng:  12.3155, date: "TBD" },

  // Switzerland
  { slug: "interlaken",         name: "Interlaken",       country: "Switzerland",    lat: 46.6863, lng:   7.8632, date: "TBD" },
  { slug: "brunnen",            name: "Brunnen",          country: "Switzerland",    lat: 46.9978, lng:   8.6063, date: "TBD" },
  { slug: "lucerne",            name: "Lucerne",          country: "Switzerland",    lat: 47.0502, lng:   8.3093, date: "TBD" },
  { slug: "grindelwald",        name: "Grindelwald",      country: "Switzerland",    lat: 46.6244, lng:   8.0410, date: "TBD" },

  // Germany
  { slug: "titisee",            name: "Titisee",          country: "Germany",        lat: 47.9075, lng:   8.1539, date: "TBD" },
  { slug: "freiburg",           name: "Freiburg",         country: "Germany",        lat: 47.9990, lng:   7.8421, date: "TBD" },

  // France
  { slug: "riquewihr",          name: "Riquewihr",        country: "France",         lat: 48.1672, lng:   7.2974, date: "TBD" },
  { slug: "paris",              name: "Paris",            country: "France",         lat: 48.8566, lng:   2.3522, date: "TBD" },

  // Czech Republic
  { slug: "prague",             name: "Prague",           country: "Czech Republic", lat: 50.0755, lng:  14.4378, date: "TBD" },

  // Slovakia
  { slug: "bratislava",         name: "Bratislava",       country: "Slovakia",       lat: 48.1486, lng:  17.1077, date: "TBD" },

  // Turkey
  { slug: "kars",               name: "Kars",             country: "Turkey",         lat: 40.6013, lng:  43.0975, date: "TBD" },
  { slug: "ankara",             name: "Ankara",           country: "Turkey",         lat: 39.9334, lng:  32.8597, date: "TBD" },
  { slug: "istanbul",           name: "Istanbul",         country: "Turkey",         lat: 41.0082, lng:  28.9784, date: "TBD" },

  // Vietnam
  { slug: "ho-chi-minh-city",   name: "Ho Chi Minh City", country: "Vietnam",        lat: 10.8231, lng: 106.6297, date: "TBD" },
  { slug: "hanoi",              name: "Hanoi",            country: "Vietnam",        lat: 21.0285, lng: 105.8542, date: "TBD" },

  // China
  { slug: "fuqing",             name: "Fuqing",           country: "China",          lat: 25.7235, lng: 119.3849, date: "TBD" },
  { slug: "fuzhou",             name: "Fuzhou",           country: "China",          lat: 26.0745, lng: 119.2965, date: "TBD" },

  // Jordan
  { slug: "amman",              name: "Amman",            country: "Jordan",         lat: 31.9454, lng:  35.9284, date: "TBD" },
  { slug: "petra",              name: "Petra",            country: "Jordan",         lat: 30.3285, lng:  35.4444, date: "TBD" },
];
