import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UserModele } from './users.modele';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async findAll(): Promise<UserModele[]> {
        return this.userModel.find().exec()
    }

    async createUser(user) {

        return await new this.userModel(user).save();
    }

    async findUser(user): Promise<UserModele[]>{
        return await this.userModel.find({...user}).exec();
    }
}
