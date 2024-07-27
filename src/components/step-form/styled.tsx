import styled from "styled-components"

export const StepForm = styled.form<{ $isBillingForm?: boolean }>`
  margin: 56px 100px 32px 100px;
  width: 450px;
  display: flex;
  flex-direction: column;

  @media (width <= 1000px) {
    width: 400px;
  }

  @media (width <= 768px) {
    background-color: var(--white);
    margin: 0 auto;
    padding: 32px 24px;
    border-radius: 10px;
    position: absolute;
    top: 41.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }

  @media (width <= 500px) {
    ${({ $isBillingForm }) => ($isBillingForm ? "top: 46%;" : "top: 38%;")}
  }

  @media (width <= 425px) {
    ${({ $isBillingForm }) => ($isBillingForm ? "top: 46%;" : "top: 36%;")}

    width: 343px;
  }
`

export const StepHeader = styled.header``

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: var(--marine-blue);
  margin-bottom: 12px;
`

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  color: var(--cool-gray);
  margin-bottom: 36px;
`

export const Body = styled.div`
  flex-grow: 1;
`

export const StepFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  @media (width <= 768px) {
    display: none;
  }
`

export const StepFooterMobile = styled.footer`
  display: none;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  @media (width <= 768px) {
    background-color: var(--white);
    margin: 0 auto;
    padding: 32px 24px;
    border-radius: 10px;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 72px;
  }
`

export const GoBackButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: var(--cool-gray);
  cursor: pointer;

  &:hover {
    color: var(--marine-blue);
  }
`

export const GoNextButton = styled.button`
  color: var(--white);
  background-color: var(--marine-blue);
  font-size: 16px;
  font-weight: 500;
  width: 123px;
  height: 48px;
  border-radius: 8px;
  margin-left: auto;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: hsl(213, 72%, 31%, 100%);
  }
`

export const ConfirmButton = styled.button`
  color: var(--white);
  background-color: var(--marine-blue);
  font-size: 16px;
  font-weight: 500;
  width: 123px;
  height: 48px;
  border-radius: 8px;
  margin-left: auto;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: hsl(243, 100%, 77%, 100%);
  }
`
