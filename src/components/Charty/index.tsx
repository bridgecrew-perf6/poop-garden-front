import React, {useState} from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// type BarChart = {
//   name: string;
//   height: string;
// }

const Charty: React.FC = () => {

  //creating list to be held in state
  const [userData, setUserData] = useState<any>({})

  // function that communicates with the server
  const GetChartData = () => {
    return axios
      .get('https://swapi.dev/api/people',{
      headers:{
        'Content-Type': 'application/json'
      },
      })
      .then((response) => {
      let finalData = response.data;
      return finalData;
      })
  };

  // Use effect to run function
  React.useEffect(() => {
    GetChartData().then(data => {
      setUserData(data.results)
    });
  }, []);

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

  let namesArray = getNames(userData);
  let heightArray = getHeight(userData);

  console.log(namesArray,heightArray);

  const data = {
    labels: namesArray,
    datasets: [
        {
          label: 'Total Poop Weight',
          data: heightArray,
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
