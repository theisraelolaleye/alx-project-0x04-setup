import React from 'react'

const Button = ({ buttonLabel, buttonBackgroundColor }: { buttonLabel: string, buttonBackgroundColor: string }) => {
  return (
    <button className={`bg-${buttonBackgroundColor}-500 text-white py-2 px-4 rounded`}>
      {buttonLabel}
    </button>
  )
}

export default Button