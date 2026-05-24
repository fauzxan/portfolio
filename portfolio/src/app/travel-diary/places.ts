export type Place = {
  slug: string;
  name: string;
  country?: string;
  lat: number;
  lng: number;
  date: string;
};

export const places: Place[] = [
  { slug: 'singapore',  name: 'Singapore',  lat:  1.3521, lng: 103.8198, date: 'TBD' },
  { slug: 'chennai',    name: 'Chennai',    lat: 13.0827, lng:  80.2707, date: 'TBD' },
  { slug: 'mumbai',     name: 'Mumbai',     lat: 19.0760, lng:  72.8777, date: 'TBD' },
  { slug: 'manila',     name: 'Manila',     lat: 14.5995, lng: 120.9842, date: 'TBD' },
  { slug: 'amman',      name: 'Amman',      lat: 31.9454, lng:  35.9284, date: 'TBD' },
  { slug: 'dubai',      name: 'Dubai',      lat: 25.2048, lng:  55.2708, date: 'TBD' },
  { slug: 'mekkah',     name: 'Mekkah',     lat: 21.4225, lng:  39.8262, date: 'TBD' },
  { slug: 'bratislava', name: 'Bratislava', lat: 48.1486, lng:  17.1077, date: 'TBD' },
  { slug: 'prague',     name: 'Prague',     lat: 50.0755, lng:  14.4378, date: 'TBD' },
  { slug: 'istanbul',   name: 'Istanbul',   lat: 41.0082, lng:  28.9784, date: 'TBD' },
  { slug: 'paris',      name: 'Paris',      lat: 48.8566, lng:   2.3522, date: 'TBD' },
  { slug: 'lucerne',    name: 'Lucerne',    lat: 47.0502, lng:   8.3093, date: 'TBD' },
  { slug: 'rome',       name: 'Rome',       lat: 41.9028, lng:  12.4964, date: 'TBD' },
  { slug: 'venice',     name: 'Venice',     lat: 45.4408, lng:  12.3155, date: 'TBD' },
  { slug: 'titisee',    name: 'Titisee',    country: 'Germany', lat: 47.9075, lng: 8.1539, date: 'TBD' },
];
