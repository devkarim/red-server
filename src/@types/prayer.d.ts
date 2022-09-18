interface PrayerResponse {
  code: number;
  status: string;
  data: PrayerData[];
}

interface PrayerData {
  timings: Timings;
  date: PrayerDate;
  meta: Meta;
}

interface Timings {
  [key: string]: string;
}

interface PrayerDate {
  readable: string;
  timestamp: string;
  gregorian: Gregorian;
  hijri: Hijri;
}

interface Gregorian {
  date: string;
  format: string;
  day: string;
  weekday: Weekday;
  month: Month;
  year: string;
}

interface Weekday {
  en: string;
}

interface Month {
  number: number;
  en: string;
}

interface Hijri {
  date: string;
  format: string;
  day: string;
  weekday: HijriWeekday;
  month: HijriMonth;
  year: string;
}

interface HijriWeekday {
  en: string;
  ar: string;
}

interface HijriMonth {
  number: number;
  en: string;
  ar: string;
}

interface Meta {
  latitude: number;
  longitude: number;
  timezone: string;
  method: Method;
  latitudeAdjustmentMethod: string;
  midnightMode: string;
  school: string;
  offset: Offset;
}

interface Method {
  id: number;
  name: string;
  params: Params;
  location: Location;
}

interface Params {
  Fajr: number;
  Isha: number;
}

interface Location {
  latitude: number;
  longitude: number;
}

interface Offset {
  Imsak: number;
  Fajr: number;
  Sunrise: number;
  Dhuhr: number;
  Asr: number;
  Maghrib: number;
  Sunset: number;
  Isha: number;
  Midnight: number;
}
