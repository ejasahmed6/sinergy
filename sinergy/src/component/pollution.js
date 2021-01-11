import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker from 'react-date-picker';
import Graph from './graph';

const cityUrl = 'https://api.openaq.org/v1/cities?country=IN';

const PollutionData = () => {
  const [measurement, setMeasurement] = useState([]);
  const [city, setCity] = useState([]);
  const [selectcity, setSelectcity] = useState("Delhi");
  
  const [date, onChange] = useState(new Date());
  const [options, setOptions] = useState([]);
  const getmeasurement = async () => {
    const measureUrl = 'https://api.openaq.org/v1/measurements?city='+ selectcity + '&date_from=' + date.toISOString() +'&date_to=' + date.toISOString();
    const response = await fetch(measureUrl);
    const measurement = await response.json();
    setMeasurement(measurement.results);
    return measurement.results;
  };
  const getCity = async () => {
    const response = await fetch(cityUrl);
    const city = await response.json();
    setCity(city.results)

    console.log(options)
    console.log(response)
  };

  useEffect(() => {
    setMeasurement(getmeasurement());
  }, [selectcity,date]);
  useEffect(() => {
    getCity();
  });
  useEffect(() => {
    let temp = [];
    city.map((c) => {
      temp.push({ label: c.name, value: c.name })
      setOptions(temp);
    })
    }, [city]);
useEffect(()=>{
  
},[measurement])
useEffect(()=>{
  console.log(selectcity)
  
},[selectcity])
    return (
      <>
        <h3>PollutionData</h3>
        <Select onChange={(option)=>setSelectcity(option.value)} options={options} />
        {/*<input type='date' onChange={(value) =>{ setDate(value);console.log(value)}} />*/}
        <DatePicker
        onChange={onChange}
        value={date}

      />
      <Graph data={measurement}/>
      </>
    
    );

  };

  export default PollutionData; 