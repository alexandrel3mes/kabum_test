import { Request, Response, NextFunction } from 'express';
import errorMessages from '../../error/errorMessages';
import throwCustomError from '../../error/throwCustomError';
import { ValidationError } from 'yup';
import Yup from '../../lib/Yup';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Yup.object().shape({
      zipcode: Yup.string().nullable(),
      address: Yup.string().nullable(),
      number: Yup.string().nullable(),
      complement: Yup.string().nullable(),
      reference: Yup.string().nullable(),
      district: Yup.string().nullable(),
      city: Yup.string().nullable(),
      state: Yup.string().nullable(),
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
