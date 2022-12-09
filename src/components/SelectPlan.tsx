import React, { useEffect, useMemo, useState } from 'react'
import {
  FormProps,
  periodTypes,
  planTypes,
  pricesType,
  SelectPlanTypes,
} from '../types/multiStepFormTypes'
import CustomForm from './CustomForm'
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'
import PlanSelectLabel from './planSelectLabel'
import validation from '../utility/validation'

interface SelectPlanProps extends FormProps {
  currDatas?: SelectPlanTypes
  prices: pricesType
}

function SelectPlan({
  onGoNext,
  onGoBack,
  currDatas,
  prices,
  saveData,
}: SelectPlanProps): JSX.Element {
  const [plan, setPlan] = useState<planTypes>('Arcade')
  const [period, setPeriod] = useState<periodTypes>('Monthly')

  const title = 'Select your plan'
  const description = 'You have the option of monthly or yearly billing.'

  useEffect(() => {
    if (currDatas?.plan) setPlan(currDatas.plan)
    if (currDatas?.period) setPeriod(currDatas.period)
  }, [])

  const submitForm = () => {
    // A validation should be done in backend to check if value has been modified
    const datas: SelectPlanTypes = {
      plan,
      period,
    }

    saveData(datas, 'selectPlan')
    onGoNext()
  }

  const cancelForm = () => {
    const datas: SelectPlanTypes = {
      plan,
      period,
    }

    saveData(datas, 'selectPlan')
    onGoBack()
  }

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked

    isChecked ? setPeriod('Yearly') : setPeriod('Monthly')
  }

  const monthlyLabelClass = useMemo(() => {
    return period === 'Monthly' ? '' : 'inactive'
  }, [period])

  const yearlyLabelClass = useMemo(() => {
    return period === 'Yearly' ? '' : 'inactive'
  }, [period])

  return (
    <CustomForm
      title={title}
      description={description}
      onClickNextStep={submitForm}
      onClickPrecStep={cancelForm}
      addClass="select-plan"
    >
      <div className="form-control">
        <input
          type="radio"
          id="arcade"
          checked={plan === 'Arcade'}
          onChange={() => setPlan('Arcade')}
          className="hide-input"
        />

        <PlanSelectLabel
          image={arcadeIcon}
          title="Arcade"
          price={prices[period]['Arcade']}
          period={period}
          tips="2 months free"
          id="arcade"
        />

        <input
          type="radio"
          id="advanced"
          checked={plan === 'Advanced'}
          onChange={() => setPlan('Advanced')}
          className="hide-input"
        />

        <PlanSelectLabel
          image={advancedIcon}
          title="Advanced"
          price={prices[period]['Advanced']}
          period={period}
          tips="2 months free"
          id="advanced"
        />

        <input
          type="radio"
          id="pro"
          checked={plan === 'Pro'}
          onChange={() => setPlan('Pro')}
          className="hide-input"
        />

        <PlanSelectLabel
          image={proIcon}
          title="Pro"
          price={prices[period]['Pro']}
          period={period}
          tips="2 months free"
          id="pro"
        />
      </div>

      <div className="form-control form-control--switch">
        <div className="select-plan__switch-controler">
          <label htmlFor="period" className={monthlyLabelClass}>
            Monthly
          </label>
          <input
            type="checkbox"
            name="period"
            checked={period === 'Yearly'}
            id="period"
            onChange={handleSwitch}
            className="hide-input"
          />
          <label htmlFor="period" className="select-plan__switch">
            <span className="select-plan__slider"></span>
          </label>
          <label htmlFor="period" className={yearlyLabelClass}>
            Yearly
          </label>
        </div>
      </div>
    </CustomForm>
  )
}

export default SelectPlan
