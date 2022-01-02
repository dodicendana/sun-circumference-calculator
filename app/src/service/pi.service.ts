import { apiDetails } from "../config/constant";
import callApi from "./callApi.service";
import BigNumber from "bignumber.js";
import { sunDiameter } from "../config/constant";
import { PiDetails } from "../interfaces/PiDetails";
import { ApiResponsePi } from "../interfaces/ApiResponsePi";
import { logging } from "./util.service";

export const generateNewPi = async (): Promise<any> => {
  try {
    logging(`generateNewPi | Trying to run`);
    const calculateLatestResult = await callApi(apiDetails.calculateLatest);
    if (!calculateLatestResult[0] && calculateLatestResult[1]) {
      throw new Error(calculateLatestResult[1].toString());
    }
    const calculateLatestSuccessResult = calculateLatestResult[0] as ApiResponsePi;
    logging(
      `generateNewPi | Get Response : ${calculateLatestSuccessResult.toString()}`
    );
    return getPiDetails(calculateLatestSuccessResult);
  } catch (err: any) {
    logging(`generateNewPi | Error : ${err.toString()}`);
    return err;
  }
};
export const resetPi = async (): Promise<any> => {
  try {
    logging(`resetPi | Trying to run`);
    const resetPiResult = await callApi(apiDetails.resetPi);
    if (!resetPiResult[0] && resetPiResult[1]) {
      throw new Error(resetPiResult[1].toString());
    }
    const resetPiSuccessResult = resetPiResult[0] as ApiResponsePi;
    logging(`resetPi | Get Response : ${resetPiSuccessResult.toString()}`);
    return getPiDetails(resetPiSuccessResult);
  } catch (err: any) {
    logging(`resetPi | Error : ${err.toString()}`);
    return err;
  }
};

export const getPiDetails = (apiResponsePi: ApiResponsePi): PiDetails => {
  const piDetails: PiDetails = {
    pi: apiResponsePi.data.pi,
    sunCircumference: calculateSunCircumference(apiResponsePi.data.pi),
  };
  return piDetails;
};

export const calculateSunCircumference = (pi: string): string => {
  const currentPi: BigNumber = new BigNumber(pi);
  // Formula = 2πr or πd
  let sunCircumference: BigNumber = currentPi.times(sunDiameter);
  return sunCircumference.toString();
};
