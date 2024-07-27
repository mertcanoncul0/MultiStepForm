import styled from "styled-components"

export const MultiStepForm = styled.div`
  display: flex;
  background-color: var(--white);
  border-radius: 15px;
  height: 600px;
  width: 940px;
  box-shadow: 0 25px 40px -20px rgba(0, 0, 0, 0.0951);

  @media (width <= 1000px) {
    width: 764px;
  }

  @media (width <= 768px) {
    width: 100%;
    flex-direction: column;
    background-color: transparent;
    box-shadow: none;
  }
`
