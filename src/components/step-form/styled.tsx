import styled from "styled-components"

export const StepForm = styled.form`
  margin: 56px 100px 32px 100px;
  width: 450px;
  display: flex;
  flex-direction: column;
`

export const StepHeader = styled.header``

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: var(--marine-blue);
  margin-bottom: 12px;
`

export const Subtitle = styled.h3`
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

  &:hover {
    background-color: hsl(213, 72%, 31%, 100%);
  }
`
