import Mapboxgl from "mapbox-gl";

export interface MapState {
    map?: Mapboxgl.Map;
    makers: Mapboxgl.Marker[]; 
    distance?: number;
    duration?: number;
}

function state(): MapState {
    return {
        map: undefined,
        makers: [], 
        distance: undefined,
        duration: undefined,
    }
}

export default state;