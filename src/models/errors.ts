import { Result, ValidationError } from 'express-validator';

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
  constructor(public messages: ErrorMessage[], public stack?: string) {
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

export const getVErrors = (errs: Result<ValidationError>): ErrorMessage[] => {
  const errors: ErrorMessage[] = [];
  for (const err of errs.array()) {
    errors.push({ message: err.msg, code: err.param });
  }
  return errors;
};
