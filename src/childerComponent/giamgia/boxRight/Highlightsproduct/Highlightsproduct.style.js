import styled from "styled-components";
export const newProduct = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px 0 15px;
  position: relative;
`;
export const selectionnewProduct = styled.div`
  display: flex;
  h1:first-child {
    margin-right: 20px;
    font-size: 26px;
  }
  &:after {
   content: "";
    display: block;
    position: absolute;
    border: 1px solid #f26522;
    height: 47px;
    left: 10px;
    top: 5px;
}

  }
`;
export const boxx = styled.div`
  width: 100%;
  padding: 0 15px 0 15px;
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
  img{
       cursor: pointer;

  }
`;

export const tablePrice = styled.div`
  justify-content: center;
  padding: 10px 15px 0 15px;
  h3 {
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: uppercase;
    overflow: hidden;
    font-size: 14px;
    font-weight: 600;
    display: flex;
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
export const titleMax = styled.div`
  h1:first-child {
    margin-right: 20px;
    font-size: 26px;
  }&:hover{
    color:red;
  }
  &:after {
   content: "";
    display: block;
    position: absolute;
    border: 1px solid #959595;
    height: 47px;
    left: 157px;
    top: 5px;
}
`
export const Spans = styled.div`
  margin-top: 1px;
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