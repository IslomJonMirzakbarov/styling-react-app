import styled, { css } from "styled-components";

const largeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      border-radius: 6px;
      font-size: 1.5rem;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1rem;
    `;
  }
};

export const Button = styled.button`
  color: white;
  background: ${({ secondary }) =>
    secondary
      ? ({ theme }) => theme.secondaryColor
      : ({ theme }) => theme.primaryColor};
  font-weight: bold;
  ${largeStyles};
  box-shadow: none;
  border: none;
  width: 100%;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;
