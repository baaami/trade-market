import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    // private readonly userService: UserService
) {}
  @Get()
  getOne() {
    // return this.userService.findOne();
    return "hi"
  }
}
