/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
//  import { ApiResponseInterceptor } from './app/api-response.interceptor';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const globalPrefix = 'data-api';
  // app.setGlobalPrefix(globalPrefix);

  //  app.useGlobalInterceptors(new ApiResponseInterceptor());

  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', "append,delete,entries,foreach,get,has,keys,set,values,Authorization,content-type");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });

  const port = process.env.PORT || 3333;
  await app.listen(port);

  Logger.log(
    `🚀 Data API is running on: ${await app.getUrl()}`
  );
}

bootstrap();
