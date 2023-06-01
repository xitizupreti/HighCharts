import React, { useEffect, useState } from "react";
// import { render } from "react-dom";
import Card from "./Cards";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
const url = "https://gss.wscada.net/api/socket/HPL/response";

const App = () => {
  const [data, setData] = useState([]);
const d=1262736000000;
const p=0.15;
  const options = data.map((item, index) => ({
    title: {
      text: item.name,
      align: "center",
    },
    series: [
      {
        name: item?.observations.map((series_name) => series_name.series_name),
        data: [
          [1262304000000, 0],
          [d, p],
          [1263168000000, 0.19],
        ],
      },
    ],
    yAxis: {
      title: {
        text: "Water level",
      },
    },
    xAxis: {
      type: "datetime",
    },
  }));
  useEffect(() => {
    async function Data() {
      try {
        const response = await axios.get(`${url}`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    Data();
  }, []);
  return (
    <>
      <div>
        {data.map((item, index) => (
          <>
            {/* <Card key={index} name={item.name} des={item.description} /> */}
            <HighchartsReact highcharts={Highcharts} options={options[index]} />
          </>
        ))}
      </div>
    </>
  );
};

export default App;
