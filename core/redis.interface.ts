import { ClusterNode, ClusterOptions, RedisOptions } from 'ioredis';

export interface RedisSingleOptions {
    type: 'single';
    host: string;
    port: number;
    commonOptions?: RedisOptions;
}

export interface RedisClusterOptions {
    type: 'cluster';
    nodes: ClusterNode[];
    commonOptions: ClusterOptions;
}

export type RedisModuleOptions = RedisSingleOptions | RedisClusterOptions;

export interface RedisModuleAsyncOptions {
    imports: any[];
    inject: any[];
    useFactory: (...args: any[]) => RedisModuleOptions | Promise<RedisModuleOptions>;
}
