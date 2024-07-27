import { Items } from "./constants"
import * as S from "./styled"

export function Sidebar({
  activeStep,
  setHandleStep,
}: {
  activeStep: string
  setHandleStep: (stepId: string) => void
}) {
  return (
    <S.Sidebar>
      {Items.map((item) => (
        <S.Item
          key={item.subtitle}
          $active={item.id === activeStep}
          onClick={() => setHandleStep(item.id)}
        >
          <S.ItemNumber>{item.number}</S.ItemNumber>
          <S.ItemBody>
            <S.Subtitle>{item.subtitle}</S.Subtitle>
            <S.Title>{item.title}</S.Title>
          </S.ItemBody>
        </S.Item>
      ))}
    </S.Sidebar>
  )
}
