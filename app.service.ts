import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { InjectRedis } from './core';

@Injectable()
export class AppService {
    constructor(@InjectRedis() private readonly client: Redis) {}
}
