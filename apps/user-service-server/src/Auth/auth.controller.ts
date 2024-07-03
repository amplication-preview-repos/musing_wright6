import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "../auth/LoginUserDto";
import { CreateUserDto } from "../auth/CreateUserDto";

@swagger.ApiTags("auths")
@common.Controller("auths")
export class AuthController {
  constructor(protected readonly service: AuthService) {}

  @common.Post("/create-user")
  @swagger.ApiOkResponse({
    type: CreateUserDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateUser(
    @common.Body()
    body: LoginUserDto
  ): Promise<CreateUserDto> {
        return this.service.CreateUser(body);
      }

  @common.Post("/login-user")
  @swagger.ApiOkResponse({
    type: LoginUserDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LoginUser(
    @common.Body()
    body: LoginUserDto
  ): Promise<LoginUserDto> {
        return this.service.LoginUser(body);
      }
}
