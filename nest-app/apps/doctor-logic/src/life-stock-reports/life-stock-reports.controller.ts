import { Controller, Logger, Post, Query, UseGuards } from '@nestjs/common';
import { IReports } from './IReports';
import { LifeStockReportsService } from './life-stock-reports.service';
import { TPReport } from '@prisma/client';
import { CreateCheckUpRequestDto } from 'apps/farmer-logic/src/check-up-request/create-check-up-request.dto';
import { CreateLifeStockReportDto } from './create-life-stock-report.dto';
import { AuthGuard } from '@app/sharedlogic/auth/auth.guard';

@Controller('life-stock-reports')
@UseGuards(AuthGuard)
export class LifeStockReportsController implements IReports {
  logger: Logger;
  /**
   *
   */
  constructor(private readonly lifestockreport: LifeStockReportsService) {}
  @Post('CreateReport')
  async CreateReport(
    @Query() data: CreateLifeStockReportDto
  ): Promise<void | TPReport> {
    return this.lifestockreport.CreateReport(data);
  }
  @Post('UpdateTPQrCodeId')
  async UpdateTPQrCodeId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPReport> {
    return this.lifestockreport.UpdateTPQrCodeId(data);
  }
  @Post('UpdateTPDoctorId')
  async UpdateTPDoctorId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPReport> {
    return this.lifestockreport.UpdateTPDoctorId(data);
  }
  @Post('UpdateTPLifeStock')
  async UpdateTPLifeStock(
    @Query() data: Map<String, any>,
  ): Promise<void | TPReport> {
    return this.lifestockreport.UpdateTPLifeStock(data);
  }
  @Post('UpdateTPDoctor')
  async UpdateTPDoctor(
    @Query() data: Map<String, any>,
  ): Promise<void | TPReport> {
    return this.lifestockreport.UpdateTPDoctor(data);
  }
  @Post('Updateqrcode')
  async Updateqrcode(
    @Query() data: Map<String, any>,
  ): Promise<void | TPReport> {
    return this.lifestockreport.Updateqrcode(data);
  }
  @Post('FindByid')
  async FindByid(@Query() data: Map<String, any>): Promise<void | TPReport> {
    return this.lifestockreport.FindByid(data);
  }
  @Post('FindByTPQrCodeId')
  async FindByTPQrCodeId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPReport> {
    return this.lifestockreport.FindByTPQrCodeId(data);
  }
  @Post('FindBycreatedAt')
  async FindBycreatedAt(
    @Query() data: Map<String, any>,
  ): Promise<void | TPReport> {
    return this.lifestockreport.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  async FindByupdatedAt(
    @Query() data: Map<String, any>,
  ): Promise<void | TPReport> {
    return this.lifestockreport.FindByupdatedAt(data);
  }
  @Post('FindByTPDoctorId')
  async FindByTPDoctorId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPReport> {
    return this.lifestockreport.FindByTPDoctorId(data);
  }
  @Post('FindByTPLifeStock')
  async FindByTPLifeStock(
    @Query() data: Map<String, any>,
  ): Promise<void | TPReport> {
    return this.lifestockreport.FindByTPLifeStock(data);
  }
  @Post('FindByTPDoctor')
  async FindByTPDoctor(
    @Query() data: Map<String, any>,
  ): Promise<void | TPReport> {
    return this.lifestockreport.FindByTPDoctor(data);
  }
  @Post('FindByqrcode')
  async FindByqrcode(
    @Query() data: Map<String, any>,
  ): Promise<void | TPReport> {
    return this.lifestockreport.FindByqrcode(data);
  }
  /**
   *
   */
}
