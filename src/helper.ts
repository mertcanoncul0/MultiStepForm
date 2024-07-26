import { Forms } from "./data/form"
import { BillingType, Plan } from "./types"

export function getFirstCharBig(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function sumTotalPrice(
  selectedPlan: Plan,
  selectedAddons: Plan[],
  billingType: BillingType
): number {
  const selectedPlanPrice = Forms.step2[billingType].find(
    (x) => x.id === selectedPlan.id
  )?.priceAmount as number

  const selectedAddonsPrice = selectedAddons.reduce(
    (acc, cur) => acc + cur.priceAmount,
    0
  ) as number

  return selectedPlanPrice + selectedAddonsPrice
}
