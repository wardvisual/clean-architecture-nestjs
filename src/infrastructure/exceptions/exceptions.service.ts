import { ForbiddenException } from '@nestjs/common';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { IException, IFormatExceptionMessage } from './exceptions.interface';

@Injectable()
export class ExceptionsService implements IException {
  badRequestException(data: IFormatExceptionMessage): void {
    throw new BadRequestException(data);
  }
  internalServerException(data: IFormatExceptionMessage): void {
    throw new InternalServerErrorException(data);
  }
  forbiddenException(data: IFormatExceptionMessage): void {
    throw new ForbiddenException(data);
  }
  unauthorizedException(data: IFormatExceptionMessage): void {
    throw new UnauthorizedException(data);
  }
}
