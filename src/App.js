import React, {useState, useEffect}  from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  const [date, setDate] = useState('2012-03-14')
  useEffect(() => {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=7jw3EyTtjfnLIaxY1qcWY37HGcZ89F5mSge466SL&date=${date}`)
      .then(response => {
        console.log("response", response);
        setData(response.data.url)
      })
      .catch(error => console.log(error));
    }, [date])
 
  return (
    <div className="App">
      <p>Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!</p>
      <button onClick={() => setDate()} />
      <div className = "imageContainer"><img src={data} /></div>
      </div>
      );
    
}

export default App;
