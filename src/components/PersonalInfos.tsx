import { useState } from 'react'
import { FormProps, PersonalInfosTypes } from '../types/multiStepFormTypes'
import validation from '../utility/validation'
import CustomForm from './CustomForm'

interface PersonalInfosProps extends FormProps {
  currDatas: PersonalInfosTypes
}

function PersonalInfos({
  onGoNext,
  onGoBack,
  currDatas,
  saveData,
}: PersonalInfosProps): JSX.Element {
  const [name, setName] = useState(currDatas.name)
  const [email, setEmail] = useState(currDatas.email)
  const [phone, setPhone] = useState(currDatas.phone)
  const [errors, setErrors] = useState<string[]>([])

  const title = 'Personal Info'
  const description =
    'Please provide your name, email address, and phone number.'

  const submitForm = () => {
    const datas: PersonalInfosTypes = {
      name,
      email,
      phone,
    }

    const validationErrors = validation().validPersonalDatas(datas)
    const datasAreValid = validationErrors.length === 0

    if (!datasAreValid) {
      setErrors([...validationErrors])
      return
    } else {
      setErrors([])
    }

    saveData(datas, 'personalInfos')
    onGoNext()
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
      showCancelButton={false}
      addClass="personal-info"
    >
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={errors.includes('name') ? 'input-error' : ''}
        />
        {errors.includes('name') && (
          <div className="text-error">Invalid name</div>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={errors.includes('email') ? 'input-error' : ''}
        />
        {errors.includes('email') && (
          <div className="text-error">Invalid email</div>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className={errors.includes('phone') ? 'input-error' : ''}
        />
        {errors.includes('phone') && (
          <div className="text-error">Invalid phone number</div>
        )}
      </div>
    </CustomForm>
  )
}

export default PersonalInfos
