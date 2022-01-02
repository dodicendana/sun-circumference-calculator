module.exports = {
  logging: (msg: string): void => {
    if (global.CONFIG.debug) {
      let time: Date = new Date(Date.now());
      console.log(
        `${time} | ${
          Object.prototype.toString.call(msg) == "[object Object]" ||
          Object.prototype.toString.call(msg) == "[object Array]"
            ? JSON.stringify(msg)
            : msg
        }`
      );
    }
  },
  calculatePi: (digits: number): string => {
    let numberOfDigits: bigint = BigInt(digits);
    let multiplier: bigint = 1n;
    let serie: bigint = 3n * 10n ** numberOfDigits;
    let pi: bigint = serie;
    while (serie > 0) {
      serie = (serie * multiplier) / ((multiplier + 1n) * 4n);
      pi += serie / (multiplier + 2n);
      multiplier += 2n;
    }

    let returnPi = pi.toString();
    if (numberOfDigits) {
      let substringPoint: number = returnPi.length - digits;
      returnPi =
        returnPi.substring(0, substringPoint) +
        "." +
        returnPi.substring(substringPoint, returnPi.length);
    }
    return returnPi;
  },
};
