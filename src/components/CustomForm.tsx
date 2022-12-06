import { useMemo } from 'react'

interface propsTypes {
  title: string
  description: string
  onClickNextStep: () => void
  onClickPrecStep: () => void
  children: React.ReactNode
  showCancelButton?: boolean
  showConfirmButton?: boolean
  addClass?: string
}

function CustomForm({
  title,
  description,
  onClickNextStep,
  onClickPrecStep,
  children,
  showCancelButton = true,
  showConfirmButton = false,
  addClass,
}: propsTypes): JSX.Element {
  const handleGoBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    onClickPrecStep()
  }

  const handleGoNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onClickNextStep()
  }

  const mainClass = useMemo(() => {
    let classString = 'custom-form__form '
    return addClass ? classString + addClass : classString
  }, [addClass])

  return (
    <div className="custom-form">
      <div className="custom-form__heading">
        <h1 className="h1">{title}</h1>

        <p>{description}</p>
      </div>
      <form className={mainClass} onSubmit={handleGoNext}>
        {children}

        <div className="custom-form__nav-controler">
          {showCancelButton && (
            <button
              onClick={handleGoBack}
              className="btn btn--light custom-form__left-btn"
            >
              Go Back
            </button>
          )}

          {showConfirmButton ? (
            <button
              type="submit"
              className="btn btn--confirm custom-form__right-btn"
            >
              Confirm
            </button>
          ) : (
            <button type="submit" className="btn custom-form__right-btn">
              Next Step
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default CustomForm
