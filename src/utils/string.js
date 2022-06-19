export function isEmpty(string) {
  if (string === '' || string === undefined || string === null) {
    return true;
  }

  return false;
}

export function isString(string) {
  return typeof string === 'string';
}
