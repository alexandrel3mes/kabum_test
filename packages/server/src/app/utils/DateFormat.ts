/* eslint-disable import/no-duplicates */
import { format, isDate, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

class DateFormat {
  public clientFormat(date: Date | string): string {
    if (typeof date === 'string') date = new Date(date);
    return format(date, "dd/MM/yyyy 'às' HH:mm", {
      locale: ptBR,
    });
  }

  public clientFormatNoHours(date: Date | string): string {
    if (typeof date === 'string') date = new Date(date);
    date.setHours(date.getHours() + 3);

    return format(date, 'dd/MM/yyyy', {
      locale: ptBR,
    });
  }

  public parseDateString(_value: undefined, originalValue: string) {
    const parsedDate = isDate(originalValue)
      ? originalValue
      : parse(originalValue, 'dd/MM/yyyy', new Date());

    return parsedDate;
  }
}

export default new DateFormat();
