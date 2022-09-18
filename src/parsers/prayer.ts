interface Prayer {
  name: string;
  timestamp: number;
}

interface PrayerData {
  prayers: Prayer[];
  otherTimings: Prayer[];
}

const timingsNames = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];

const parsePrayersRes = (res: PrayerResponse, day: string): PrayerData => {
  const prayersToday = res.data.find((p) => p.date.gregorian.day == day);
  const timings = prayersToday?.timings as Timings;
  const prayers: Prayer[] = [];
  const otherTimings: Prayer[] = [];
  for (const p in timings) {
    const timing = timings[p];
    const date = new Date(timing.split(' ')[0]);
    const timestamp = date.getTime();
    if (timingsNames.includes(p.toLowerCase())) {
      prayers.push({ name: p, timestamp });
    } else {
      otherTimings.push({ name: p, timestamp });
    }
  }
  return { prayers, otherTimings };
};

export default parsePrayersRes;
