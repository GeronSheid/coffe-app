import { Injectable } from '@nestjs/common';
import { coffeeList } from 'src/DB';

@Injectable()
export class DatabaseService {
    getAll() {
        return coffeeList
    }
    getById(id: Number) {
        return coffeeList.find(item => item.id === id)
    }
}
