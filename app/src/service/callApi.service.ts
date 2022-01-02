import axios, { Method } from "axios";
import config from "../config/config";
import { ApiDetails } from "../interfaces/ApiDetails";
import { logging } from "./util.service";

const callApi = async (
  apiDetails: ApiDetails,
  requestBody: any = {}
): Promise<any> => {
  try {
    if (!apiDetails) {
      throw new Error("Invalid ApiDetails");
    }
    logging(
      `callApi | Requesting ${apiDetails.method} ${apiDetails.serviceName} ${apiDetails.operationName}`
    );
    const axiosConfig = {
      method: apiDetails.method as Method,
      url: `${config.API_URL}${apiDetails.serviceName}/${apiDetails.operationName}`,
      data: requestBody,
    };
    let result = await axios(axiosConfig);
    logging(
      `callApi | Response from ${apiDetails.method} ${apiDetails.serviceName} ${
        apiDetails.operationName
      } : ${result.toString()}`
    );
    if (result.data.errorCode) {
      throw new Error(result.data);
    }
    return [result.data, null];
  } catch (err: any) {
    logging(
      `callApi | Error while requesting ${apiDetails.method} ${
        apiDetails.serviceName
      } ${apiDetails.operationName} : ${err.toString()}`
    );
    return [null, err];
  }
};

export default callApi;
