import { ConfigModule } from '@nestjs/config';

export const configModule = ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    isGlobal: true,
});
