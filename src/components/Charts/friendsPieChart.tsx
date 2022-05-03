import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { UserStore } from "../../store";
import { PoopStore } from "../../store";
import { getPoopProfiles, getUserInfo } from "../../store/Selectors";
import { useStoreState } from "pullstate";

Chart.register(...registerables);

const FriendsPieChart: React.FC = () => {
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

  const data = {
    labels: tempNames,
    datasets: [
      {
        label: "poop pie",
        data: tempPoop,
        backgroundColor: [
          "#402A2C",
          "#D9B8C4",
          "#957186",
          "#703D57",
          "#003049",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <Pie
        data={data}
        options={{
          maintainAspectRatio: true,
          responsive: true,
        }}
      />
    </div>
  );
};

export default FriendsPieChart;
