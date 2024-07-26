import { useState } from "preact/hooks"
import { Forms } from "../../data/form"
import { StepProps } from "../../types"
import { StepForm } from "../step-form"

import * as S from "./styled"

export function Step1({ onStepSubmit, formData, ...props }: StepProps) {
  const { step1 } = Forms
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleSubmit(e: Event) {
    e.preventDefault()

    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    ) as Record<string, string>

    const newErrors: Record<string, string> = {}
    const requiredFields = ["emailAddress", "name", "phoneNumber"]

    for (const field of requiredFields) {
      if (!formData[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onStepSubmit("step1", "step2", formData)
  }
  console.log(errors)

  return (
    <StepForm {...props} onSubmit={handleSubmit}>
      <S.Step1>
        {step1.map((item) => (
          <S.FormItem key={item.id} $error={!!errors[item.name]}>
            <S.Label htmlFor={item.id}>{item.label}</S.Label>
            <S.Input
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              id={item.id}
              value={!!errors[item.name] ? "" : formData.step1[item.name]}
            />
            {errors[item.name] && (
              <S.ErrorMessage>This field is required</S.ErrorMessage>
            )}
          </S.FormItem>
        ))}
      </S.Step1>
    </StepForm>
  )
}
