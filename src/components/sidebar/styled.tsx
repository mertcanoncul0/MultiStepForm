import styled, { css } from "styled-components"

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px 32px;
  color: var(--white);
  background-image: url("/images/bg-sidebar-desktop.svg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 274px;
  height: 568px;
  border-radius: 10px;
  margin: 16px 0 0 16px;

  @media (width <= 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    margin: 0;
    border-radius: 0;
    gap: 16px;
    max-height: 175px;
    background-image: url("/images/bg-sidebar-mobile.svg");
  }
`

export const ItemNumber = styled.span`
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 700;

  border: 1px solid var(--white);
  color: var(--white);

  width: 33px;
  height: 33px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ItemBody = styled.div`
  @media (width <= 768px) {
    display: none;
  }
`

export const Subtitle = styled.span`
  display: block;
  color: var(--pastel-blue);
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 4px;
`

export const Title = styled.h2`
  color: var(--white);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
`

export const Item = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  ${ItemNumber} {
    ${({ $active }) =>
      $active &&
      css`
        background-color: var(--light-blue);
        color: var(--marine-blue);
        border-color: var(--light-blue);
      `}
  }
`
