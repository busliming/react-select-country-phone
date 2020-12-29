import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
// import { Line } from '@ant-design/charts';
import { Line, Bar } from 'react-chartjs-2';
import Style from './Chart.module.css'
import { getGlobalData } from '../../../../api'
import dayjs from 'dayjs';

const Chart = ({ total: { confirmed, recovered, deaths,lastUpdate }, country }) => {
  
  const [list, setList] = useState([])
  const lineData = {
    labels: list.map(({ reportDate }) => new Date(reportDate).toLocaleDateString()),
    datasets: [
      {
        label: '确诊人数',
        data: list.map(item => item.confirmed),
        fill: false,
        // backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderColor: 'rgba(255, 0, 0, 0.5)',
      },
      {
        label: '治愈人数',
        data: list.map(item => item.recovered),
        fill: false,
        // backgroundColor: 'rgba(0, 255, 0，0.5)',
        borderColor: 'rgba(0, 255, 0, 0.5)',
      },
      {
        label: '死亡人数',
        data: list.map(item => item.deaths),
        fill: false,
        // backgroundColor: ' rgba(0, 0, 255，0.5)',
        borderColor: ' rgba(0, 0, 255, 0.5)',
      },
    ],
  };


  const barData = {
    config: {
      labels: ['确诊人数', '治愈人数', '死亡人数'],
      datasets: [
        {
          label: `${dayjs(lastUpdate).format('YYYY-MM-DD HH:mm')}`,
          data: !confirmed ? [] : [confirmed.value, recovered.value, deaths.value],
          backgroundColor: [
            'rgba(255, 0, 0, 0.2)',
            'rgba(0, 255, 0, 0.2)',
            'rgba(0, 0, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 0, 255, 0.6)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: { display: true, text: `${country}的新冠肺炎实时数据` }
    }
  }

  const lineChart = (
    list.length > 0 ? <Line data={lineData} /> : null
  )

  const barChart = (
    confirmed ? <Bar data={barData.config} options={barData.options}> </Bar> : null
  )

  useEffect(() => {
    // getGlobalData();
    const initData = async () => {
      setList(await getGlobalData())
    }
    initData()
  }, [])
  return (
    <div className={Style.chart}>
      {
        country ? barChart : lineChart
      }
    </div>
  )
}

Chart.propTypes = {
  country: PropTypes.string,
  recovered: PropTypes.string,
  confirmed: PropTypes.string,
  deaths: PropTypes.string,
  lastUpdate: PropTypes.string
}

export default Chart
