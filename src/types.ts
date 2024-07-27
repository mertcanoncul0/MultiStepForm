import { JSX, Ref } from "preact"

export type StepProps = {
  title: string
  subtitle: string
  hasNextStep: boolean
  hasBackStep: boolean
  onStepSubmit(
    stepId: string,
    nextStepId: string,
    formData: Record<any, any>
  ): void
  formData?: any
  handleBack?: () => void
  changeBillingType?: (billingType: BillingType) => void
}

export type StepFormProps = {
  title: string
  subtitle: string
  children: React.ReactNode
  hasNextStep: boolean
  hasBackStep: boolean
  onSubmit?: (e: Event) => void
  onBack?: () => void
  isBillingForm?: boolean
  ref?: Ref<HTMLFormElement>
}

export type StepConfig = {
  component: (props: StepProps) => JSX.Element
  title?: string
  subtitle?: string
  hasNextStep?: boolean
  hasBackStep?: boolean
} & StepProps

export type BillingType = "monthly" | "yearly"

export type FormField = {
  id: string
  label: string
  type: string
  placeholder: string
  name: string
}

export type Plan = {
  id: number
  icon?: string
  title: string
  price: string
  description?: string
  priceAmount: number
}

export type Forms = {
  step1: FormField[]
  step2: {
    [key in BillingType]: Plan[]
  }
  step3: {
    [key in BillingType]: Plan[]
  }
}
