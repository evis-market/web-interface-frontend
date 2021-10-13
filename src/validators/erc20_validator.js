export default function erc20Validator(val) {
  if (!val) return true;
  return !!val.match(/^0x[a-fA-F0-9]{40}$/gi);
}
