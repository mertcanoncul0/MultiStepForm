import styled, { css } from "styled-components"

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px 32px;
  color: var(--white);
  background-image: url("/images/bg-sidebar-desktop.svg");
  width: 274px;
  height: 568px;
  border-radius: 10px;
  margin: 16px 0 0 16px;
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

export const ItemBody = styled.div``

export const Subtitle = styled.h5`
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
