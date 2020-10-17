export default function constrainVal(val, min, max) {
  if (val >= max) return max;
  if (val <= min) return min;
  return val;
}
