import React from 'react';
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
//connecting to state store
import { MyStore } from '../../store'
Chart.register(...registerables);

// type BarChart = {
  //   name: string;
  //   height: string;
// }

const Charty: React.FC = () => {

  //grabbing userInfo variable from state
  const userInfo = MyStore.useState(s => s.userInfo);

  // functions to get only the data we need for the chart
  const getNames = (array: any[]) => {
    let namesArray = []
    for (let i = 0; i < array.length; i++) {
      let name = array[i].name
      namesArray.push(name)
    }
    return namesArray
  }

  const getHeight = (array: any[]) => {
    let heightArray = []
    for (let i = 0; i < array.length; i++) {
      let height = array[i].height
      heightArray.push(height)
    }
    return heightArray
  }

  let namesArray2 = getNames(userInfo);
  let heightArray2 = getHeight(userInfo);

  console.log(namesArray2,heightArray2);

  const data = {
    labels: namesArray2,
    datasets: [
        {
          label: 'Total Poop Weight',
          data: heightArray2,
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)'
          ],
          borderWidth: 1,
        }
    ]
}

  return (
    <div>
      <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Poop Chart"
            },
            legend: {
              display: true,
              position: "top"
           }
          }
        }}
      />
    </div>
  );
};

export default Charty;
