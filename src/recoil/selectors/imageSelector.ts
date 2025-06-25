import axios from "axios";

import { selector } from "recoil";
import { searchState } from "@recoil/atoms/searchState";
import { pageState } from "@recoil/atoms/pageState";

// 오픈 API 호출
const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "U48Uloqdp7bFzx2-ASk5nAFpkiHdez2jawISMgSNAcQ";
const PER_PAGE = 30;

// 자동 코딩
export const imageData = selector({
    key: "imageData",
    get: async ({ get }) => {
        const searchValue = get(searchState);
        const pageValue = get(pageState);
        try {
            // API 호출
            const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`);
            console.log(res);
            
            return res.data;
        } catch (error) {
            console.log(error)
        }
    },
});
