import { atom } from "recoil";

export const pageState = atom({
  key: "pageState",
  default: 1,
  
  // default: {
  //   currentPage: 1,
  //   totalPages: 0,
  //   pageSize: 10,
  //   totalItems: 0,
  // },
});
