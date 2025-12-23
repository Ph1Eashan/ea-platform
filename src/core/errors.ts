export class ConfigValidationError extends Error {
  public readonly details: unknown;

  constructor(message: string, details: unknown) {
    super(message);
    this.name = "ConfigValidationError";
    this.details = details;
  }
}
