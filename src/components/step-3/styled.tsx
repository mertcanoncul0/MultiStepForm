import styled, { css } from "styled-components"

export const Step3 = styled.div``

export const Input = styled.input``

export const Item = styled.label<{ $isSelected: boolean }>`
  display: block;
  margin-bottom: 16px;
  border-radius: 8px;
  height: 81px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  background-color: var(--white);
  cursor: pointer;

  @media (width <= 500px) {
    padding: 12px 16px;
  }

  transition: border-color 0.2s ease;
  ${({ $isSelected }) =>
    $isSelected &&
    css`
      border-color: var(--purplish-blue);
      background-color: var(--alabaster);
    `}

  &:hover {
    border-color: var(--purplish-blue);
  }
`

export const InputBody = styled.div`
  flex-grow: 1;
  margin-left: 24px;
`

export const TitleWrapper = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: var(--marine-blue);
  margin-bottom: 8px;

  @media (width <= 500px) {
    font-size: 14px;
    margin-bottom: 3px;
  }
`

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: var(--marine-blue);
  margin-bottom: 8px;

  @media (width <= 500px) {
    font-size: 14px;
    margin-bottom: 3px;
  }
`

export const Subtitle = styled.p`
  font-size: 15px;
  line-height: 20px;
  color: var(--cool-gray);

  @media (width <= 500px) {
    font-size: 12px;
  }
`

export const Price = styled.p`
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  color: var(--purplish-blue);
`

export const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: var(--strawberry-red);
`
