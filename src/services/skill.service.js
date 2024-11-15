import { http } from "./config";

export const skillService = {
  layDanhSachSkill: () => {
    return http.get("/skill");
  },
};
