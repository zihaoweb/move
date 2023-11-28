import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
interface Response<T> {
  data: T;
}
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept( context: ExecutionContext, next: CallHandler<T>, ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        const res = context.switchToHttp().getResponse()
        res.header('Access-Control-Request-Private-Network:true')
        return {
          data,
          code: 200,
          success: true,
          message: '请求成功',
        };
      }),
    );
  }
}
