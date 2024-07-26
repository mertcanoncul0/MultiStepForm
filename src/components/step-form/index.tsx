import { StepFormProps } from "../../types"
import * as S from "./styled"

export function StepForm({
  title,
  subtitle,
  children,
  hasNextStep,
  hasBackStep,
  onSubmit,
  onBack,
}: StepFormProps) {
  return (
    <S.StepForm onSubmit={onSubmit}>
      <S.StepHeader>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.StepHeader>
      <S.Body>{children}</S.Body>
      <S.StepFooter>
        {hasBackStep && (
          <S.GoBackButton type="button" onClick={onBack}>
            Back
          </S.GoBackButton>
        )}
        {hasNextStep ? (
          <S.GoNextButton type="submit">Next</S.GoNextButton>
        ) : (
          <S.ConfirmButton type="submit">Confirm</S.ConfirmButton>
        )}
      </S.StepFooter>
    </S.StepForm>
  )
}
