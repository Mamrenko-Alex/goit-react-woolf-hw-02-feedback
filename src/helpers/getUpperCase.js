export function toUpperCase(text) {
  const splitted = text.split('');
  const first = splitted[0].toUpperCase();
  splitted.splice(0, 1);
  return [first, ...splitted].join('');
}
