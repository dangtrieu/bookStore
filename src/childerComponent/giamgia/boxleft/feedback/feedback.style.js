import styled from "styled-components";
export const Suponline = styled.div`
  background: #fff;
  width: 100%;
  padding-top: 20px;
  margin-top: 35px;
`;
export const titleSuport = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 17px;
  margin: 0 0 10px;
  text-transform: uppercase;
  width: 100%;
  float: left;
  letter-spacing: 0;
`;

export const listName = styled.div`
  width: 100%;
  position: relative;
  font-size: 13px;
  margin-top: 7px;
`;

export const listNV = styled.div`
  width: 80%;
  top: 8px;
`;
export const container = styled.div`
  width: 100%;
  position: relative;
  padding-right: 15px;
  padding-left: 35px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 20px;
`;

export const imgAvata = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #e4e4e4;
  &:before {
    content: "";
    position: absolute;
    border-top: 7px solid #e4e4e4;
    top: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    left: 50%;
    margin-left: -8px;
  }
  img {
    height: 40px;
  }
`
export const imgAvata1 = styled.div`
 display: flex;
  justify-content: center;
`

// content: "";
// position: absolute;
// border - top: 7px solid #e4e4e4;
// top: 0;
// border - left: 8px solid transparent;
// border - right: 8px solid transparent;
// left: 50 %;
// margin - left: -8px;
