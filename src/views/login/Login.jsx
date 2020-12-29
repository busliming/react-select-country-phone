import React, { useState } from 'react'
import './Login.css'
/*eslint-disable */
const Login = (props) => {
  const [code, setCode] = useState('86')
  console.log(props, 'login')

  const handleSelectCode = () => {
    props.history.push('/code')
  }

  const handleGoToReal = () => {
    // console.log(props)
    props.history.push('/real')
  }

  return (
    <div className="login">
      <div className="am-button" onClick={handleSelectCode}>选择区号: + {code}</div>
      <div className="am-button" onClick={handleGoToReal}>疫情实时数据</div>
    </div>
  )
}

export default Login
