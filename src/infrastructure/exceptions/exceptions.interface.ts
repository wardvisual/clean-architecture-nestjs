export interface IFormatExceptionMessage {
  message: string;
  errorCode: number;
}

export interface IException {
  badRequestException(data: IFormatExceptionMessage): void;
  internalServerException(data: IFormatExceptionMessage): void;
  forbiddenException(data: IFormatExceptionMessage): void;
  unauthorizedException(data: IFormatExceptionMessage): void;
}
