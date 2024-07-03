import * as graphql from "@nestjs/graphql";
import { CreateUserDto } from "../auth/CreateUserDto";
import { LoginUserDto } from "../auth/LoginUserDto";
import { AuthService } from "./auth.service";

export class AuthResolver {
  constructor(protected readonly service: AuthService) {}

  @graphql.Mutation(() => CreateUserDto)
  async CreateUser(
    @graphql.Args()
    args: CreateUserDto
  ): Promise<CreateUserDto> {
    return this.service.CreateUser(args);
  }

  @graphql.Mutation(() => LoginUserDto)
  async LoginUser(
    @graphql.Args()
    args: LoginUserDto
  ): Promise<LoginUserDto> {
    return this.service.LoginUser(args);
  }
}
