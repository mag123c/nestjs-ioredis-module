import { Module } from '@nestjs/common';
import { RedisModule } from './core/redis.module';

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
