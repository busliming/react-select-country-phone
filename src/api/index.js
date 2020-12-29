import axios from 'axios'

let url = 'https://covid19.mathdro.id/api'

// export const getAreaTotal = async (country) => {
//   try {
//     let {data: {confirmed,recovered,deaths},lastUpdate} = await axios.get(`${url}/countries/${country}`);
//     return {confirmed,recovered,deaths,lastUpdate}
//   } catch (error) {
//     console.log(error)
//   }
// }

export const getTotalData = async (country) => {
  let changedUrl = ''
  if(country){
    changedUrl = `${url}/countries/${country}`
  }else{
    changedUrl = `${url}`
  }
  try {
    let {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changedUrl);
    return {confirmed,recovered,deaths,lastUpdate}
  } catch (error) {
    console.log(error)
  }
}

export const getAllCountries = async () => {
  try {
    let {data: { countries}} = await axios.get(`${url}/countries`)
    return countries
  } catch (error) {
    console.log(error)
  }
}

let url1 = 'https://covid19.mathdro.id/api/daily'

export const getGlobalData = async () => {
  try {
    let res = await axios.get(url1)
    // console.log(res.data,'global');
    let updatedArr = res.data.map(item => ({
      confirmed: item.confirmed.total,
      recovered: item.recovered.total,
      deaths: item.deaths.total,
      reportDate: item.reportDate
    }))
    return updatedArr.slice(200);
  } catch (error) {
    console.log(error)
  }
}