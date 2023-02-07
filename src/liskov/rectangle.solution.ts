export interface Shape {
  calculateArea(): number;

  addBorder(thickness: number): void;
}

export class Rectangle implements Shape {
  private _height: number = 0;
  private _width: number = 0;

  constructor(height: number, width: number) {
    this._height = height;
    this._width = width;
  }

  public set height(value: number) {
    this._height = value;
  }

  public get height(): number {
    return this._height;
  }

  public set width(value: number) {
    this._width = value;
  }

  public get width(): number {
    return this._width;
  }

  public calculateArea(): number {
    return this._height * this._width;
  }

  addBorder(thickness: number): void {
    this._width += thickness * 2;
    this._height += thickness * 2;
  }
}


export class Square implements Shape {
  _length: number = 0;

  constructor(length: number) {
    this._length = length;
  }

  public set length(length: number) {
    this._length = length;
  }

  public get length(): number {
    return this._length;
  }

  public get height(): number {
    return this.length;
  }

  public get width() {
    return this.length;
  }

  calculateArea(): number {
    return Math.pow(this.length, 2);
  }

  addBorder(thickness: number): void {
    this._length += thickness * 2;
  }
}

export class Circle implements Shape {
  _radio: number = 0;

  constructor(radio: number) {
    this._radio = radio;
  }

  public set radio(radio: number) {
    this._radio = radio;
  }

  public get radio(): number {
    return this._radio;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }

  addBorder(thickness: number): void {
    this._radio += thickness;
  }
}

export class Canvas {
  public readonly BORDER_WIDTH: number = 2;

  calculateAreaWithBorder(s: Shape): number {
    // add border to rect
    s.addBorder(this.BORDER_WIDTH);
    return s.calculateArea();
  }
}

const canvas = new Canvas();
const rectangle = new Rectangle(6, 16);
// (6 + 2 * 2 = 10) * (16 + 2 * 2 = 20) = 200
console.log(canvas.calculateAreaWithBorder(rectangle));
const square = new Square(1);
// (1 + 2 * 2 = 5 ) ^ 2 = 25
console.log(canvas.calculateAreaWithBorder(square));
const circle = new Circle(1);
// ((1 + 2 = 3 ) ^ 2 = 9) * 3.14 = 28.274333882308138
console.log(canvas.calculateAreaWithBorder(circle));



