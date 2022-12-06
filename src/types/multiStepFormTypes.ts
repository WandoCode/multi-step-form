interface PersonalInfosTypes {
  name: string
  email: string
  phone: string
}

interface AddonsTypes {
  choices: Array<string>
}

interface SelectPlanTypes {
  plan: 'Arcade' | 'Advanced' | 'Pro'
  period: 'Monthly' | 'Yearly'
}

interface SummaryTypes {
  confirm: boolean
}

type formTargetType = 'personalInfos' | 'addOns' | 'selectPlan' | 'summary'

interface FormDatasType {
  personalInfos?: formDatasTypes
  addOns?: formDatasTypes
  selectPlan?: formDatasTypes
  summary?: formDatasTypes
}

type formDatasTypes =
  | PersonalInfosTypes
  | AddonsTypes
  | SelectPlanTypes
  | SummaryTypes

interface FormProps {
  onFormSubmit: (formDatas: formDatasTypes, formTarget: formTargetType) => void
  onGoBack: () => void
  currDatas?: formDatasTypes | undefined
  allDatas?: FormDatasType
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
}
