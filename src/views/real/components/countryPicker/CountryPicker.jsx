import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Style from './CounterPicker.module.css'
import { getAllCountries } from '../../../../api'

import { Select } from 'antd';
const { Option } = Select;



const CountryPicker = ({selectCountry}) => {
  const [countries, setCountries] = useState([])
  const handleChange = (val) => {
    selectCountry(val)
  }
  useEffect(() => {
    const initData = async () => {
      let country = await getAllCountries();
      setCountries(country)
    }
    initData();
  }, [])
  return (
    <div className={Style.country}>
      <div className={Style.select}>
        <Select
          showSearch
          onChange={handleChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          optionFilterProp="children"
          defaultValue=""
          style={{ width: '100%' }}
        >
          <Option value="">All Countries</Option>
          {
            countries.map((item, index) => {
              return (<Option key={index} value={item.iso2}>{item.name}</Option>)
            })
          }
        </Select>
      </div>
    </div>
  )
}

CountryPicker.propTypes = {
  selectCountry: PropTypes.func.isRequired,
}


export default CountryPicker

