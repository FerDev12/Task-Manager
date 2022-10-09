import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export const getFormattedTimeToNow = (date: number) => {
  const fromNow = formatDistanceToNow(date, { locale: es });

  return `Creada hace ${fromNow}`;
};
