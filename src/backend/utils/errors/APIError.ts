export default class APIError extends Error {
  constructor(public message: string, private statusCode: number) {
    super(message);
  }
  getStatusCode() {
    return this.statusCode;
  }
}
