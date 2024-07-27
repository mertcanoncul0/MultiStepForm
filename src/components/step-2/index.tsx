import { BillingType, Plan, StepProps } from "../../types"
import { StepForm } from "../step-form"
import { Forms } from "../../data/form"
import { useState } from "preact/hooks"
import { Icons } from "./constants"

import * as S from "./styled"

const { step2 } = Forms

const DEFAULT_BILLING_TYPE = "monthly"
const DEFAULT_PLAN = step2[DEFAULT_BILLING_TYPE][0]

export function Step2({
  onStepSubmit,
  formData,
  handleBack,
  ...props
}: StepProps) {
  const [billingType, setBillingType] = useState<BillingType>(
    formData.step2.billingType || DEFAULT_BILLING_TYPE
  )
  const [selectedPlan, setSelectedPlan] = useState<Plan>(
    formData.step2.selectedPlan || DEFAULT_PLAN
  )

  function handleChangePlan(item: Plan) {
    setSelectedPlan(item)
  }

  function handleChangeBillingType(billingType: BillingType) {
    setBillingType(billingType)
  }

  function handleSubmit(e: Event) {
    e.preventDefault()

    onStepSubmit("step2", "step3", {
      selectedPlan: step2[billingType].find((x) => x.id === selectedPlan.id),
      billingType,
    })
  }

  return (
    <StepForm
      {...props}
      onSubmit={handleSubmit}
      onBack={handleBack}
      isBillingForm
    >
      <S.Step2>
        <S.RadioGroup>
          {step2[billingType].map((item: any) => (
            <S.RadioLabel
              key={item.id}
              $selectedPlan={selectedPlan.id === item.id}
              $isYearly={billingType === "yearly"}
            >
              <S.RadioInput
                name="plan-type"
                type="radio"
                onChange={() => handleChangePlan(item)}
              />
              <S.Icon src={Icons[item.id]} />
              <S.TitleWrapper>
                <S.Title>{item.title}</S.Title>
                <S.Subtitle>{item.price}</S.Subtitle>
                {billingType === "yearly" && (
                  <S.Description>{item.description}</S.Description>
                )}
              </S.TitleWrapper>
            </S.RadioLabel>
          ))}
        </S.RadioGroup>

        <S.BillingGroup $billingType={billingType}>
          <S.BillingLabel>
            <S.BillingName
              $selected={billingType === "monthly"}
              onClick={() => handleChangeBillingType("monthly")}
            >
              Monthly
            </S.BillingName>
            <S.BillingInput type="checkbox" />
            <S.BillingSpan></S.BillingSpan>
            <S.BillingName
              $selected={billingType === "yearly"}
              onClick={() => handleChangeBillingType("yearly")}
            >
              Yearly
            </S.BillingName>
          </S.BillingLabel>
        </S.BillingGroup>
      </S.Step2>
    </StepForm>
  )
}
