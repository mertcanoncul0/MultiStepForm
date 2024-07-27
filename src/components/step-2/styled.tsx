import styled, { css } from "styled-components"

export const Step2 = styled.div``

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 32px;

  @media (width <= 500px) {
    flex-direction: column;
  }
`

export const RadioInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`

export const Icon = styled.img`
  margin-bottom: 40px;
  width: 40px;
  height: 40px;

  @media (width <= 500px) {
    margin-bottom: 0;
  }
`

export const TitleWrapper = styled.div``

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--marine-blue);
`

export const Subtitle = styled.h4`
  color: var(--cool-gray);
  font-size: 14px;
  font-weight: 400;
`

export const Description = styled.p`
  color: var(--marine-blue);
  font-size: 12px;
  font-weight: 400;
`

export const BillingLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const BillingName = styled.p<{ $selected: boolean }>`
  color: var(--cool-gray);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  ${({ $selected }) =>
    $selected &&
    css`
      color: var(--marine-blue);
    `}
`

export const BillingInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`

export const BillingSpan = styled.span`
  position: relative;
  width: 38px;
  height: 20px;
  border-radius: 10px;
  background-color: var(--marine-blue);

  &::before {
    content: "";
    position: absolute;
    top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: white;
    transition: transform 0.2s ease;
  }
`

export const BillingGroup = styled.div<{ $billingType: string }>`
  background-color: var(--alabaster);
  border-radius: 8px;
  padding-block: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${BillingSpan} {
    &::before {
      transform: translateX(
        ${({ $billingType }) => ($billingType === "monthly" ? "4px" : "22px")}
      );
    }
  }
`

export const RadioLabel = styled.label<{
  $selectedPlan: boolean
  $isYearly: boolean
}>`
  display: block;
  width: 138px;
  height: ${({ $isYearly }) => ($isYearly ? "190px" : "160px")};
  padding: 20px 16px;
  background-color: white;
  border: 1px solid var(--light-gray);
  border-radius: 8px;
  transition: border-color 0.2s ease, height 0.2s ease;
  cursor: pointer;

  @media (width <= 500px) {
    padding: 14px 16px;
    width: 100%;
    height: ${({ $isYearly }) => ($isYearly ? "99px" : "77px")};
    display: flex;
    gap: 14px;
  }

  &:hover {
    border-color: var(--purplish-blue);
  }

  ${Subtitle} {
    ${({ $isYearly }) =>
      $isYearly &&
      css`
        margin-bottom: 6px;
      `}
  }

  ${({ $selectedPlan }) =>
    $selectedPlan &&
    css`
      background-color: var(--alabaster);
      border-color: var(--purplish-blue);
    `}
`
