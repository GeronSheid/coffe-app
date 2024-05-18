import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('coffee')
export class DatabaseController {
    constructor(private readonly databaseService: DatabaseService) {}

    @Get('all')
    getAll() {
        return this.databaseService.getAll();
    }

    @Get('/:id')
    getById(@Param('id', ParseIntPipe) id: number) {
        return this.databaseService.getById(id);
    }
}
