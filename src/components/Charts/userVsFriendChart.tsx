import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
//connecting to state store
import { UserStore } from "../../store";
import { PoopStore } from "../../store";
import { getPoopProfiles, getUserInfo } from "../../store/Selectors";
import { useStoreState } from "pullstate";

Chart.register(...registerables);
interface FriendProps {
  chosenFriendPoop: number;
  chosenFriendName: string;
}

const UserVsFriendsChart: React.FC<FriendProps> = ({
  chosenFriendPoop,
  chosenFriendName,
}: FriendProps) => {
  // variables retrieved from global state
  const userInfo = useStoreState(UserStore, getUserInfo);
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles);

  const [tempNames, setTempNames] = useState<any>([chosenFriendName]);
  const [tempPoop, setTempPoop] = useState<any>([chosenFriendPoop]);

  useEffect(() => {
    if (userInfo && poopProfiles) {
      for (let i = 0; i < poopProfiles.length; i++) {
        let user = poopProfiles[i].user;
        if (user === userInfo.id) {
          let poopInfo = poopProfiles[i].poopInfo;
          let name = poopProfiles[i].nickname;
          setTempNames((tempNames: any) => [...tempNames, name]);
          setTempPoop((tempPoop: any) => [...tempPoop, poopInfo]);
        }
      }
    }
  }, [userInfo, poopProfiles]);

  // setting data for the chart
  const data = {
    labels: tempNames,
    datasets: [
      {
        label: "Total Poop Weight",
        data: tempPoop,
        // you can set indiviual colors for each bar
        backgroundColor: [
          "#402A2C",
          "#D9B8C4",
          "#957186",
          "#703D57",
          "#003049",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        // height="30%"
        // width="75%"
        options={{
          maintainAspectRatio: true,
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "pile vs pile",
            },
            legend: {
              display: true,
              position: "top",
            },
          },
        }}
      />
    </div>
  );
};

export default UserVsFriendsChart;
