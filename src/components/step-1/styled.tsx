import styled from "styled-components"

export const Step1 = styled.div``

export const Input = styled.input`
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  color: var(--marine-blue);
  border: 1px solid hsl(231, 23%, 87%, 100%);
  width: 100%;
  height: 48px;
  border-radius: 8px;
  color: var(--marine-blue);
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline-color: var(--purplish-blue);
  }

  &:hover {
    border-color: var(--purplish-blue);
  }

  &::placeholder {
    color: var(--cool-gray);
  }
`

export const Label = styled.label`
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  color: var(--marine-blue);
  margin-bottom: 8px;
`

export const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: var(--strawberry-red);
  position: absolute;
  top: 2px;
  right: 0;
`

export const FormItem = styled.div<{ $error: boolean }>`
  position: relative;
  margin-bottom: 24px;

  ${Input} {
    ${({ $error }) =>
      $error &&
      `
    border-color: var(--strawberry-red);
    outline-color: var(--strawberry-red);
  `}
  }
`
