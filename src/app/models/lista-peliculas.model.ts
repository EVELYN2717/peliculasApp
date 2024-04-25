import { DetallesBasicos } from "./detalles-basicos.model";

export interface listaPeliculas {
    page:          number;
    results:       DetallesBasicos[];
    total_pages:   number;
    total_results: number;
}