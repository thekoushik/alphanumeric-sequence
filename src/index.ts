/**
 * Options for generating sequence
 */
export interface Options {
  /**
   * Length must be at least 2
   */
  length: number;
  /**
   * Increase length when end of sequence is reached
   */
  autoIncreaseLength?: boolean;
}

/**
 * Calculate next alphanumeric string in sequence
 * 
 * @param lastVal calculate based on last value or start from A0..
 * @param options length or autoincrease
 * @returns 
 */
export function computeNext(lastVal: string | null, options: Options = {
  length: 2,
  autoIncreaseLength: false
}): string | null {
  const length = options.length || 2;
  let last = `${lastVal || ''}`;
  let result = 'A'.padEnd(length, '0');
  if (last.length >= length) {
    let [alpha, digits] = last.split(/(?<=\D)(?=\d)/);
    const lastChar = `${alpha || ''}`.charCodeAt(alpha.length - 1);
    const secLastChar = `${alpha || ''}`.charCodeAt(alpha.length - 2);
    if (digits) {
      const newNum = Number(digits) + 1;
      const newNumStr = `${newNum}`.padStart(digits.length, '0');
      if (digits.length < newNumStr.length) {
        //REACHED all 9's, increase the last alpha char and make rest zeros
        if (lastChar === 122) {// z
          if (secLastChar === 122) {// z
            result = `${alpha.substring(0, alpha.length - 2)}Aa`.padEnd(length, '0');
          } else if (secLastChar < 90) { // < Z
            result = `${alpha.substring(0, alpha.length - 2)}${String.fromCharCode(secLastChar + 1)}a`.padEnd(length, '0');
          } else if (digits.length === 1) {
            result = `${alpha}A`;
          } else
            result = `${alpha}A${'0'.padStart(digits.length - 1, '0')}`;
        } else if (lastChar === 90) { // Z
          result = `${alpha.substring(0, alpha.length - 1)}a${'0'.padStart(digits.length, '0')}`
        } else {
          result = `${alpha.substring(0, alpha.length - 1)}${String.fromCharCode(lastChar + 1)}${'0'.padStart(digits.length, '0')}`
        }
      } else {
        result = `${alpha}${newNumStr}`;
      }
    } else {
      if (lastChar === 122) {// z
        // no digits to increase
        if (secLastChar === 122) {// z
          result = `${alpha.substring(0, alpha.length - 2)}Aa`.padEnd(length, '0');
        } else if (secLastChar < 90) { // < Z
          result = `${alpha.substring(0, alpha.length - 2)}${String.fromCharCode(secLastChar + 1)}a`.padEnd(length, '0');
        } else if (options.autoIncreaseLength) {
          //start from beginning by increasing length
          result = 'A'.padEnd(alpha.length + 1, '0');
        } else {
          //reached end
          return null;
        }
      } else if (lastChar === 90) { // Z
        result = `${alpha.substring(0, alpha.length - 1)}a`;
      } else {
        // increase last char
        result = `${alpha.substring(0, alpha.length - 1)}${String.fromCharCode(lastChar + 1)}`;
      }
    }
  }
  return result;
}