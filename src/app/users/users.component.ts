import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent {

    userName: string = "";
    response: any;

    constructor(private http: HttpClient){}

   search() {
      this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
          this.response = response;
          console.log(this.response);
      })
   }
}
