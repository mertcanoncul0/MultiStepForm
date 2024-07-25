import styled from "styled-components"

export const StepForm = styled.form`
  padding: 56px 100px 0 88px;
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
  margin-bottom: 92px;
`

export const StepFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
