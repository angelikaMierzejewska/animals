import {Animal} from './animal';


export class Cat extends Animal {
  private wet = true;
  constructor(name: string) {
    super(name, 4);
  }
  setWet(): void {
    this.wet = false;
  }
  giveVoice(): string {
    return 'Miau!!!';
  }
}
