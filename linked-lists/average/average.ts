import { LLStr } from "../common/ll";

/** return average (mean) of list values.
 *
 * Returns 0 for empty list.
 **/

function average(lst: LLStr): number {
  const values = lst.toArray().map((value) => Number(value));
  const invalidNums = values.filter((value) => isNaN(value));

  if (invalidNums.length > 0) throw new Error("Not valid strings for mean");
  if(values.length === 0) return 0;

  const sum = values.reduce((a: number, b: number) => a + b, 0);

  return sum/values.length
}

export { average };
