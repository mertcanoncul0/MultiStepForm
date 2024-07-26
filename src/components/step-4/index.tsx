import { StepProps } from "../../types"
import { StepForm } from "../step-form"

export function Step4({ handleBack, ...props }: StepProps) {
  return (
    <StepForm {...props} onBack={handleBack}>
      Step4
    </StepForm>
  )
}
