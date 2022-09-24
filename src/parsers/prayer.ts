interface Prayer {
  name: string;
  timestamp: number;
}

interface PrayerData {
  prayers: Prayer[];
  otherTimings: Prayer[];
}

interface AllPrayerData {
  prayersToday: PrayerData;
  prayersTomorrow: PrayerData;
}

const timingsNames = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];

const parseTimings = (timings: Timings): PrayerData => {
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

const parsePrayersRes = (res: PrayerResponse, day: string): AllPrayerData => {
  const prayersTodayIndex = res.data.findIndex(
    (p) => p.date.gregorian.day == day
  );
  const prayersToday = res.data[prayersTodayIndex];
  const prayersTomorrowData = res.data[prayersTodayIndex + 1];
  const timings = prayersToday?.timings as Timings;
  const timingsTomorrow = prayersTomorrowData?.timings as Timings;
  return {
    prayersToday: parseTimings(timings),
    prayersTomorrow: parseTimings(timingsTomorrow),
  };
};

export default parsePrayersRes;
