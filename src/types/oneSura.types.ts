import { IVerse } from "./ayatText.types";
export interface IOneSura {
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  type: string;
  total_verses: number;
  verses: IVerse[];
}
