import { useState } from "preact/hooks"
import { Forms } from "../../data/form"
import { BillingType, Plan, StepProps } from "../../types"
import { StepForm } from "../step-form"

const { step3 } = Forms

import * as S from "./styled"
import { ChangeEvent } from "preact/compat"

export function Step3({
  onStepSubmit,
  formData,
  handleBack,
  ...props
}: StepProps) {
  const { billingType } = formData.step2 as { billingType: BillingType }
  const [selectedAddons, setSelectedAddons] = useState<Plan[]>(
    formData.step3.selectedAddons || []
  )
  function changeSelectedAddons(checked: boolean, selectedAddon: Plan) {
    if (checked) {
      setSelectedAddons((prev: Plan[]) => [...prev, selectedAddon])
    } else {
      setSelectedAddons((prev: Plan[]) =>
        prev.filter((addon) => addon.id !== selectedAddon.id)
      )
    }
  }

  function handleSubmit(e: Event) {
    e.preventDefault()

    onStepSubmit("step3", "step4", {
      selectedAddons,
    })
  }

  function selectedAddon(id: number) {
    for (const addon of selectedAddons) {
      if (addon.id === id) return true
    }

    return false
  }

  return (
    <StepForm {...props} onSubmit={handleSubmit} onBack={handleBack}>
      <S.Step3>
        {step3[billingType].map((item: Plan) => (
          <S.Item key={item.id} $isSelected={selectedAddon(item.id)}>
            <S.Input
              type="checkbox"
              checked={selectedAddon(item.id)}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const target = e.target as HTMLInputElement
                changeSelectedAddons(target.checked, item)
              }}
            />
            <S.InputBody>
              <S.Title>{item.title}</S.Title>
              <S.Subtitle>{item.title}</S.Subtitle>
            </S.InputBody>
            <S.Price>{item.price}</S.Price>
          </S.Item>
        ))}
      </S.Step3>
    </StepForm>
  )
}
