import { Injectable } from '@nestjs/common';
import { User } from './users.modele';

@Injectable()
export class UsersService {
    async findAll(): Promise<User[]> {
        return [
            {
                id: 1,
                name: "Mateo"
            }
        ]
    }
}
