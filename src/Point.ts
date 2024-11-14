import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";

export default class Point implements Geometry{
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate ? coordinate : [];
  }

  getEnvelope(): Envelope {
    if (!this.isEmpty()){
      let envb = new EnvelopeBuilder();
      envb.insert(this.getCoordinate());
      return envb.build();
    }
    else { return new Envelope()}
  }

  clone(): Geometry {
    let b = this.isEmpty() ? new Point() : new Point([this.x(),this.y()]);
    return b;
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
