import { Evento } from "./evento";
import { Palestrante } from "./palestrante";

export interface PalestranteEvento {
  id: Number;
  palestrante: Palestrante;
  eventoId: Number;
  evento: Evento;
}
