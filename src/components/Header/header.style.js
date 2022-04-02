import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
  position: relative;
  z-index: 20;
  float: left;
  width: 100%;
`;
export const Midheader = styled.div`
  padding: 36px 0;
  background: #f26522;
  float: left;
  width: 100%;
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;
export const Rowss = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

export const HeaderIcont = styled.div`
  color: red;
`;
export const HeaderBrand = styled.div`
  display: flex;
`;
export const Delivery = styled.div`
  color: white;
  padding: 0 20px 10px;
  text-transform: uppercase;
  align-items: center;
  display: flex;
  svg {
    margin-right: 10px;
  }
`;
export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  width: 10rem;
  border-radius: 2px;
  border: 1px solid white;
  color: #fff;
  padding: 1px 6px;
  transition: 0.2s background ease;

  &:hover {
    background: black;
    cursor: pointer;
  }
`;

export const login = styled.div`
  background: black;
  width: 100%;
`;
export const LoginIcon = styled.div`
  display: flex;
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 5px 0 5px 0;
  justify-content: end;
`;
export const tabIcon = styled(Link)`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  cursor: pointer;
  text-decoration: none;
  svg {
    margin-right: 5px;
  }
  &:hover {
    color: red;
  }
`;
export const buttons = styled.div`
  align-items: center;
  background-color: #f26522;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgb(0 0 0 / 2%) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  justify-content: center;
  margin-left: 10px;
  padding: 5px 8px 5px 8px;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
`;
export const boxSvg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0 5px 8px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
  &:hover {
    background: black;
  }
`;
export const cartNo = styled.div`
  position: absolute;
  display: none;
  background: white;
  width: 410px;
  right: 75px;
  border-radius: 2px;
  box-shadow: 0 2px 10px #ccc;
  span {
    display: flex;
    justify-content: center;
  }
`;
export const boxcart = styled.div`
  img {
    width: 100%;
  }
  &:hover ${cartNo} {
    display: block;
  }
`;
export const blockCart = styled.div`
  color: red;
`;

export const boxsimgs = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 20px 10px 20px;
`;
export const imgsIcon = styled.div`
  img {
    width: 90%;
    cursor: pointer;
  }
`;
export const Textbox = styled.div`
  width: 60%;
  margin-left: 30px;
`;
export const apartfrom = styled.div`
width:100%;
  border: 1px solid red;
  padding: 0 15px 0 15px;
  margin: 5px;
  cursor: pointer;
`;
export const number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  padding: 0 10px 0 10px;
`;
export const amount = styled.div`
  display: flex;
`;
export const adds = styled.div`
  border: 1px solid red;
  padding: 0 10px 0 10px;
  cursor: pointer;
  margin: 5px;
`;
export const closes = styled.div`
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;
export const manys = styled.div`
  border-top: solid 1px #ebebeb;
  width: 100%;
  cursor: pointer;
`;
export const titlemany = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 10px 0;
`;
export const buttonmany = styled.div`
  width: 50%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  padding: 5px 0 5px 0;
  background: #f26522;
  color: white;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background: white;
    color: #f26522;
  }
`;
export const boxbuttonmn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 30px 5px 30px;
`;

export const boc = styled.div`
  width: 100%;
`;

export const click = styled.div`
  width: 100%;
`;
