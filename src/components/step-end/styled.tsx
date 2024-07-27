import styled from "styled-components"

export const Step5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 450px;
  margin-inline: auto;
  box-shadow: 0 25px 40px -20px rgba(0, 0, 0, 9.51%);

  @media (max-width: 768px) {
    margin: 56px 100px 32px 100px;
    width: 450px;
    display: flex;
    flex-direction: column;

    background-color: var(--white);
    margin: 0 auto;
    padding: 32px 24px;
    border-radius: 10px;
    position: absolute;
    top: 34.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }

  @media (width <= 500px) {
    top: 33%;
  }

  @media (width <= 450px) {
    top: 33%;
    width: 343px;
  }
`

export const MainRow = styled.div``

export const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-inline: auto;
  margin-bottom: 32px;
`

export const Title = styled.h2`
  color: var(--marine-blue);
  font-size: 32px;
  margin-bottom: 14px;
`

export const Description = styled.p`
  color: var(--cool-gray);
  font-size: 16px;
  line-height: 25px;
`
