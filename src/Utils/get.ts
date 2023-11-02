export default function get(object: object, path: string[]): string {
  return path.reduce((prev, curr) => {
    return prev[curr];
  }, object);
}
