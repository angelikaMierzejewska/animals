import {Component, OnInit} from '@angular/core';
import {Vet} from './resourses/models/vet';
import {Dog} from './resourses/models/dog';
import {Cat} from './resourses/models/cat';
import {Ostrich} from './resourses/models/ostrich';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.test();
  }
  public test(): void {
    const vet = Vet.getInstance();
    const dog = new Dog('Dog');
    vet.prepareAnimal(dog);
    vet.cure(dog);
    console.log('-----------------------------');
    const cat = new Cat('Cat');
    vet.prepareAnimal(cat);
    vet.cure(cat);
    console.log('-----------------------------');

    const ostrich = new Ostrich('Ostrich');
    vet.cure(ostrich);
    console.log('-----------------------------');
  }

}
