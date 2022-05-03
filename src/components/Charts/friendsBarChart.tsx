import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { UserStore } from "../../store";
import { PoopStore } from "../../store";
import { getPoopProfiles, getUserInfo } from "../../store/Selectors";
import { useStoreState } from "pullstate";

Chart.register(...registerables);

const FriendsBarChart: React.FC = () => {
  // variables retrieved from global state
  const userInfo = useStoreState(UserStore, getUserInfo);
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles);

  const [tempNames, setTempNames] = useState<any>([]);
  const [tempPoop, setTempPoop] = useState<any>([]);

  useEffect(() => {
    if (userInfo && poopProfiles) {
      for (let i = 0; i < poopProfiles.length; i++) {
        let name = poopProfiles[i].nickname;
        let poopInfo = poopProfiles[i].poopInfo;
        setTempNames((tempNames: any) => [...tempNames, name]);
        setTempPoop((tempPoop: any) => [...tempPoop, poopInfo]);
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
        options={{
          maintainAspectRatio: true,
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "How much your friends poop",
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

export default FriendsBarChart;
