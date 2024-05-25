import { Controller, Get, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('coffee')
export class DatabaseController {
    constructor(private readonly databaseService: DatabaseService) {}

    @Get('all')
    getAllCofees() {
        return this.databaseService.getAllCoffees();
    }

    @Get('/:id')
    getCoffeeById(@Param('id', ParseIntPipe) id: number) {
        return this.databaseService.getCoffeeById(id);
    }
}
