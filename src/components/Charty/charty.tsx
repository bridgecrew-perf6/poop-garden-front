import React from 'react';
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
//connecting to state store
import { MyStore } from '../../store'
import axios from 'axios';

Chart.register(...registerables);

// type BarChart = {
  //   name: string;
  //   height: string;
// }

const Charty: React.FC = () => {


  const userInfo = MyStore.useState(s => s.userInfo);
  const userEmail = MyStore.useState(s => s.userEmail);
  
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
  

  // Use effect to run function on load. will reload whenever the variable in the array at the end changes(currently userInfo)
  React.useEffect(() => {
    getUserRequest().then(data => {
      MyStore.update(s => {
        s.userInfo = data;
        s.userName = data[0].name
      })
    });
  },);
  //grabbing userInfo variable from state
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
      // This below means that the user has not been added to our database, or we would have pulled the name back with it. which means that i really should make both the email and the name required for our database. I am going to replace the string below with a "create user/create username" component that will prompt the user to add a user name and then it will make a post request to my api with the username and email 
      'There is no user name!!'}
    </div>
  );
};

export default Charty;
