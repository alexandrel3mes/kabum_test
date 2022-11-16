import { Request, Response, NextFunction } from 'express';
import errorMessages from '../../error/errorMessages';
import throwCustomError from '../../../utils/throwCustomError';
import { ValidationError } from 'yup';
import Yup from '../../lib/Yup';
import DateFormat from '../../utils/DateFormat';

export default async (req: Request, res: Response, next: NextFunction) => {
  const today = new Date();
  const dateFunctions = DateFormat;
  try {
    const schema = Yup.object().shape({
      name: Yup.string().min(3).max(250).whitespaceValid('Nome').nullable(),
      cpf: Yup.string().nullable(),
      rg: Yup.string().nullable(),
      phone: Yup.string().min(11).nullable(),
      birthday: Yup.date().transform(dateFunctions.parseDateString).max(today),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err: unknown) {
    if (!(err instanceof ValidationError)) {
      return throwCustomError('unknownError', errorMessages.INTERNAL_SERVER_ERROR);
    }

    const [result] = err.inner;

    if (!result.message) {
      return throwCustomError('validationError', result.message);
    }
    return throwCustomError('validationError', result.message);
  }
};
