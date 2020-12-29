import React from 'react'
import { Card, Divider } from 'antd';
import CountUp from 'react-countup';
import cn from 'classnames'
import Style from './Cards.module.css'
import dayjs from 'dayjs'


const Cards = ({total: {confirmed,recovered,deaths, lastUpdate}}) => {
  
  if (!confirmed) {
    return (<div>加载中....</div>)
  }
  return (
    <div className={Style.cards}>
      <Card headStyle={{ textAlign: 'center' }} title="确诊人数" style={{ width: 300 }}>
        <Divider plain>
          <p className={Style.title}>
            <CountUp start={0} end={confirmed.value} separator="," duration={2.75}></CountUp>
          </p>
        </Divider>
        <Divider plain>
          {dayjs(lastUpdate).format('YYYY-MM-DD HH:mm')}
        </Divider>
        <Divider plain>
          <p className={cn(Style.title, Style.confirmed)}>新冠肺炎累计确诊人数</p>
        </Divider>
      </Card>
      <Card headStyle={{ textAlign: 'center' }} title="累计治愈" style={{ width: 300 }}>
        <Divider plain>
          <p className={Style.title}>
            <CountUp start={0} end={recovered.value} separator="," duration={2.75}></CountUp>
          </p>
        </Divider>
        <Divider plain>
          {dayjs(lastUpdate).format('YYYY-MM-DD HH:mm')}
        </Divider>
        <Divider plain>
          <p className={cn(Style.title, Style.recovered)}>新冠肺炎累计治愈人数</p>
        </Divider>
      </Card>
      <Card headStyle={{ textAlign: 'center' }} title="死亡人数" style={{ width: 300 }}>
        <Divider plain>
          <p className={Style.title}>
            <CountUp start={0} end={deaths.value} separator="," duration={2.75}></CountUp>
          </p>
        </Divider>
        <Divider plain>
          {dayjs(lastUpdate).format('YYYY-MM-DD HH:mm')}
        </Divider>
        <Divider plain>
          <p className={cn(Style.title, Style.deaths)}>新冠肺炎累计死亡人数</p>
        </Divider>
      </Card>

    </div>
  )
}

export default Cards
