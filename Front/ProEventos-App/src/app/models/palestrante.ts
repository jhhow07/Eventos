import { PalestranteEvento } from "./palestrante-evento";
import { RedeSocial } from "./rede-social";

export interface Palestrante {
  id: Number;
  nome: String;
  miniCurriculo: String;
  imagemURL: String;
  telefone: String;
  email: String;
  redesSociais: RedeSocial[];
  palestranteEvento: PalestranteEvento[];
}
