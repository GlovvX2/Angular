import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './services/users.service';
import { User } from './models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular014-userManager';

  users:User[]=[];

  newName:string = "";
  newEmail:string = "";
  newAge:number = 0;

  newUser:User = 
  {
  id:'',
  name:'',
  email:'',
  age: 0
  }

  constructor(private service: UsersService)
  {
    this.service.getUsers().subscribe(data=>
    {
      this.users = data;
    });

    // service.postUser({
    //   id: 'xxx',
    //   name: 'newbie',
    //   email: 'newbie@gmail.com',
    //   age:20
    // }).subscribe(data=>console.log(data));
  }

  generateId(size:number):string
  {
    let id = ''; 
    const chars:string= 'abcdefghijtklmnuprstuwxyz123456789';
    
    for(let i=0;i<size;i++)
    {
      const index = Math.floor(Math.random()*chars.length);
      id+=chars[index];
    }

    return id;
  }
  
  addUser()
  {
    this.newUser.id = this.generateId(4);
    this.service.postUser(this.newUser).subscribe(data=>
    {
      this.users.push(data);
      this.newUser = 
      {
        id: '',
        email:'',
        name:'',
        age: 0
      };
    });
  }

  deleteUser(id:string)
  {
    this.service.deleteUser(id).subscribe(data=>{
      this.users = this.users.filter(user => user.id != id);
    });
  }
}
