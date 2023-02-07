export interface Bird {
  eat() : void;
  walk() : void;
  run(): void;
}

export interface FlyingBird{
  fly() : void;
}

function isFlyingBird(arg: any): arg is FlyingBird {
  return arg && arg.fly && typeof(arg.fly) == 'function';
}

export class Ecosystem {
  constructor(birds: Bird[]) {
    this.birds = birds;
  }
  birds : Bird[] = [];
  public onBirdPredator(){
    for (const bird of this.birds) {
      if(isFlyingBird(bird)){
        bird.fly();
      } else {
        bird.run();
      }
    }
  }
}

export abstract class BirdBase implements Bird{
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

export class Dove extends BirdBase implements FlyingBird{
  //...
  public fly(){
    console.log("Dove flap the wings");
  }
}

export class Ostrich extends BirdBase{
  //...
}

export class Penguin extends BirdBase{
  //...
}

const birds : Bird[] = [new Dove(), new Ostrich(), new Penguin()];
const ecosystem = new Ecosystem(birds);
//....
ecosystem.onBirdPredator()
