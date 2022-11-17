const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const MIN_PASSWORD_LENGTH = 8;
const MIN_NAME_LENGTH = 8;

const validateFields = (name, email, password) => {
  if (name.length < MIN_NAME_LENGTH) return true;
  if (!emailRegex.test(email)) return true;
  if (password.length < MIN_PASSWORD_LENGTH) return true;
};

export const validateLogin = (email, password) => {
  if (!emailRegex.test(email)) return true;
  if (password.length < MIN_PASSWORD_LENGTH) return true;
};

export const validateAdmRegister = (name, email, password, role) => {
  if (role === 'default') return true;
  if (name.length < MIN_NAME_LENGTH) return true;
  if (!emailRegex.test(email)) return true;
  if (password.length < MIN_PASSWORD_LENGTH) return true;
};

export default validateFields;
