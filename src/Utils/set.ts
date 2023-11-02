/* eslint-disable @typescript-eslint/no-explicit-any */
import { State } from "../types";

export default function updateObjectUsingPath(
  object: State,
  path: string[],
  value: string
): State {
  path.reduce((prev: any, curr, index, array) => {
    if (index === array.length - 1) prev[curr] = value;
    return prev[curr];
  }, object);
  return object;
}
