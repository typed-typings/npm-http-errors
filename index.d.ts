declare function createError (code: number): createError.HttpError;
declare function createError (message: string): createError.HttpError;
declare function createError (properties: any): createError.HttpError;
declare function createError (code: number, message: string, properties?: any): createError.HttpError;

declare namespace createError {
  export class HttpError extends Error {
    status: number;
    statusCode: number;
    expose: boolean;
    stack: string;
  }

  export class BadRequest extends createError.HttpError {}
  export class Unauthorized extends createError.HttpError {}
  export class PaymentRequired extends createError.HttpError {}
  export class Forbidden extends createError.HttpError {}
  export class NotFound extends createError.HttpError {}
  export class MethodNotAllowed extends createError.HttpError {}
  export class NotAcceptable extends createError.HttpError {}
  export class ProxyAuthenticationRequired extends createError.HttpError {}
  export class RequestTimeout extends createError.HttpError {}
  export class Conflict extends createError.HttpError {}
  export class Gone extends createError.HttpError {}
  export class LengthRequired extends createError.HttpError {}
  export class PreconditionFailed extends createError.HttpError {}
  export class PayloadTooLarge extends createError.HttpError {}
  export class URITooLong extends createError.HttpError {}
  export class UnsupportedMediaType extends createError.HttpError {}
  export class RangeNotSatisfiable extends createError.HttpError {}
  export class ExpectationFailed extends createError.HttpError {}
  export class ImATeapot extends createError.HttpError {}
  export class UnprocessableEntity extends createError.HttpError {}
  export class Locked extends createError.HttpError {}
  export class FailedDependency extends createError.HttpError {}
  export class UnorderedCollection extends createError.HttpError {}
  export class UpgradeRequired extends createError.HttpError {}
  export class PreconditionRequired extends createError.HttpError {}
  export class TooManyRequests extends createError.HttpError {}
  export class RequestHeaderFieldsTooLarge extends createError.HttpError {}
  export class UnavailableForLegalReasons extends createError.HttpError {}
  export class InternalServerError extends createError.HttpError {}
  export class NotImplemented extends createError.HttpError {}
  export class BadGateway extends createError.HttpError {}
  export class ServiceUnavailable extends createError.HttpError {}
  export class GatewayTimeout extends createError.HttpError {}
  export class HTTPVersionNotSupported extends createError.HttpError {}
  export class VariantAlsoNegotiates extends createError.HttpError {}
  export class InsufficientStorage extends createError.HttpError {}
  export class LoopDetected extends createError.HttpError {}
  export class BandwidthLimitExceeded extends createError.HttpError {}
  export class NotExtended extends createError.HttpError {}
  export class NetworkAuthenticationRequired extends createError.HttpError {}
}

export = createError;