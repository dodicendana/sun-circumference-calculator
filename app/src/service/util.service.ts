import config from "../config/config";

export const logging = (message: string): void => {
  if (config.IS_DEBUG) {
    let time: Date = new Date(Date.now());
    console.log(
      `${time} | ${
        Object.prototype.toString.call(message) === "[object Object]" ||
        Object.prototype.toString.call(message) === "[object Array]"
          ? JSON.stringify(message)
          : message
      }`
    );
  }
};
