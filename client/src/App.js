import React, { useEffect, useState } from "react";
// import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
const url="https://gss.wscada.net/api/socket/HPL/response";


const App = () => {

  const [data, setData] = useState([]);

  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 100],
      },
    ],
  };
  useEffect(() => {
    async function Data() {
      try {
        const response = await axios.get(`${url}`);
        console.log(response.data);
        setData(response.data);
        // setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    Data();
  }, []);
  return (
    <>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
};

export default App;