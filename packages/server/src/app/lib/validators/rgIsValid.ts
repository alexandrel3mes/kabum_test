const Validator = require('cpf-rg-validator');

export default function rgIsValid(rg: string): boolean {
  return Validator.rg(rg)
}
