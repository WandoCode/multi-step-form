import React, { useMemo, useState } from 'react'
import {
  FormProps,
  periodTypes,
  planTypes,
  SelectPlanTypes,
} from '../types/multiStepFormTypes'
import CustomForm from './CustomForm'
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'
import PlanSelectLabel from './planSelectLabel'

interface SelectPlanProps extends FormProps {
  currDatas?: SelectPlanTypes
}

function SelectPlan({
  onGoNext,
  onGoBack,
  currDatas,
}: SelectPlanProps): JSX.Element {
  const [plan, setPlan] = useState<planTypes>('Arcade')
  const [period, setPeriod] = useState<periodTypes>('Monthly')

  const title = 'Select your plan'
  const description = 'You have the option of monthly or yearly billing.'

  const submitForm = () => {
    // TODO: Valid form datas and show errors
    const datas: SelectPlanTypes = {
      plan,
      period,
    }

    onGoNext(datas, 'selectPlan')
  }

  const cancelForm = () => {
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
          price={{ Monthly: 9, Yearly: 90 }}
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
          price={{ Monthly: 12, Yearly: 120 }}
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
          price={{ Monthly: 15, Yearly: 150 }}
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
