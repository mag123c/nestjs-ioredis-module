# NestJS Redis Module

A Redis module for NestJS, providing a simple way to integrate Redis into your NestJS application With ioredis.

## Installation

```
npm install nestjs-redis-module
```

## Usage

```
@Module({
    imports: [
        RedisModule.forRoot({
            type: 'single',
            host: 'localhost',
            port: 6379,
        }),
    ],
})
export class AppModule {}

```

!! Although it supports cluster mode, the creator himself has not yet developed it in a cluster mode environment.

## License

MIT
