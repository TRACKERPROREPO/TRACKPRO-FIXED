import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { DbService } from './db/db.service';
import { CacheService } from './cache/cache.service';
import { NotificationsModule } from './notifications/notifications.module';
import { NotificationsService } from './notifications/notifications.service';

@Module({
  providers: [AuthService, DbService, CacheService, NotificationsService],
  exports: [],
  imports: [NotificationsModule],
})
export class SharedlogicModule { }
