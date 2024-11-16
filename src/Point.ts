import AbstractGeometry from "./AbstractGeometry";
import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class Point extends AbstractGeometry{
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    super();
    this.coordinate = coordinate ? coordinate : [];
  }

  accept(visitor: GeometryVisitor): void {
    visitor.visitPoint(this);
  }



  clone(): Geometry {
    let copy = this.isEmpty() ? new Point() : new Point([this.x(),this.y()]);
    return copy;
  }

  translate(dx: number, dy: number): void {
    this.coordinate[0] +=  !isNaN(this.coordinate[0]) ? dx : Number.NaN ;
    this.coordinate[1] +=  !isNaN(this.coordinate[1]) ? dy : Number.NaN ;
  }

  isEmpty(): boolean {
    return this.coordinate.length === 0;
  }
  getType(): string {
    return "Point";
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return !this.isEmpty() ? this.coordinate[0] : Number.NaN ;
  }

  y(): number {
    return !this.isEmpty() ? this.coordinate[1] : Number.NaN ;
  }

}
