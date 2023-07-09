export const validateNameFunction = (e) => {
  const isValid = e.target.value.trim() !== "" && !/\d/.test(e.target.value);
  return isValid;
};

export const validateDateFunction = (e) => {
  const currentDate = new Date();
  const selectedDate = new Date(e.target.value);
  const isValid = selectedDate > currentDate;
  return isValid;
};

export const validateNumberFunction = (e) => {
  const isValid = e.target.value >= 1 && e.target.value <= 25;
  return isValid;
};
