import { DetallesBasicos } from "./detalles-basicos.model";

export interface ListaPeliculasModel {
    page?:          number;
    results?:       DetallesBasicos[];
    total_pages?:   number;
    total_results?: number;
}