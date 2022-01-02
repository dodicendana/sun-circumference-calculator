const errorCodes: any = require("../config/errorCodes.json");
const successCodes: any = require("../config/successCodes.json");
module.exports = {
  successResponse: (
    res: any,
    statusCode: string,
    successCode: string,
    data: any
  ): void => {
    let successMessage: string;
    if (successCodes[successCode]) {
      successMessage = successCodes[successCode];
    } else {
      successMessage = "[unspesified code]";
    }
    let result: any = {};
    if (data) {
      result = {
        code: successCode,
        message: successMessage,
        data: data,
      };
    } else {
      result = {
        code: successCode,
        message: successMessage,
      };
    }
    global.HELPER.logging("Success : " + successCode + ", " + successMessage);
    res.status(statusCode).json(result);
  },

  errorResponse: (
    res: any,
    statusCode: string,
    errorCode: string,
    log: any
  ): void => {
    let errorMessage: string;
    console.log(typeof log);

    if (errorCodes[errorCode]) {
      errorMessage = errorCodes[errorCode];
    } else {
      errorMessage = "[unspesified error]";
    }

    let result = {
      errorCode: errorCode,
      errorMessage: errorMessage,
      payload: log,
    };

    global.HELPER.logging("Error : " + errorMessage + " " + (log ? log : ""));
    res.status(statusCode).json(result);
  },
};
