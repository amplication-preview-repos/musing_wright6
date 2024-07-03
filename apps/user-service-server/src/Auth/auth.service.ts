import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../auth/CreateUserDto";
import { LoginUserDto } from "../auth/LoginUserDto";

@Injectable()
export class AuthService {
  constructor() {}
  async CreateUser(args: CreateUserDto): Promise<CreateUserDto> {
    throw new Error("Not implemented");
  }
  async LoginUser(args: LoginUserDto): Promise<LoginUserDto> {
    throw new Error("Not implemented");
  }
}
