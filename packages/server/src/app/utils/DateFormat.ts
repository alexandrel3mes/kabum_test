/* eslint-disable import/no-duplicates */
import { isDate, parse } from 'date-fns';

class DateFormat {
  public parseDateString(_value: undefined, originalValue: string) {
    const parsedDate = isDate(originalValue)
      ? originalValue
      : parse(originalValue, 'dd/MM/yyyy', new Date());

    return parsedDate;
  }
}

export default new DateFormat();
