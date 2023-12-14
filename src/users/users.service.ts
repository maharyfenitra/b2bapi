import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UserModele } from './users.modele';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async findAll(): Promise<UserModele[]> {
        return [
            {
                id: "",
                firstName: "Mateo",
                lastName:" kkk",
                password: ""
            }
        ]
    }

    async createUser(user) {

        const userC = await new this.userModel(user).save();
        
        return userC
    }
}
