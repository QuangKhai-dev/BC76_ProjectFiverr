import { http } from "./config";

export const nguoiDungService = {
  layDanhSachNguoiDung: () => {
    return http.get("/users");
  },
  xoaNguoiDung: (id) => {
    return http.delete(`/users?id=${id}`);
  },
  themNguoiDung: (data) => {
    return http.post("/users", data);
  },
};
