import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from './core';

@Module({
    imports: [
        RedisModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                type: 'single',
                host: configService.get<string>('REDIS_HOST') ?? 'localhost',
                port: configService.get<number>('REDIS_PORT') ?? 6379,
            }),
            inject: [ConfigService],
        }),
    ],
})
export class AppModule {}
