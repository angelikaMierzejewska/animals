import {Voice} from '../interfaces/voice';

export class Animal implements Voice{
  private limbs: number;
  private color: string;
  private name: string;
  private type = 'ssak';

  constructor(name: string, limb: number) {
    this.name = name;
    this.limbs = limb;
  }

  getLimbs(): number {
    return this.limbs;
  }

  setLimbs(limbs: number): void {
    this.limbs = limbs;
  }

  giveVoice(): string{
    return '';
  }
}

