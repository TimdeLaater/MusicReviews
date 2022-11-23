import { ApiResponse } from "@music-review-app/data";
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

@Injectable()
export class ApiResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<unknown>> {
    return next
      .handle()
      .pipe(
        map(results => {
            if (results) {
                return {
                    results,
                    info: {
                        version: '1.0',
                        type: results instanceof Array ? 'list' : 'object',
                        count: results instanceof Array ? results.length : 1,
                    }
                }
            } else {
                return {
                    results: undefined,
                    info: {
                        version: '1.0',
                        type: 'none',
                        count: 0,
                    }
                }
            }
        }
      ));
  }
}