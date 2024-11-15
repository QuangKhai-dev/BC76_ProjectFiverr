import React, { useContext, useEffect, useState } from "react";
import InputCustom from "../../../../components/input/inputCustom/InputCustom";
import { Button, DatePicker } from "antd";
import SelectCustom from "../../../../components/select/selectCustom/SelectCustom";
import { skillService } from "../../../../services/skill.service";
import { useFormik } from "formik";
import { nguoiDungService } from "../../../../services/nguoiDung.service";
import { NotificationContext } from "../../../../App";

const FormAddUser = ({ handleCloseModal, layDanhSachNguoiDung }) => {
  const [listSkill, setListSkill] = useState([]);
  const handleNotification = useContext(NotificationContext);
  const { handleChange, handleBlur, errors, touched, handleSubmit, values, setFieldValue } =
    useFormik({
      initialValues: {
        id: 0,
        name: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
        gender: true,
        role: "",
        skill: [],
        certification: [],
        // admin | user
      },
      onSubmit: (values) => {
        console.log(values);
        nguoiDungService.themNguoiDung(values).then((res) => {
          console.log(res)
          handleCloseModal()
          layDanhSachNguoiDung()
          handleNotification('success', 'Thêm người dùng thành công')
        }).catch((err) => {
          console.log(err)
        })
      },
    });
  useEffect(() => {
    skillService
      .layDanhSachSkill()
      .then((res) => {
        setListSkill(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-3" action="">
      <InputCustom
        id="name"
        name="name"
        value={values.name}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.name}
        touched={touched.name}
        labelContent={"Họ tên"}
        placeholder={"Vui lòng nhập họ tên"}
      />
      <InputCustom
        id="email"
        name="email"
        value={values.email}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
        labelContent={"Email"}
        placeholder={"Vui lòng nhập email"}
      />
      <InputCustom
        id="password"
        name="password"
        value={values.password}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.password}
        touched={touched.password}
        type="password"
        labelContent={"Password"}
        placeholder={"Vui lòng nhập password"}
      />

      <div className="grid grid-cols-2 gap-5">
        <InputCustom
          id="phone"
          name="phone"
          value={values.phone}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.phone}
          touched={touched.phone}
          labelContent={"Số điện thoại"}
          placeholder={"Vui lòng nhập sdt"}
        />
        <SelectCustom
          handleChange={(value, option) => {
            setFieldValue('role', value)
          }}
          options={[
            {
              label: "Admin",
              value: "ADMIN",
            },
            {
              label: "User",
              value: "USER",
            },
          ]}
          labelContent="Chức vụ"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="font-medium mb-1 block" htmlFor="">
            Ngày sinh
          </label>
          <DatePicker onChange={(date, dateString) => {
            setFieldValue('birthday', dateString)
          }} format="DD-MM-YYYY" className="w-full" />
        </div>
        <SelectCustom
          handleChange={(value, option) => {
            setFieldValue('gender', value)
          }}
          options={[
            {
              label: "Nam",
              value: true,
            },
            {
              label: "Nữ",
              value: false,
            },
          ]}
          labelContent="Giới tính"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <SelectCustom
          handleChange={(value, option) => {
            setFieldValue('skill', value)
          }}
          mode={"tags"}
          options={listSkill.map((item) => {
            return {
              label: item.tenSkill,
              value: item.id.toString(),
            };
          })}
          labelContent="Skills"
        />
        <SelectCustom handleChange={(value, option) => {
          setFieldValue('certification', value)
        }} mode={"tags"} labelContent="Chứng chỉ" />
      </div>
      <div className="text-right">
        <Button htmlType="submit" variant="solid" className="bg-black text-white">
          Xác nhận
        </Button>
      </div>
    </form>
  );
};

export default FormAddUser;
