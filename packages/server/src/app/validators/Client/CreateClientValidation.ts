import { Request, Response, NextFunction } from 'express';
import errorMessages from '../../error/errorMessages';
import throwCustomError from '../../error/throwCustomError';
import { ValidationError } from 'yup';
import Yup from '../../lib/Yup';
import DateFormat from '../../utils/DateFormat';

export default async (req: Request, res: Response, next: NextFunction) => {
  const today = new Date();
  const dateFunctions = DateFormat;
  try {
    const schema = Yup.object().shape({
      name: Yup.string().min(3).max(250).whitespaceValid('Nome').required(),
      cpf: Yup.string().cpf().required(),
      rg: Yup.string().rg().required(),
      phone: Yup.string().phone().required(),
      birthday: Yup.date().transform(dateFunctions.parseDateString).max(today),
      addresses: Yup.array().of(
        Yup.object().shape({
          zipcode: Yup.string().cep().required(),
          address: Yup.string().required(),
          number: Yup.string().required(),
          complement: Yup.string().nullable(),
          reference: Yup.string().nullable(),
          district: Yup.string().required(),
          city: Yup.string().required(),
          state: Yup.string().required(),
        })
      ).required(),
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
