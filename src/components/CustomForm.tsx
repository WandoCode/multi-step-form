interface propsTypes {
  title: string
  description: string
  onClickNextStep: () => void
  onClickPrecStep: () => void
  children: React.ReactNode
  showCancelButton?: boolean
  showConfirmButton?: boolean
}

function CustomForm({
  title,
  description,
  onClickNextStep,
  onClickPrecStep,
  children,
  showCancelButton = true,
  showConfirmButton = false,
}: propsTypes): JSX.Element {
  const handleGoBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    onClickPrecStep()
  }

  const handleGoNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onClickNextStep()
  }

  return (
    <div className="custom-form">
      <h1>{title}</h1>

      <p>{description}</p>

      <form className="personal-infos__form" onSubmit={handleGoNext}>
        {children}

        <div className="form-nav-controler">
          {showCancelButton && <button onClick={handleGoBack}>Go Back</button>}
          {showConfirmButton ? (
            <button type="submit" className="btn--confirm">
              Confirm
            </button>
          ) : (
            <button type="submit">Next Step</button>
          )}
        </div>
      </form>
    </div>
  )
}

export default CustomForm
