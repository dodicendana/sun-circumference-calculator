import { ApiResponse } from "./ApiResponse";

interface DataPi {
  _id: string;
  pi: string;
}

export type ApiResponsePi = ApiResponse<DataPi>;
