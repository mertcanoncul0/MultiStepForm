import { Sidebar } from "../sidebar"
import { Step } from "../step"

import * as S from "./styled"

export function MultiStepForm() {
  return (
    <S.MultiStepForm>
      <Sidebar />
      <Step />
    </S.MultiStepForm>
  )
}
