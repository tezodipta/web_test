// // src/Graph.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';

// const Graph = () => {
//   const [graphData, setGraphData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/getgraph')
//       .then(response => {
//         setGraphData(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the graph data!', error);
//       });
//   }, []);

//   const data = {
//     labels: graphData.map(item => new Date(item.date).toLocaleDateString()),
//     datasets: [
//       {
//         label: 'High',
//         data: graphData.map(item => item.High),
//         borderColor: 'rgba(75,192,192,1)',
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         fill: true,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'time',
//         time: {
//           unit: 'day'
//         }
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Stock Prices High Key</h1>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default Graph;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Graph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getgraph')
      .then(response => {
        setData(response.data.map(item => ({
          date: new Date(item.date).toLocaleDateString(),
          open: item.Open,
          high: item.High,
          low: item.Low,
          close: item.Close,
          volume: item.Volume,
          tomorrow: item.Tomorrow,
          target: item.Target
        })));
      })
      .catch(error => {
        console.error('There was an error fetching the graph data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Stock Data Graph</h1>
      <LineChart width={800} height={400} data={data}>
        <Line type="monotone" dataKey="open" stroke="#8884d8" dot={false}/>
        <Line type="monotone" dataKey="high" stroke="#82ca9d" dot={false}/>
        <Line type="monotone" dataKey="low" stroke="#ffc658" dot={false}/>
        <Line type="monotone" dataKey="close" stroke="#ff7300" dot={false} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date"/>
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Graph;
