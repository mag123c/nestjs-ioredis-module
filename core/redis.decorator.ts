import { Inject } from '@nestjs/common';
import { REDIS_CLIENT } from './redis.constasnts';

export const InjectRedis = () => Inject(REDIS_CLIENT);
