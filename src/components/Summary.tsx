import {
  FormDatasType,
  FormProps,
  periodTypes,
  pricesType,
  SummaryTypes,
} from '../types/multiStepFormTypes'
import { formatPrice, getTotalPrice } from '../utility/helpers'
import CustomForm from './CustomForm'

interface SummaryProps extends FormProps {
  allDatas?: FormDatasType
  prices: pricesType
}

const periodNoun = {
  Monthly: 'month',
  Yearly: 'year',
}

function Summary({
  onGoNext,
  onGoBack,
  allDatas,
  prices,
  saveData,
}: SummaryProps): JSX.Element {
  const title = 'Finishing up'
  const description = 'Double-check everything looks OK before confirming.'

  const plan = allDatas?.selectPlan?.plan || 'Arcade' // TODO: ex de gardefous a retirer
  const period = allDatas?.selectPlan?.period || 'Monthly' //TODO: idem
  const addons = allDatas?.addOns?.choices || [] // TODO: idem
  const planPrice = formatPrice(prices[period][plan])

  const totalPrice = formatPrice(getTotalPrice(prices, addons, plan, period))

  const submitForm = () => {
    // TODO: Valid form datas
    const datas: SummaryTypes = {
      confirm: true,
    }

    saveData(datas, 'selectPlan')
    onGoNext()
  }

  const cancelForm = () => {
    onGoBack()
  }

  const handleGoPlan = () => {
    onGoBack(2)
  }

  const addonsDOM = addons.map((el) => {
    const addonPrice = formatPrice(prices[period][el])
    return (
      <div className="summary__addon-item" key={el}>
        <p className="summary__addon-text">{el}</p>
        <p className="summary__addon-value">+{addonPrice}</p>
      </div>
    )
  })

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
            <p className="summary__plan-link" onClick={handleGoPlan}>
              Change
            </p>
          </div>
          <p className="summary__plan-value">{planPrice}</p>
        </div>
        <div className="summary__addons">{addonsDOM}</div>
      </div>
      <div className="summary__total">
        <p className="summary__total-text">Total (per {periodNoun[period]})</p>
        <p className="summary__total-value">{totalPrice}</p>
      </div>
    </CustomForm>
  )
}

export default Summary

//TODO: saves form on when click on Goback button too
