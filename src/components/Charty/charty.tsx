import React from 'react';
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
//connecting to state store
import { MyStore } from '../../store'
import axios from 'axios';
import CreateUser from '../Login/CreateUser'

Chart.register(...registerables);

// type BarChart = {
  //   name: string;
  //   height: string;
// }

const Charty: React.FC = () => {

  // variables retrieved from global state
  const userInfo = MyStore.useState(s => s.userInfo);
  const userEmail = MyStore.useState(s => s.userEmail);
  
  //function to call api for user's information
  const getUserRequest = () => {
    return axios
      // .get('https://poop-garden-back.herokuapp.com/api/v1/pooper?email=${userEmail}',{
      .get(`http://127.0.0.1:8000/api/v1/pooper?email=${userEmail}`,{
      headers:{
        'Content-Type': 'application/json'
      },
      })
      .then((response) => {
        // console.log(response.data);
      return response.data;
      })
  };
  

  // Use effect to run function on load. will reload whenever the variable in the array at the end changes(currently empty)
  React.useEffect(() => {
    getUserRequest().then(data => {
      MyStore.update(s => {
        s.userInfo = data;
        s.userName = data[0].name
      })
    });
  });
  //grabbing userInfo variable from state after updating
  const userName = MyStore.useState(s => s.userName);
  

  // functions to get only the data we need for the chart
  const getNames = (array: any[]) => {
    let namesArray = []
    for (let i = 0; i < array.length; i++) {
      let name = array[i].name
      namesArray.push(name)
    }
    return namesArray
  }

  const getPoop = (array: any[]) => {
    let poopArray = []
    for (let i = 0; i < array.length; i++) {
      let poop = array[i].poopInfo
      poopArray.push(poop)
    }
    return poopArray
  }

  let namesArray = getNames(userInfo);
  let poopArray = getPoop(userInfo);

  // console.log(namesArray2,heightArray2);

  //setting data for the chart
  const data = {
    labels: namesArray,
    datasets: [
        {
          label: 'Total Poop Weight',
          data: poopArray,
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
      {userName ? 
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
      />: 
      <CreateUser />}
    </div>
  );
};

export default Charty;
