import { parseISO, formatDistanceToNow } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time>{formatDistanceToNow(date, { addSuffix: true })}</time>;
}
