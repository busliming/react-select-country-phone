import React, { useState, useEffect } from 'react'
import { Cards, CountryPicker, Chart } from './components'
import { getTotalData } from '../../api'
import img from '../../assests/img/image.png'
import Style from './Real.module.css'

const Real = () => {
  const [total, setTotal] = useState({})
  const [country, setCountry] = useState('')

  const selectCountry = async (val) => {
    setCountry(val)
    setTotal(await getTotalData(val))
  }
  useEffect(() => {
    const initData = async () => {
      let data = await getTotalData();
      setTotal(data);
    }

    initData();
  }, [])
  
  return (
    <div className={Style.real}>
      {/* <h1>antd version: {version}</h1> */}
      <div className={Style.picture}>
        <img src={img} alt="图片" />
      </div>
      <Cards total={total}></Cards>
      <CountryPicker selectCountry={selectCountry}></CountryPicker>
      <Chart total={total} country={country}></Chart>
    </div>
  )
}

export default Real
