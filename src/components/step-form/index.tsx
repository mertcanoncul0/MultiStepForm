import { StepFormProps } from "../../types"
import * as S from "./styled"

export function StepForm({
  title,
  subtitle,
  children,
  hasNextStep,
  hasBackStep,
}: StepFormProps) {
  return (
    <S.StepForm>
      <S.StepHeader>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.StepHeader>
      <S.Body>{children}</S.Body>
      <S.StepFooter>
        {hasBackStep && <S.GoBackButton>Back</S.GoBackButton>}
        {hasNextStep && <S.GoNextButton>Next</S.GoNextButton>}
      </S.StepFooter>
    </S.StepForm>
  )
}
