import { DynamicModule, Module, Provider } from '@nestjs/common';
import { REDIS_OPTIONS } from './redis.constasnts';
import { RedisProvider } from './redis.providers';
import { RedisModuleOptions } from './redis.interface';

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

    static forRootAsync(optionsProvider: Provider): DynamicModule {
        return {
            module: RedisModule,
            providers: [optionsProvider, RedisProvider],
            exports: [RedisProvider],
        };
    }
}
