// eslint-disable-next-line react/prop-types
const ButtonController = ({className, actionText,  actionNumber, counterFunc}) => {

  return (
    <button className={className} onClick={counterFunc}>
      {actionText} : {actionNumber}
    </button>
  )
}

export default ButtonController