export interface ILogger {
  debug(context: string, message: string): void;
  log(context: string, message: string): void;
  error(context: string, message: string, trace: string): void;
  warn(context: string, message: string): void;
  verboose(context: string, message: string): void;
}
