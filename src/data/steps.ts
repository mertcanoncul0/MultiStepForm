import { Step1 } from "../components/step-1"
import { Step2 } from "../components/step-2"
import { Step3 } from "../components/step-3"
import { Step4 } from "../components/step-4"
import { Step5, StepEnd } from "../components/step-end"
import { StepConfig } from "../types"

export const Steps: { [key: string]: StepConfig } = {
  step1: {
    component: Step1,
    title: "Personal info",
    subtitle: "Please provide your name, email address, and phone number.",
    hasNextStep: true,
    hasBackStep: false,
  },
  step2: {
    component: Step2,
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing.",
    hasNextStep: true,
    hasBackStep: true,
  },
  step3: {
    component: Step3,
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
    hasNextStep: true,
    hasBackStep: true,
  },
  step4: {
    component: Step4,
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before confirming.",
    hasNextStep: true,
    hasBackStep: true,
  },
  stepend: {
    component: StepEnd,
  },
}
