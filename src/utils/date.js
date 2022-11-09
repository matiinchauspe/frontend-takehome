import { DateTime } from 'luxon';

const dateFromTimestamp = (date, toLocale = 'en-US', toFormat = 'DDD') => {
  const d = DateTime.fromMillis(date).setLocale(toLocale).toFormat(toFormat);

  return d;
};

export { dateFromTimestamp };
