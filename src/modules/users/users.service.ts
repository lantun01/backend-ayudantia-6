import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm"


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>){}




  async create(createUserDto: CreateUserDto) {
    const user= this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
    
  }

  async findAll() {
    return 'hola'
    //return await this.userRepository.find();
  }

  async findOne(username: string) {
    const user= this.userRepository.findOne(
      {
        where:{
        username: username}
      }
    );
    if(user){
      return user;
    }
    return null;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
