import React, { useState } from "react";
import * as S from "./loginPage.style";
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

function LoginPage() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  React.useEffect(() => {
    getData();
  }, []);

  //logic here
  const handleLogin = () => {
    let datas = data.find(
      (item) =>
        item.username === value.username && item.password === value.password
    );
    if (datas != null) {
      setCookie("username", value.username, 1);
      notify("Dang nhap thanh cong !!");
      navigate("/", { replace: true });
    } else {
      notify("Sai ten tai khoan hoac mat khau !!");
    }
  };

  const handleChange = (e) => {
    let username = e.target.name;
    let password = e.target.value;
    setValue({ ...value, [username]: password });
  };


  const notify = (e) => toast(e);

  const getData = () => {
    axios
      .get("https://623c87337efb5abea682a7f7.mockapi.io/bookProduct/login")
      .then(function (response) {
        if (response !== null) {
          setData(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  const getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
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
              <S.boxbutton>
                <S.buttonlogin onClick={handleLogin}>ĐĂNG NHẬP</S.buttonlogin>
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
