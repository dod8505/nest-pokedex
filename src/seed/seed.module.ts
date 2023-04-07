import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  imports: [HttpModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
