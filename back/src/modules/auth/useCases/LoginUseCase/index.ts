import { UserRepository } from "../../../../repositories/user/UserRepository";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase"; 

const userRepository = new UserRepository();
const loginUseCase = new LoginUseCase(userRepository);
const loginControler = new LoginController(loginUseCase);

export { loginUseCase, loginControler };