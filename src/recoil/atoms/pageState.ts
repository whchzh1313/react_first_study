import { atom } from "recoil";

export const pageStatus = atom<number>({
    key:"pageState",
    default: 1
})