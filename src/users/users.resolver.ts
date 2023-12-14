import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserModele } from './users.modele';
import { UserInput } from './input/user.input';

@Resolver(of => UserModele)
export class UsersResolver {
    constructor(private usersService: UsersService){}

    @Query(returns => [UserModele])
    users(): Promise<UserModele[]>{
        return this.usersService.findAll()
    }

    @Query(returns => UserModele)
    findUser(){
        return this.usersService.findAll()[0]
    }

    @Mutation(returns => UserModele)
    async create(@Args('createUserData') user: UserInput){
        const res = await this.usersService.createUser(user);
        return res; 
    }
}
