export default function updateObjectUsingPath(object, path, value) {
  path.reduce((prev, curr, index, array) => {
    if (index === array.length - 1) prev[curr] = value;
    return prev[curr];
  }, object);
  return object;
}
