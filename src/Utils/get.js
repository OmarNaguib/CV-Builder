export default function get(object, path) {
  return path.reduce((prev, curr, index) => {
    return prev[curr];
  }, object);
}
