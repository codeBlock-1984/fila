/* eslint-disable @typescript-eslint/no-explicit-any */

export interface PagedResponse { 
  total: number;
  current: number;
  page: number;
  limit: number;
  records: Array<any>
}
