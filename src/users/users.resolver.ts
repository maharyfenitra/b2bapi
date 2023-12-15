import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserModele } from './users.modele';
import { UserInput } from './input/user.input';
import { UserUpdateInput } from './input/user.update.input';
import { UserSearchInput } from './input/user.search.input';

@Resolver(of => UserModele)
export class UsersResolver {
    constructor(private usersService: UsersService){}

    @Query(returns => [UserModele])
    users(): Promise<UserModele[]>{
        return this.usersService.findAll()
    }

    @Query(returns => [UserModele])
    async findUser(@Args('searchUserData') criteria: UserSearchInput){
        
        return await this.usersService.findUser(criteria);
    }

    @Mutation(returns => UserModele)
    async create(@Args('createUserData') user: UserInput){
        const res = await this.usersService.createUser(user);
        return res; 
    }

    @Mutation(returns => UserModele)
    async update(@Args('createUserData') user: UserUpdateInput){
        return user;
    }
}
