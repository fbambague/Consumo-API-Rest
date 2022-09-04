import { User } from "../models/user.model";

export interface CreateUserDTO extends Omit<User,'id'>{

}
