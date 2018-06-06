import { Component, OnInit } from '@angular/core';
class Person{

  name:string;
  gender:string;
  rating:number;

  // female:string ='f';
  // male:string='m';

  constructor(name:string, gender:string,rating:number){


  }


}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  female = new Person('Jen Ran', 'f', 10);
  male = new Person('Roger Ran', 'm', 10);

  person;

  ngOnInit(){

    this.pickRandomPerson();
  }

  pickRandomPerson(){

   const index = Math.floor(Math.random() * 2);
    if(!index){

      this.person = this.female;
    }else{

      this.person = this.male;
    }
  }

  switchPerson(){

    if(this.person.gender == 'f'){
      this.person = this.male;

    }else if(this.person.gender ==='m'){
      this.person = this.female;
    }else{
      this.pickRandomPerson();
    }
  }
  

}
