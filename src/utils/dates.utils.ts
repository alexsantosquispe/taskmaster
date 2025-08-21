import { differenceInSeconds, formatDistanceToNowStrict } from 'date-fns';

export const formatDateToDayMonth = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short'
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

export const formatStringDateToUTCDate = (date: string): Date | null => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) return null;

  // Create a new Date using UTC components to avoid timezone offset issues
  const formattedDate = new Date(
    parsedDate.getUTCFullYear(),
    parsedDate.getUTCMonth(),
    parsedDate.getUTCDate(),
    parsedDate.getUTCHours(),
    parsedDate.getUTCMinutes(),
    parsedDate.getUTCSeconds(),
    parsedDate.getUTCMilliseconds()
  );

  return formattedDate;
};

export const formatToFriendlyDate = (date: string): string => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) return 'Invalid date';

  const diffSeconds = differenceInSeconds(new Date(), parsedDate);

  if (diffSeconds < 60) return 'just now';

  return `${formatDistanceToNowStrict(parsedDate)} ago`;
};
