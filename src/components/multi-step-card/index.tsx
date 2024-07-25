import { Steps } from "../../data/steps"
import { useStickyState } from "../../hooks/use-sticky-state"
import { Sidebar } from "../sidebar"

import * as S from "./styled"

export function MultiStepCard() {
  const [activeStep] = useStickyState("step1", "activeStep")
  const { component: ActiveStep, ...stepProps } = Steps[activeStep]

  return (
    <S.MultiStepForm>
      <Sidebar activeStep={activeStep} />
      <ActiveStep {...stepProps} />
    </S.MultiStepForm>
  )
}
