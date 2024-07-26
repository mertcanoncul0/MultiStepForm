import { Steps } from "../../data/steps"
import { useStickyState } from "../../hooks/use-sticky-state"
import { Sidebar } from "../sidebar"

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
    stepData: Record<string, string>
  ) {
    setFormData({ ...formData, [stepId]: stepData })
    setActiveStep(nextStepId)
  }

  console.log(formData)

  function onBack() {
    const currentStepNumber = Number(activeStep.slice(-1))

    setActiveStep(`step${currentStepNumber - 1}`)
  }

  console.log(activeStep)

  return (
    <S.MultiStepForm>
      <Sidebar activeStep={activeStep} />
      <ActiveStep
        {...stepProps}
        onStepSubmit={handleStepSubmit}
        formData={formData}
        handleBack={onBack}
      />
    </S.MultiStepForm>
  )
}
