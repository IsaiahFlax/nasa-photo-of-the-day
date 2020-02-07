import React, {useState, useEffect}  from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components"

const Button = styled.button`
background-color: black;
color: white;
`;
const StylesP = styled.p`
background-color: black;
color: white;
`;

function App() {
  const [data, setData] = useState([])
  const [year, setYear] = useState(2012)
  const [month, setMonth] = useState(3)
  const [day, setDay] = useState(14)
  const [title, setTitle] = useState([])

  if (day === 29) {
    setDay(0)
    setMonth(month + 1)
  }
  if (month === 9) {
    setMonth(0)
    setYear(year + 1)
  }
  
  useEffect(() => {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=y5yjWseetc0VoPYEGatZNVpXhYthTQhaHsf2HV4p&date=${year}-0${month}-${day}`)
      .then(response => {
        console.log("day", day)
        console.log("response", response);
        setData(response.data.url)
        setTitle(response.data.title)
      })
      .catch(error => console.log(error));
    }, [day])
 
  return (
    <div className="App">
      <StylesP>Click the title of the image to see the next image</StylesP>
      <Button onClick={() => setDay(day+1)}>
        {title}
      </Button>
      <div className = "imageContainer"><img src={data} /></div>
      </div>
      );
    
}

export default App;
