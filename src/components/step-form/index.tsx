import { forwardRef } from "react"
import * as S from "./styled"
import { StepFormProps } from "../../types"

export const StepForm = forwardRef<HTMLFormElement, StepFormProps>(
  (
    {
      title,
      subtitle,
      hasNextStep,
      hasBackStep,
      onBack,
      onSubmit,
      children,
      isBillingForm,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <S.StepForm ref={ref} {...props} $isBillingForm={isBillingForm}>
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
              <S.GoNextButton onClick={onSubmit}>Next Step</S.GoNextButton>
            ) : (
              <S.ConfirmButton onClick={onSubmit}>Confirm</S.ConfirmButton>
            )}
          </S.StepFooter>
        </S.StepForm>
        <S.StepFooterMobile>
          {hasBackStep && (
            <S.GoBackButton type="button" onClick={onBack}>
              Back
            </S.GoBackButton>
          )}
          {hasNextStep ? (
            <S.GoNextButton onClick={onSubmit}>Next Step</S.GoNextButton>
          ) : (
            <S.ConfirmButton onClick={onSubmit}>Confirm</S.ConfirmButton>
          )}
        </S.StepFooterMobile>
      </>
    )
  }
)
