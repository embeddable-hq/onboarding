import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Dimension, Measure, Dataset } from "@embeddable.com/core";
import { DataResponse } from "@embeddable.com/core";
import Loading from '../util/Loading'
import Error from '../util/Error'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const COLORS = [
  '#2859C5', 
  '#F58D02',
  '#964FD2',
  '#FF6B6C',
  '#B8B8D1',
  '#FFC145',
  '#4473D9',
  '#FDA32B',
  '#AF79DD',
  '#FF9E9F',
  '#D7D7E5',
  '#FFD37A'
  ];

const chartOptions = (showLegend, clientContext) => ({
  color: clientContext?.darkMode && '#eee',
  responsive: true,
  maintainAspectRatio: false,
  cutout: '45%',
  plugins: {
    legend: {
      display: showLegend
    }
  },
});

const chartData = (labels, counts) => {
  return {
    labels,
    datasets: [
      {
        data: counts,
        backgroundColor: COLORS,
        borderColor: '#fff',
        borderWeight: 5
      }
    ]
  };
}

type Props = {
  ds: Dataset;
  slice: Dimension; // { name, title }
  metric: Measure; // [{ name, title }]
  results: DataResponse; // { isLoading, error, data: [{ <name>: <value>, ... }] }
  showLegend: boolean;
  clientContext: { darkMode: boolean; }
};

const PieChart = (props: Props) => {
  console.log('BasicPieComponent.props', props); 
  const { clientContext, slice, metric, showLegend, results } = props;
  const { isLoading, data, error } = results;
  
  if(isLoading) {
    return <Loading />
  }
  if(error) {
    return <Error msg={error}/>;
  }

  // Chart.js pie expects labels like so: ['US', 'UK', 'Germany']
  const labels = data?.map(d => d[slice.name]);

  // Chart.js pie expects counts like so: [23, 10, 5]
  const counts = data?.map(d => d[metric.name]);

  return <Pie options={chartOptions(showLegend, clientContext)} 
            data={chartData(labels, counts)} />;
};

export default (props: Props) => {
  const { clientContext } = props;
  const className = clientContext?.darkMode ? 'dark' : '';
  const style = { height: '100%'};
  return (
    <div className={className} style={style}>
      {PieChart(props)}
    </div>
  );
}
