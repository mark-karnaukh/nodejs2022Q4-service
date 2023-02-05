import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TracksService } from './tracks.service';

@Controller('track')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Get()
  findAll() {
    return 'find all tracks';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `find one track by id ${id}`;
  }

  @Post()
  create(@Body() createTrackDto: unknown) {
    return `create new track: ${JSON.stringify(createTrackDto)}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTrackDto: unknown) {
    return `update track ${id}: ${JSON.stringify(updateTrackDto)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `remove track ${id}`;
  }
}
