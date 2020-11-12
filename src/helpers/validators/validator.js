export const requiredField = value => {
  if (value) return undefined;
  return 'Required field';
}

export const checkMaxLength = maxLength => value => {
  if (value.length > maxLength) {
    return `Max ${maxLength} symbols`;
  }
  return undefined;
}
