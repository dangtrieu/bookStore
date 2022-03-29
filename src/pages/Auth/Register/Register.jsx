import React, { useState } from "react";
import * as S from "./register.style";
import { FaAngleRight } from "react-icons/fa";
import TextPassword from "../../../components/TextPassword/TextPassword";
import TextInputEmail from "../../../components/TextInputEmail/TextInputEmail";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 2000,
  draggable: false,
  position: toast.POSITION.TOP_RIGHT,
});

function Register() {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  //logic here
  const handleChange = (e) => {
    let username = e.target.name;
    let password = e.target.value;
    setValue({ ...value, [username]: password });
  };

  const notify = (e) => toast(e);

  const login = () => {
    axios
      .post("https://623c87337efb5abea682a7f7.mockapi.io/bookProduct/login", {
        username: value.username == null ? "" : value.username,
        password: value.password == null ? "" : value.password,
      })
      .then(function (response) {
        if (response.status === 201) {
          notify("Dang ky thanh cong !!");
          navigate("/", { replace: true });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <S.boxLogin>
      <S.Container>
        <S.BoxTitle>
          <S.title>
            <span>Trang Chủ</span>
            <FaAngleRight />
          </S.title>
          <S.title>
            <span>Đăng Kí Tài Khoản</span>
          </S.title>
        </S.BoxTitle>
        <S.conterBox>
          <S.listBoxLeft>
            <S.titleFrom>ĐĂNG Ky TÀI KHOẢN</S.titleFrom>
            <S.FromLogin>
              Nếu bạn có tài khoản ở đây
              <S.inputEmail>
                <S.textS>username *</S.textS>
                <S.textS>
                  <TextInputEmail
                    value={value.username}
                    onChange={handleChange}
                    name={"username"}
                  />
                </S.textS>
              </S.inputEmail>
              <S.inputPass>
                <S.textS>password</S.textS>
                <S.textS>
                  <TextPassword
                    value={value.password}
                    onChange={handleChange}
                    name={"password"}
                    placeholder={"Mat khau"}
                  />
                </S.textS>
              </S.inputPass>
              <S.boxbutton onClick={login}>
                <S.buttonlogin>Đăng kí</S.buttonlogin>
              </S.boxbutton>
            </S.FromLogin>
          </S.listBoxLeft>
          <S.Listboxright>ssads</S.Listboxright>
        </S.conterBox>
      </S.Container>
    </S.boxLogin>
  );
}

export default Register;
