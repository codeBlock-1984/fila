export interface ApiResponseModel {
  requestId?: string;
  message: string;
  status: number;
  data: unknown;
}
