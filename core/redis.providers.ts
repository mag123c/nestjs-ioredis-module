import { Provider } from '@nestjs/common';
import { REDIS_CLIENT, REDIS_OPTIONS } from './redis.constasnts';
import { createRedisClient } from './redis.factory';
import { RedisModuleOptions } from './redis.interface';

export const RedisProvider: Provider = {
    provide: REDIS_CLIENT,
    useFactory: async (options: RedisModuleOptions) => createRedisClient(options),
    inject: [REDIS_OPTIONS],
};
