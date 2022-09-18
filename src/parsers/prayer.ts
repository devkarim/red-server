interface Prayer {
  name: string;
  timestamp: number;
}

const parsePrayersRes = (res: PrayerResponse, day: string): Prayer[] => {
  const prayersToday = res.data.filter((p) => p.date.gregorian.day == day);
  return []; // TODO: calculate prayers today
};

export default parsePrayersRes;
