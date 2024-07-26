import { Forms } from "../../data/form"
import { StepProps } from "../../types"
import { StepForm } from "../step-form"

import * as S from "./styled"

export function Step1({ onStepSubmit, formData, ...props }: StepProps) {
  const { step1 } = Forms

  function handleSubmit(e: Event) {
    e.preventDefault()

    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    ) as Record<string, string>

    onStepSubmit("step1", "step2", formData)
  }

  return (
    <StepForm {...props} onSubmit={handleSubmit}>
      <S.Step1>
        {step1.map((item) => (
          <S.FormItem key={item.id} $error={false}>
            <S.Label htmlFor={item.id}>{item.label}</S.Label>
            <S.Input
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              id={item.id}
              value={formData.step1[item.name]}
            />
            {false && <S.ErrorMessage>This field is required</S.ErrorMessage>}
          </S.FormItem>
        ))}
      </S.Step1>
    </StepForm>
  )
}
