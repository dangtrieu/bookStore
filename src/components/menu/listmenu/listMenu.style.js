import styled from "styled-components";

export const ListMenu = styled.div`
  background: #da5b1f;
  width: 100%;
  float: left;
  margin-bottom: 35px;
`;
export const Container = styled.div``;
export const fortmat = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
`;
export const Menus = styled.div`
  display: flex;
  font-size: 14px;
`;
export const conten = styled.div`
  coler: white;
  margin-right: 40px;
  padding: 10px;
  text-transform: uppercase;
  &:hover {
    background: black;
    cursor: pointer;
  }
`;

export const searchs = styled.div`
      position: relative;
      padding:7px 0 0 0 ;
  input {
    
    height: 30px;
    border: 1px solid #e1e1e1;
    text-indent: 15px;
    padding: 0 60px 0 0px;
    color: #898989;
    outline: none;
    border-radius: 4px;
    }
     svg{
      position:absolute;}
`;

export const listProduct = styled.div`
  display: none;
  z-index: 999;
  width: 220px;
  color: white;
  background: #e1e1e1;
  position: absolute;
  top: 31px;
  left: -10px;
`;
export const Products = styled.div`
  width: 100%;
  coler: white;
  display: flex;
  position: relative;
  svg {
    margin: 5px 0 0 5px;
  }
  &:hover ${listProduct} {
    display: block;
  }
`;

export const titleProduct = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: block;
  padding: 7px 5px 7px 9px;
  color: #333;
  text-align: left;
  text-transform: lowercase;
`;
