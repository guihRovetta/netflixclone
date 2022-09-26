import {format} from 'date-fns';
import ptBRLocale from 'date-fns/locale/pt-BR';

export const formatDate = (
  inputDate: string | Date,
  dateFormat = 'dd/MM/yyyy',
) => format(new Date(inputDate), dateFormat, {locale: ptBRLocale});
