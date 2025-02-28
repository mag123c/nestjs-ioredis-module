import Redis from 'ioredis';
import { RedisModuleOptions } from './redis.interface';

export async function createRedisClient(options: RedisModuleOptions) {
    const { type, commonOptions } = options;
    if (type === 'cluster') {
        return new Redis.Cluster(options.nodes, commonOptions);
    }
    if (type === 'single') {
        return new Redis(options);
    }
    throw new Error('Invalid Redis options');
}
