import { DynamicModule, Module, Provider } from '@nestjs/common';
import { REDIS_OPTIONS } from './redis.constasnts';
import { RedisProvider } from './redis.providers';
import { RedisModuleAsyncOptions, RedisModuleOptions } from './redis.interface';

@Module({})
export class RedisModule {
    static forRoot(options: RedisModuleOptions): DynamicModule {
        const optionsProvider: Provider = {
            provide: REDIS_OPTIONS,
            useValue: { ...options },
        };

        return {
            module: RedisModule,
            providers: [optionsProvider, RedisProvider],
            exports: [RedisProvider],
        };
    }

    static forRootAsync(options: RedisModuleAsyncOptions): DynamicModule {
        const asyncOptionsProvider: Provider = {
            provide: REDIS_OPTIONS,
            useFactory: options.useFactory,
            inject: options.inject || [],
        };

        return {
            module: RedisModule,
            imports: options.imports || [],
            providers: [asyncOptionsProvider, RedisProvider],
            exports: [RedisProvider],
        };
    }
}
