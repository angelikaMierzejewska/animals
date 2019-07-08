import {Animal} from './animal';

export class Dog extends Animal {
  private clear = false;
  constructor(name: string) {
    super(name, 4);
  }
  setClear(): void {
    this.clear = true;
  }

  giveVoice(): string {
    return 'Hau!!!';
  }
}
