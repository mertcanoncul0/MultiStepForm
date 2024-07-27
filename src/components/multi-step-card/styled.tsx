import styled from "styled-components"

export const MultiStepForm = styled.div`
  display: flex;
  background-color: var(--white);
  border-radius: 15px;
  height: 600px;
  width: 940px;
  box-shadow: 0 25px 40px -20px rgba(0, 0, 0, 9.51%);

  @media (width <= 1000px) {
    width: 764px;
  }

  @media (width <= 768px) {
    width: 100vw;
    flex-direction: column;
    background-color: transparent;
    box-shadow: none;
  }
`

export const Title = styled.h1`
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
