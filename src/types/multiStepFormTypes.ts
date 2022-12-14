interface PersonalInfosTypes {
  name: string
  email: string
  phone: string
}

interface AddonsTypes {
  choices: string[]
}

type planTypes = 'Arcade' | 'Advanced' | 'Pro'

type periodTypes = 'Monthly' | 'Yearly'

interface SelectPlanTypes {
  plan: planTypes
  period: periodTypes
}

interface SummaryTypes {
  confirm: boolean
}

type formTargetType = 'personalInfos' | 'addOns' | 'selectPlan' | 'summary'

interface pricesType {
  [key: string]: { [key: string]: number }
}

interface FormDatasType {
  personalInfos: PersonalInfosTypes
  addOns: AddonsTypes
  selectPlan: SelectPlanTypes
  summary: SummaryTypes
}

type formDatasTypes =
  | PersonalInfosTypes
  | AddonsTypes
  | SelectPlanTypes
  | SummaryTypes

type onGoBackType = 1 | 2 | 3 | 4 | 5

interface FormProps {
  onGoNext: () => void
  onGoBack: (forceStep?: onGoBackType) => void
  saveData: (formDatas: formDatasTypes, formTarget: formTargetType) => void
}

export {
  PersonalInfosTypes,
  AddonsTypes,
  SelectPlanTypes,
  SummaryTypes,
  FormProps,
  FormDatasType,
  formDatasTypes,
  formTargetType,
  planTypes,
  periodTypes,
  pricesType,
  onGoBackType,
}
