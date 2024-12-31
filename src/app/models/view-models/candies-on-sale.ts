import { CandyList } from "./candy-list";

export interface CandiesOnSale extends Omit<CandyList, "currentCategory"> { }
