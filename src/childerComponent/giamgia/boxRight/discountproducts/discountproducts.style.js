import { Link } from "react-router-dom";
import styled from "styled-components";

export const newProduct = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px 0 15px;
`;
export const selectionnewProduct = styled.div`
  cursor: pointer;
  span {
    font-size: 17px;
    font-weight: 600;
  }
  &:hover {
    color: red;
  }
`;
export const boxx = styled.div`
  width: 100%;
  padding: 0 15px 0 15px;
  margin-bottom: 30px;
  background: #fff;
`;
export const boxProductNew = styled.div`
  width: 100%;
  margin-bottom: 35px;

  img {
    width: 100%;
  }
`;

export const buttonclick = styled.div`
  border: 1px solid #898989;
  display: flex;
  font-size: 11px;
  padding: 7px 15px 8px 35px;
  position: relative;
  cursor: pointer;
  &:hover {
    color: #fff;
    border-color: #f26522;
    background: #f26522;
  }
`;
export const boxgrow = styled.div`
  display: flex;
  width: 100%;
  grid-template-columns: 25% 25% 25% 25%;
  display: grid;
`;

export const paddingProductnew = styled.div`
  padding: 10px;
  img {
    cursor: pointer;
  }
`;

export const tablePrice = styled.div`
  justify-content: center;
  padding: 10px 15px 0 15px;
  h3 {
    display: block;
    display: -webkit-box;
  	-webkit-line-clamp: 1; 
  	-webkit-box-orient: vertical;
  	overflow: hidden;
  	text-overflow: ellipsis;


    text-transform: uppercase;

    font-size: 14px;
    font-weight: 600;
  
    justify-content: center;
  }
`;

export const spricebox = styled.div`
  display: flex;
  h5 {
    color: #f26522;
  }
  h3 {
    display: flex;
    margin-top: 6px;
    margin-left: 15px;
    text-decoration: line-through;
  }
`;

export const bags = styled.div`
  position: absolute;
  left: 11px;
  top: 6px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
export const Spans = styled.div`
  margin-top: 1px;
`;
export const boxImg = styled(Link)`
  margin-top: 1px;
`;
