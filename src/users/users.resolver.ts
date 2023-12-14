import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.modele';

@Resolver(of => User)
export class UsersResolver {
    constructor(private usersService: UsersService){}

    @Query(returns => [User])
    users(): Promise<User[]>{
        return this.usersService.findAll()
    }

    @Query(returns => User)
    findUser(){
        return this.usersService.findAll()[0]
    }
}
