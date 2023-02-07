export interface Bird {
  fly():void;
  eat() : void;
  walk() : void;
  run(): void;
}

export class Ecosystem {
  constructor(birds: Bird[]) {
    this.birds = birds;
  }
  birds : Bird[] = [];
  public onBirdPredator(){
    for (const bird of this.birds) {
        bird.fly();
    }
  }
}

export abstract class BirdBase implements Bird{
  abstract fly(): void;
  eat(): void {
    console.log(`${this.getBirdType()} open the beak, pick and swallow`);
  }
  walk(): void {
    console.log(`${this.getBirdType()} move legs with balance`);
  }
  run(): void {
    console.log(`${this.getBirdType()} move legs quickly with balance`);
  }
  private getBirdType() {
    return this.constructor.name;
  }
}
export class Dove extends BirdBase {
public fly(){
  console.log("Dove flap the wings");
  }
}

export class Ostrich extends BirdBase{
  public fly(){
    throw new Error("The Ostrich does not fly");
  }
}

const birds : Bird[] = [new Dove(), new Ostrich()];
const ecosystem = new Ecosystem(birds);
//....
ecosystem.onBirdPredator()
