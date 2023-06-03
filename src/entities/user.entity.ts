import { Entity,PrimaryGeneratedColumn,Column} from "typeorm"

@Entity ({
    name: 'users'
})
export class User {
    @PrimaryGeneratedColumn('uuid')//el uuid genera un id unico
    id: string
    @Column()
    username: string
    @Column()
    password: string
    @Column()
    email: string
    validatePassword(password: string): boolean {
        return this.password === password;
    }

    getInfoToToken(){
        return {
            id: this.id,
            username: this.username,
            email: this.email
        }
    }
}
