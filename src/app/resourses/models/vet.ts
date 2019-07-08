import {Animal} from './animal';
import {Cat} from './cat';
import {Dog} from './dog';

export class Vet {
  private static instance: Vet;

  static getInstance(): Vet {
    if (!Vet.instance) {
      Vet.instance = new Vet();
    }
    return Vet.instance;
  }

  public prepareAnimal(dog: Dog): void;
  public prepareAnimal(cat: Cat): void;
  public prepareAnimal(animal: any): void {
    if (animal.constructor.name === 'Dog') {
      animal.setClear();
    } else if (animal.constructor.name === 'Cat') {
      animal.setWet();
    }
  }

  public cure(animal: Animal): void {
    const voice = animal.giveVoice();
    const limb = animal.getLimbs();
    for (let i = 0; i < limb; i++) {
      console.log(voice);
    }
  }
}
