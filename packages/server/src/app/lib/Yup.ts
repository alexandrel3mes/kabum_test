/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
import * as Yup from 'yup';
import cpfIsValid from './validators/cpfIsValid';
import whitespaceValid from './validators/whitespaceValid';

Yup.setLocale({
  mixed: {
    required: '${path} é um campo obrigatório.',
    oneOf: '${path} deve ser um dos seguintes valores: ${values}.',
  },
  string: {
    length: '${path} deve ser exatamente ${length} caracteres.',
    email: 'Preencha um e-mail válido',
    min: '${path} tem um valor muito curto (mínimo ${min} caracteres).',
    max: '${path} tem um valor muito longo (máximo ${max} caracteres).',
  },
  number: {
    integer: '${path} deve ser um número inteiro.',
    min: '${path} tem o valor inválido (deve ser maior ou igual a ${min}).',
    max: '${path} tem o valor inválido (deve ser menor ou igual a ${max}).',
    positive: '${path} deve ser um número positivo.',
  },
});

Yup.addMethod<Yup.StringSchema>(
  Yup.string,
  'whitespaceValid',
  function (field: string) {
    return this.test(
      'whitespaceValid',
      `${field} não pode ser apenas espaços em branco.`,
      (value: string | undefined) => {
        if (!value) return true;
        return whitespaceValid(value);
      }
    );
  }
);

Yup.addMethod<Yup.StringSchema>(Yup.string, 'cpf', function () {
  return this.test(
    'cpfIsValid',
    `CPF informado inválido.`,
    (cpf: string | undefined) => {
      if (!cpf) return true;
      return cpfIsValid(cpf);
    }
  );
});

declare module 'yup' {
  interface StringSchema {
    whitespaceValid(field: string): StringSchema;
    cpf(): StringSchema;
    cnpj(): StringSchema;
    cnpjCpf(): StringSchema;
    plate(): StringSchema;
  }
}

export default Yup;
