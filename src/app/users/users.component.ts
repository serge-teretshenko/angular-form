import { Component, OnInit} from '@angular/core';
import { ConfigService } from '../config/config.service';
import {User} from './user';
   
@Component({
    selector: 'users',
    template: './users.component.html',
    providers: [ConfigService]
})
export class UsersComponent implements OnInit { 
     
    user: User;
 
    constructor(private http: ConfigService){}
      
    ngOnInit(){
          
        this.http.get('assets/user.json').subscribe((data:User) => this.user=data);
    }
}