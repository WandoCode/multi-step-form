import ThankIcon from '../assets/images/icon-thank-you.svg'
function ThanksScreen(): JSX.Element {
  return (
    <div className="main-container thanks ">
      <img className="thanks__img" src={ThankIcon} alt="" />
      <h1 className="h1">Thank you!</h1>
      <p className="thanks__text">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  )
}

export default ThanksScreen
