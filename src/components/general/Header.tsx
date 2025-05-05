import React from 'react'
import logo from '../../assets/general/logo.svg'

const Header: React.FC = () => {
  return (
    <header className="bg-ml-yellow p-4">
      <div className="mx-auto flex items-center justify-start">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
    </header>
  )
}

export default Header
