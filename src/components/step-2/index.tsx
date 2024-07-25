import { BillingType, StepProps } from "../../types"
import { StepForm } from "../step-form"
import { Forms } from "../../data/form"
import { useState } from "preact/hooks"
import { Icons } from "./constants"

import * as S from "./styled"

const { step2 } = Forms

const DEFAULT_PLAN = 1
const DEFAULT_BILLING_TYPE = "monthly"

export function Step2(props: StepProps) {
  const [billingType, setBillingType] =
    useState<BillingType>(DEFAULT_BILLING_TYPE)
  const [selectedPlan, setSelectedPlan] = useState<number>(DEFAULT_PLAN)
  console.log(billingType)

  function handleChangePlan(id: number) {
    setSelectedPlan(id)
  }

  function handleChangeBillingType(billingType: BillingType) {
    setBillingType(billingType)
  }

  return (
    <StepForm {...props}>
      <S.Step2>
        <S.RadioGroup>
          {step2[billingType].map((item) => (
            <S.RadioLabel
              key={item.id}
              $selectedPlan={item.id === selectedPlan}
              $isYearly={billingType === "yearly"}
            >
              <S.RadioInput
                name="plan-type"
                type="radio"
                onChange={() => handleChangePlan(item.id)}
              />
              <S.Icon src={Icons[item.id]} />
              <S.Title>{item.title}</S.Title>
              <S.Subtitle>{item.price}</S.Subtitle>
              {billingType === "yearly" && (
                <S.Description>{item.description}</S.Description>
              )}
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
