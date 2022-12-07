import {
  FormDatasType,
  FormProps,
  pricesType,
  SummaryTypes,
} from '../types/multiStepFormTypes'
import CustomForm from './CustomForm'

interface SummaryProps extends FormProps {
  allDatas?: FormDatasType
  prices: pricesType
}

function Summary({
  onGoNext,
  onGoBack,
  allDatas,
  prices,
}: SummaryProps): JSX.Element {
  const title = 'Finishing up'
  const description = 'Double-check everything looks OK before confirming.'

  const plan = allDatas?.selectPlan?.plan
  const period = allDatas?.selectPlan?.period
  const addons = allDatas?.addOns?.choices

  const submitForm = () => {
    // TODO: Valid form datas and show errors
    const datas: SummaryTypes = {
      confirm: true,
    }

    onGoNext(datas, 'selectPlan')
  }

  const cancelForm = () => {
    onGoBack()
  }

  return (
    <CustomForm
      title={title}
      description={description}
      onClickNextStep={submitForm}
      onClickPrecStep={cancelForm}
      showConfirmButton={true}
      addClass="summary"
    >
      <div className="summary__datas">
        <div className="summary__plan-wrapper">
          <div className="summary__plan-text">
            <p className="summary__plan">{`${plan}(${period})`}</p>
            <a href="#" className="summary__plan-link">
              Change
            </a>
          </div>
          <p className="summary__plan-value"></p>
        </div>
        <div className="summary__addons">
          <div className="summary__addonn-item"></div>
          <p className="summary__addons-text"></p>
          <p className="summary__addons-value"></p>
        </div>
      </div>
    </CustomForm>
  )
}

export default Summary
