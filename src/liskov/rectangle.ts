export class Rectangle {
  private _height : number = 0;
  private _width : number = 0;

  constructor(height: number, width: number) {
    this._height = height;
    this._width = width;
  }

  public set height(value: number){
    this._height = value;
  }

  public get height(): number{
    return this._height;
  }

  public set width(value: number){
    this._width = value;
  }

  public get width(): number{
    return this._width;
  }

  public calculateArea(): number{
    return this._height * this._width;
  }
}


export class Square extends Rectangle  {
  constructor(size: number) {
    super(size, size);
  }

  public set size(value: number){
    super.height = value;
    super.width = value;
  }

  public set height(value: number){
    this.size = value;
  }

  public get height(): number{
    return super.height;
  }

  public set width(value: number){
    this.size = value;
  }

  public get width(): number{
    return super.width;
  }
}

export class Canvas {
  public readonly BORDER_WIDTH: number = 2;
  calculateAreaWithBorder(r: Rectangle): number{
    // add border to rect
    r.height += this.BORDER_WIDTH * 2;
    r.width += this.BORDER_WIDTH * 2;
    return r.calculateArea();
  }
}

const canvas = new Canvas();
const rectangle = new Rectangle(6, 16);
// (6 + 2 * 2 = 10) * (16 + 2 * 2 = 20) = 200
console.log(canvas.calculateAreaWithBorder(rectangle))
const square = new Square(1);
// (1 + 2 * 2 = 5 ) * (1 + 2 * 2 = 5) = 25
console.log(canvas.calculateAreaWithBorder(square))
// why 81?


