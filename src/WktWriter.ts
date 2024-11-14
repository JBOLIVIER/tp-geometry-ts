import Geometry from "./Geometry";
import LineString from "./LineString";
import Point from "./Point";

export default class WktWriter{
    write(geometry : Geometry) : String {
            if (!geometry.isEmpty()){
            if ( geometry instanceof Point ){
                // traiter le cas Point
                return("POINT(" + geometry.getCoordinate()[0] +" "+ geometry.getCoordinate()[1] +")" )
            }else if ( geometry instanceof LineString ){
                // traiter le cas LineString
                let wkttxt = "LINESTRING("
                for (let i =0; i<geometry.getNumPoints(); i++) {
                    wkttxt += geometry.getPointN(i).getCoordinate[0] + " " + geometry.getPointN(i).getCoordinate[1] + ", ";
                }
                wkttxt += ")"
            }else{
                throw new TypeError("geometry type not supported");
            }
        }
        else {return ""}  
    }
}