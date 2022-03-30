import styled from "styled-components";
import { Link } from "react-router-dom";
export const boxs = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  width: 100%;
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;
export const boxDetail = styled.div`
  width: 100%;
`;

export const BoxTitle = styled.div`
  color: black;
  width: 100%;
  display: flex;
`;

export const title = styled.div`
  svg {
    margin-left: 15px;
  }
  span:first-child {
    color: black;
    font-size: ${(props) => props.fontSize + "px"};
    &:hover {
      color: red;
      cursor: pointer;
    }
  }
  span:last-child {
    margin-left: 15px;
  }
`;

export const boxChitiet = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;

export const CotTrai = styled.div`
  width: 70%;
  display: flex;
`;

export const anh = styled.div`
  width: 30%;
  img {
    width: 100%;
  }
`;

export const thongtin = styled.div`
  width: 100%;
  margin-left: 50px;
`;
export const ttBox = styled.div`
  width: 100%;
  display: flex;
  font-size: 18px;
  color: #333333;
  line-height: 24px;
  width: 100%;
  font-weight: 600;
  span {
    padding: 0 5px 0 5px;
    &:hover {
      color: #f26522;
      cursor: pointer;
    }
  }
`;
export const prices = styled.div`
  font-size: 24px;
  line-height: 30px;
  display: inline-block;
  color: #f26522;
  font-weight: 600;
`;

export const cotPhai = styled.div`
  width: 30%;
`;

export const themgio = styled.div`
    margin: 10px 0;
    cursor: pointer;
  span{
    font-size: 10px;
  outline: none;
  box-shadow: none;
  text-transform: uppercase;
  color: #fff;
  height: auto;
  line-height: 17px;
  border-radius: 0;
  background: #f26522;
  display: flex;
  align-items: center;
  margin-left: 30px;
  padding: 0 10px 0 10px;
  font-weight: 700;
  padding 10px 10px 10px 10px;&:hover{
    background:white;
    color:#f26522;;
  }
  }
`;

export const bangtinh = styled.div`
  padding: 10px 0 10px 0;
`;
export const apartfrom = styled.div`
  background: #dddddd;
  padding: 0 15px 5px 15px;
  cursor: pointer;
  &:hover {
    background: #f26522;
    color: white;
  }
`;

export const number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px 0 20px;
  background: #fff;
`;
export const amount = styled.div`
  display: flex;
  border: 1px solid #ddd;
`;
export const adds = styled.div`
  padding: 0 10px 0 10px;
  cursor: pointer;
  background: #dddddd;
  &:hover {
    background: #f26522;
    color: white;
  }
`;
export const buttons = styled.div``;
export const typeS = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
  span:first-child {
    font-size: 14px;

    color: red;
  }
  span:last-child {
    margin-left: 15px;

    color: red;
  }
`;
export const titleS = styled.div`
  color: #0c0c0c;
  font-size: 25px;
  line-height: 32px;
  margin: 0px;
  margin-top: 0px;
  margin-bottom: 8px;
  font-weight: 500;
`;
export const statusts = styled.div`
  padding: 15px 0;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  width: 100%;
  em {
    font-size: 14px;
  }
`;

export const Spham = styled.div`
  margin-bottom: 20px;
      font-weight: 700;
    font-size: 20px;
    color: #0c0c0c;
`;

export const boxImsg = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0 30px 0;
`;
export const urlimg = styled(Link)`
  width: 30%;
  img {
    width: 100%;
  }
`;
export const ttitles = styled.div`
  width: 70%;
  padding: 0 0 0 30px;
`;

export const camnag = styled.div`
  font-weight: 600;
  font-size: 19px;
  color: #636363;
  margin-bottom: 10px;
`;
export const mota = styled.div`
  font-size: 17px;
  color: #898989;
  line-height: 24px;
  width: 100%;
  margin-bottom: 10px;
`;
export const gia = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #f26522;
`;
export const boclai = styled.div`
  border-top: 1px solid #000;
`;
