import { Evento } from "./evento";

export interface Lote {
  id: Number;
  nome: String;
  preco: Number;
  dataInicio: Date;
  dataFim: Date;
  quantidade: Number;
  eventoId: Number;
  evento: Evento;
}
