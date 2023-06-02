import React, { useEffect, useState } from "react";
// import { render } from "react-dom";
// import Card from "./Cards";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
const url = "https://gss.wscada.net/api/socket/HPL/response";

const App = () => {
  const [data, setData] = useState([]);
  // var myDate = new Date("2012-02-10T13:19:11+0000");
  // var result = myDate.getTime();
  // console.log(result);
  const options = data.map((item, index) => ({
    title: {
      text: item.name,
      align: "center",
    },
    series: [
      {
        name: item?.observations.map((series_name) => series_name.series_name),
        data: item?.observations[0]?.data?.map((value) => {
          const date = new Date(value.datetime);
          const year = date.getFullYear();
          const month = date.getMonth();
          const day = date.getDate();
          const hour = date.getHours();
          const minute = date.getMinutes();
          const second = date.getSeconds();
          const millisecond = date.getMilliseconds();
          return [
            Date.UTC(year, month, day, hour, minute, second, millisecond),
            value.value,
          ];
        }),
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
