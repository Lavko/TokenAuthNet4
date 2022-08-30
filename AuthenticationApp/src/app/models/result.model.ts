export interface Result<TResponse> {
  isSuccess: boolean;
  response: TResponse;
  errors: string[];
}
