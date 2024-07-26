import { Forms } from "../../data/form"
import { getFirstCharBig, sumTotalPrice } from "../../helper"
import { BillingType, Plan, StepProps } from "../../types"
import { StepForm } from "../step-form"

import * as S from "./styled"

export function Step4({
  handleBack,
  formData,
  changeBillingType,
  onStepSubmit,
  ...props
}: StepProps) {
  const { selectedAddons } = formData.step3 as { selectedAddons: Plan[] }
  const { billingType, selectedPlan } = formData.step2 as {
    billingType: BillingType
    selectedPlan: Plan
  }

  function handleSubmit(e: Event) {
    e.preventDefault()

    onStepSubmit("step4", "stepend", {})
  }

  return (
    <StepForm {...props} onBack={handleBack} onSubmit={handleSubmit}>
      <S.Step4>
        <S.MainRow>
          <S.BillingRow>
            <S.BillingWrapper>
              <S.Title>
                {selectedPlan.title} (
                {getFirstCharBig(formData.step2.billingType)})
              </S.Title>
              <S.Subtitle
                onClick={() => {
                  if (changeBillingType) {
                    changeBillingType(
                      billingType === "monthly" ? "yearly" : "monthly"
                    )
                  }
                }}
              >
                Change
              </S.Subtitle>
            </S.BillingWrapper>

            <S.Price>
              {
                Forms.step2[billingType].find((x) => x.id === selectedPlan.id)
                  ?.price
              }
            </S.Price>
          </S.BillingRow>

          {selectedAddons.length > 0 &&
            selectedAddons.map((item: Plan) => (
              <S.SubRow key={item.id}>
                <S.Title>{item.title}</S.Title>
                <S.Price>
                  {
                    Forms.step3[billingType].find((x) => x.id === item.id)
                      ?.price
                  }
                </S.Price>
              </S.SubRow>
            ))}
        </S.MainRow>

        <S.TotalRow>
          <S.Title>Total (per {billingType})</S.Title>
          <S.TotalAmount>
            +$
            {sumTotalPrice(selectedPlan, selectedAddons, billingType)}/
            {billingType == "monthly" ? "mo" : "yr"}
          </S.TotalAmount>
        </S.TotalRow>
      </S.Step4>
    </StepForm>
  )
}
