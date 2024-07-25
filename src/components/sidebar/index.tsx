import { Items } from "./constants"
import * as S from "./styled"

export function Sidebar() {
  return (
    <S.Sidebar>
      {Items.map((item) => (
        <S.Item key={item.subtitle}>
          <S.ItemNumber $active={item.id === "step1"}>
            {item.number}
          </S.ItemNumber>
          <S.ItemBody>
            <S.Subtitle>{item.subtitle}</S.Subtitle>
            <S.Title>{item.title}</S.Title>
          </S.ItemBody>
        </S.Item>
      ))}
    </S.Sidebar>
  )
}
