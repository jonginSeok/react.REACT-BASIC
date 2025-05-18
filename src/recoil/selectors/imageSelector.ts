import { selector } from "recoil";
import axios from "axios";

// 자동 코딩
export const imageSelector = selector({
  key: "imageSelector",
  get: async () => {
    try {
      const response = await axios.get("/api/images");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});
