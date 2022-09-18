import { ZodError } from 'zod';

export enum ErrorType {
  MESSAGE,
  REDIRECT,
}

export default abstract class BaseError extends Error {
  public abstract messages: ErrorMessage[];
  public statusCode: number = 500;
  public type: ErrorType = ErrorType.MESSAGE;

  public get msg() {
    return { errors: this.messages, success: false };
  }
}

export class BaseErrorAdapter extends BaseError {
  constructor(
    public messages: ErrorMessage[],
    public stack?: string,
    public statusCode: number = 500
  ) {
    super();
  }
}

export class ManualError extends BaseError {
  constructor(public messages: ErrorMessage[], public statusCode: number) {
    super();
  }
}

export class UnauthorizedError extends BaseError {
  public messages: ErrorMessage[] = [
    { message: 'You are unauthorized to do this action.' },
  ];
  public statusCode: number = 401;
}

export class BadRequest extends BaseError {
  constructor(public messages: ErrorMessage[]) {
    super();
  }

  public statusCode: number = 400;
}

export class NotFound extends BaseError {
  constructor(public messages: ErrorMessage[]) {
    super();
  }

  public statusCode: number = 404;
}

export const zodToError = (e: ZodError, statusCode: number = 400) => {
  const errors: ErrorMessage[] = [];
  for (const i of e.errors) {
    errors.push({ message: i.message, code: i.code });
  }
  return new BaseErrorAdapter(errors, e.stack, statusCode);
};

export const handleError = (err: unknown): BaseError => {
  if (err instanceof BaseError) return err;
  else if (err instanceof ZodError) return zodToError(err, 400);
  else if (err instanceof Error)
    return new BaseErrorAdapter([{ message: err.message }], err.stack);
  return new BaseErrorAdapter([{ message: err as any }]);
};
