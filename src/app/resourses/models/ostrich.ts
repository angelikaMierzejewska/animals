import {Animal} from './animal';

export class Ostrich extends Animal  {
  constructor(name: string) {
    super(name, 2);
  }
  giveVoice(): string {
    return 'X';
  }
}
