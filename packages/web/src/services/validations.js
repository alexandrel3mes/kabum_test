import cpfIsValid from './cpfIsValid';
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const MIN_PASSWORD_LENGTH = 8;
const MIN_NAME_LENGTH = 8;
const phoneRegex = new RegExp('(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)')

const validateFields = (name, email, password) => {
  if (name.length < MIN_NAME_LENGTH) return true;
  if (!emailRegex.test(email)) return true;
  if (password.length < MIN_PASSWORD_LENGTH) return true;
};

export const validateLogin = (email, password) => {
  if (!emailRegex.test(email)) return true;
  if (password.length < MIN_PASSWORD_LENGTH) return true;
};

export const validateEdit = (cpf, rg, phone) => {
  if (!cpf && !rg && !phone) return true
  if (cpf) return !cpfIsValid(cpf)
  if (rg) return rg.length >= 7 ? false : true
  if (phone) return !phoneRegex.test(phone)
};

export default validateFields;
