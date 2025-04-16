// Mixin 관리
import { css } from "styled-components";

export const flexMixin = ({
  direction = "row",
  justify = "start",
  align = "stretch",
  gap = 0,
  wrap = "nowrap",
}) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap}px;
    flex-wrap: ${wrap};
  `;
};

export const fontMixin = ({ size, weight = 400 }) => {
  return css`
    font-size: ${size}px;
    font-weight: ${weight};
  `;
};

export const tag_color = "#d7fa00";
export const gray = "rgb(160, 160, 160)";