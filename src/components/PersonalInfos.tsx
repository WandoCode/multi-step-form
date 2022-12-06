import { useState } from 'react'
import { FormProps, PersonalInfosTypes } from '../types/multiStepFormTypes'
import CustomForm from './CustomForm'

function PersonalInfos({
  onGoNext,
  onGoBack,
  currDatas, // TODO: quand on clique sur "go back", il faut que le formulaire soit rempli par les infos données par l'utilisateur juste avant.
}: FormProps): JSX.Element {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const title = 'Personal Info'
  const description =
    'Please provide your name, email address, and phone number.'

  const submitForm = () => {
    // TODO: Valid form datas and show errors
    const datas: PersonalInfosTypes = {
      name,
      email,
      phone,
    }

    onGoNext(datas, 'personalInfos')
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
    >
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </CustomForm>
  )
}

export default PersonalInfos
