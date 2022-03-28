import React, { useState } from "react";
import * as S from "./loginPage.style";
import { FaAngleRight } from "react-icons/fa";
import TextPassword from "../../../components/TextPassword/TextPassword";
import TextInputEmail from "../../../components/TextInputEmail/TextInputEmail";
import axios from "axios";
function LoginPage() {
  const [value, setValue] = useState("");
  //logic here

  //state

  const handleChange = (e) => {
    // e.target.value;
    //set state
  };

  const login = () => {
    axios
      .post("/user", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
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
            <S.titleFrom>ĐĂNG NHẬP TÀI KHOẢN</S.titleFrom>
            <S.FromLogin>
              Nếu bạn có tài khoản ở đây
              <S.inputEmail>
                <S.textS>Email *</S.textS>
                <S.textS>
                  <TextInputEmail
                    value={"value"}
                    onChange={handleChange}
                    name={"name"}
                    placeholder={"Mat khau"}
                  />
                </S.textS>
              </S.inputEmail>
              <S.inputPass>
                <S.textS>Mật Khẩu</S.textS>
                <S.textS>
                  <TextPassword />
                </S.textS>
              </S.inputPass>
              <S.boxbutton onClick={login}>
                <S.buttonlogin>Đăng kí</S.buttonlogin>
                <a href="#">Đăng Kí</a>
              </S.boxbutton>
            </S.FromLogin>
          </S.listBoxLeft>
          <S.Listboxright>ssads</S.Listboxright>
        </S.conterBox>
      </S.Container>
    </S.boxLogin>
  );
}

export default LoginPage;
