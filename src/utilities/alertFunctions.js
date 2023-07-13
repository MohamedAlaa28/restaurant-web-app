export const alertNameFunction = (e) => {
  if (e.target.value.trim() === "") {
    return <span>name required</span>;
  } else if (/\d/.test(e.target.value)) {
    return <span>the name can't have a number</span>;
  }
};

export const alertDateFunction = () => {
  return <span>please enter a future valid date</span>;
};

export const alertEmailFunction = (e) => {
  return <span>please enter a valid Email</span>;
};

export const alertPhoneNumberFunction = (e) => {
  return <span>please enter a valid phone number</span>;
};
