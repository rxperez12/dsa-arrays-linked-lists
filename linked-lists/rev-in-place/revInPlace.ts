import { ListFormat } from "typescript";
import { LLStr, LLNodeStr } from "../common/ll";


/** reverseInPlace() reverse list in place.*/

function reverseInPlace(lst: LLStr): void {
  let startIdx = 0
  let endIdx = lst.length - 1

  while(startIdx < lst.length/2){
    const frontVal = lst.getAt(startIdx)
    const backVal = lst.getAt(endIdx)

    lst.setAt(startIdx, backVal)
    lst.setAt(endIdx, frontVal)
    startIdx++
    endIdx--
  }
}


export { reverseInPlace };