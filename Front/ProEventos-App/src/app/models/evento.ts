import { Lote } from "./lote";
import { PalestranteEvento } from "./palestrante-evento";
import { RedeSocial } from "./rede-social";

export interface Evento {
  id: Number;
  local: String;
  dataEvento?: Date;
  tema: String;
  qtdPessoas: Number;
  imagemURL: String;
  telefone: String;
  email: String;
  lotes: Lote[];
  redesSociais: RedeSocial[];
  palestrantesEventos: PalestranteEvento[];
}
