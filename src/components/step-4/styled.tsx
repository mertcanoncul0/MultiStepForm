import styled from "styled-components"

export const Step4 = styled.div``

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: var(--marine-blue);
  margin-bottom: 8px;
`

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--cool-gray);
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: var(--purplish-blue);
  }
`

export const Price = styled.h3`
  font-size: 16px;
  line-height: 20px;
  color: var(--marine-blue);
`

export const MainRow = styled.div`
  padding: 16px 24px;
  background-color: hsl(231, 100%, 99%, 100%);
  margin-bottom: 24px;
`

export const BillingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--cool-gray);
`

export const BillingWrapper = styled.div``

export const TotalRow = styled.div`
  padding-inline: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Title} {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: var(--cool-gray);
  }
`

export const SubRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  ${Title} {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: var(--cool-gray);
  }

  ${Price} {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: var(--marine-blue);
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const TotalAmount = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: var(--purplish-blue);
`
