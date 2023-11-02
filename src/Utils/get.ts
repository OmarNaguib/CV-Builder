import { State } from "../types";


export default function get(object: State, path: string[]): string {
  return path.reduce((prev:any, curr) => {
    return prev[curr];
  }, object);
}
