import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {



  constructor() { }
  @Input() user:{name:string,phone:string} = {name:'',phone:''};

  ngOnInit(): void {
  }

}
