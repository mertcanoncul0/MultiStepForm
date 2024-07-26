import { Forms } from "../../data/form"
import { Steps } from "../../data/steps"
import { useStickyState } from "../../hooks/use-sticky-state"
import { BillingType, Plan } from "../../types"
import { Sidebar } from "../sidebar"
import { StepEnd } from "../step-end"

import * as S from "./styled"

export function MultiStepCard() {
  const [formData, setFormData] = useStickyState(
    {
      step1: {},
      step2: {},
      step3: {},
    },
    "formData"
  )

  const [activeStep, setActiveStep] = useStickyState("step1", "activeStep")
  const { component: ActiveStep, ...stepProps } = Steps[activeStep]

  function handleStepSubmit(
    stepId: string,
    nextStepId: string,
    stepData: Record<any, any>
  ) {
    if (!(Object.keys(stepData).length === 0)) {
      setFormData({ ...formData, [stepId]: stepData })
    }

    setActiveStep(nextStepId)
  }

  function onBack() {
    const currentStepNumber = Number(activeStep.slice(-1))

    setActiveStep(`step${currentStepNumber - 1}`)
  }

  function handleChangeBillingType(billingType: BillingType) {
    setFormData({
      ...formData,
      step2: {
        billingType,
        selectedPlan: Forms.step2[billingType].find(
          (x) => x.id === formData.step2.selectedPlan.id
        ),
      },
      step3: {
        selectedAddons: formData.step3.selectedAddons.map((addon: Plan) => ({
          ...addon,
          ...Forms.step3[billingType].find((x) => x.id === addon.id),
        })),
      },
    })
  }

  return (
    <S.MultiStepForm>
      <Sidebar activeStep={activeStep} />
      <ActiveStep
        {...stepProps}
        onStepSubmit={handleStepSubmit}
        formData={formData}
        handleBack={onBack}
        changeBillingType={handleChangeBillingType}
      />
    </S.MultiStepForm>
  )
}
