import { PersonalInfosTypes } from '../types/multiStepFormTypes'

function validation() {
  // ^\S{3,}$ : le string commence et finit par "Pas un whitespace", d'une longueur de 3 ou plus.
  const nameRE = /^\S{3,}$/

  // Source: https://regexr.com/2rhq7
  const emailRE =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  // Source : https://regexr.com/38pvb
  const phoneRE =
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm

  const validPersonalDatas = ({ name, email, phone }: PersonalInfosTypes) => {
    const errors: string[] = []

    if (!name.match(nameRE)) errors.push('name')

    if (!email.match(emailRE)) errors.push('email')

    if (!phone.match(phoneRE)) errors.push('phone')

    return errors
  }

  return { validPersonalDatas }
}

export default validation
