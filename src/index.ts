/**
 * Alphanumeric sequence string generator
 */
export class Generator {
  private lastVal = '';
  private length;
  constructor(length:number) {
    if (length<2) throw new Error("length must be at least 2");
    this.length = length;
  }
  /**
   * Reset the generator
   * @param val Inital value
   */
  reset(val?: string):void {
    this.lastVal = val || '';
  }
  /**
   * Peek the next value
   * @returns string
   */
  peek(): string {
    let last = `${this.lastVal}`;
    let result = `A${'0'.padStart(this.length, '0')}`;
    if (last.length>=this.length) {
      let [ alpha, digits ] = last.split(/(?<=\D)(?=\d)/);
      if (digits) {
        const newNum = Number(digits) + 1;
        const newNumStr = `${newNum}`.padStart(digits.length, '0');
        if (digits.length < newNumStr.length) {
          //REACHED all 9's, increase the last alpha char and make rest zeros
          const lastChar = alpha.charCodeAt(alpha.length - 1);
          if (lastChar === 122) {// z
            if (digits.length === 1)
              result = `${alpha}A`;
            else
              result = `${alpha}A${'0'.padStart(digits.length-1, '0')}`;
          } else if (lastChar === 90) { // Z
            result = `${alpha.substring(0, alpha.length -1)}a${'0'.padStart(digits.length, '0')}`
          } else {
            result = `${alpha.substring(0, alpha.length -1)}${String.fromCharCode(lastChar+1)}${'0'.padStart(digits.length, '0')}`
          }
        } else {
          result = `${alpha}${newNumStr}`;
        }
      } else {
        const lastChar = alpha.charCodeAt(alpha.length - 1);
        if (lastChar === 122) {// z
          // no digits to increase, so add zero to the right
          result = `${alpha}0`;
        } else if (lastChar === 90) { // Z
          result = `${alpha.substring(0, alpha.length -1)}a`;
        } else {
          // increase last char
          result = `${alpha.substring(0, alpha.length -1)}${String.fromCharCode(lastChar+1)}`;
        }
      }
    }
    return result;
  }
  /**
   * Get the next value
   * @returns string
   */
  getNext():string {
    const result = this.peek();
    this.lastVal = result;
    return result;
  }
}