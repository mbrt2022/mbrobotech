export const validatePhoneNumber = (value) => {
  const validChars = /^[0-9]{9}$/;
  const validCharsWithDirection = /^[0-9+]{12}$/;
  if (value !== undefined) {
    if (value.startsWith('+') && validCharsWithDirection.test(value)) {
      return true;
    } else if (validChars.test(value)) {
      return true;
    } else {
      return false;
    }
  }
};
