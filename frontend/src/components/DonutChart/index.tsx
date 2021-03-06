import axios from "axios";
import Chart from "react-apexcharts";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "utils/request";
import { SaleSum } from "types/sale";

type ChartData = {
  labels: string [];
  series: number[];
}

const DunotChart = () => {

  const [chartData , setChartData] = useState<ChartData>({ labels: [], series: []});

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
    .then(response => {
      const data = response.data as SaleSum[];
      const myLabels = data.map(x => x.sellername);
      const mySeries = data.map(x => x.sum);

      setChartData ({ labels: myLabels, series: mySeries});
      console.log(chartData);
    });
  }, []);

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
};

export default DunotChart;