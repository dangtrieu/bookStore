import styled from "styled-components";
export const sliders = styled.div`
  display: ${(props) => (props.isActive ? "block" : "none")};
  img {
    width: 100%;
  }
`;
export const boxSlider = styled.div`
  position: relative;
  width: 70.5%;
`;
export const bottomT = styled.div`
  position: absolute;
  top: 185px;
  left: 40px;
  cursor: pointer;
  opacity: 45%;
  width: 40px;
  &:hover {
    opacity: 100%;
  }
`;
export const bottomTru = styled.div`
  width: 40px;
  position: absolute;
  top: 185px;
  opacity: 45%;
  left: 699px;
  cursor: pointer;
  &:hover {
    opacity: 100%;
  }
`;
