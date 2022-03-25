import styled from "styled-components";

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
`;
export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  background: #ee4d2d;
  border-radius: 2px;
  border: 1px solid white;
  color: #fff;
  padding: 1px 6px;
  transition: 0.2s background ease;
  &:hover {
    background: #f05d40;
  }
`;
