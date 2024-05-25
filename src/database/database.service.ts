import { Injectable } from '@nestjs/common';
import { coffeeList, usersList } from 'src/DB';

@Injectable()
export class DatabaseService {
     async getAllCoffees() {
        return await coffeeList
    }
     async getCoffeeById(id: Number) {
        return await coffeeList.find(item => item.id === id)
    }
     async getAllUsers() {
        return await usersList
    }
     async getUserById(id: Number) {
        return await usersList.find(user => user.id === id)
    }
     async getUserByEmail(email: String) {
        return await usersList.find(user => user.email === email)
     }
}
