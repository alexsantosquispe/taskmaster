import { differenceInSeconds, formatDistanceToNowStrict } from 'date-fns';

export const formatDateToDayMonth = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short'
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

export const formatToFriendlyDate = (date: string): string => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) return 'Invalid date';

  const diffSeconds = differenceInSeconds(new Date(), parsedDate);

  if (diffSeconds < 60) return 'just now';

  return `${formatDistanceToNowStrict(parsedDate)} ago`;
};
