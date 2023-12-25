import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
@Injectable()
export class DbService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
          // url: "postgresql://db_service:z1x2c3112233@Tracker-Pro-Db:5432/trackerdb?schema=public",
        },
      },
      errorFormat: 'pretty',
    });
  }
}
