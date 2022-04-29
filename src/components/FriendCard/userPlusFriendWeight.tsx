import { IonImg } from "@ionic/react";
// import { weightComparisons } from "../../data/data"


interface FriendProps {
  chosenFriendPoop: number;
}

// const imageObject: any = {
//   "the weight of a Rhinoceros": "assets/img/rhino.jpeg",
//   "the weight of a Hippo" : "assets/img/hippo.jpeg"
// }

const UserPlusFriendWeight: React.FC<FriendProps> = ({
  chosenFriendPoop,
}: FriendProps) => {
  // variables retrieved from global state
  // const userInfo = useStoreState(UserStore, getUserInfo);
  // const poopProfiles = useStoreState(PoopStore, getPoopProfiles);

  // const [tempNames, setTempNames] = useState<any>([chosenFriendName]);
  // const [tempPoop, setTempPoop] = useState<any>([chosenFriendPoop]);

  // useEffect(() => {
  //   if (userInfo && poopProfiles) {
  //     for (let i = 0; i < poopProfiles.length; i++) {
  //       let user = poopProfiles[i].user;
  //       if (user === userInfo.id) {
  //         let poopInfo = poopProfiles[i].poopInfo;
  //         let name = poopProfiles[i].nickname;
  //         setTempNames((tempNames: any) => [...tempNames, name]);
  //         setTempPoop((tempPoop: any) => [...tempPoop, poopInfo]);
  //       }
  //     }
  //   }
  // }, [userInfo, poopProfiles]);

  // setting data for the chart
  // const data = {
  //   labels: tempNames,
  //   datasets: [
  //     {
  //       label: "Total Poop Weight",
  //       data: tempPoop,
  //       // you can set indiviual colors for each bar
  //       backgroundColor: [
  //         "#402A2C",
  //         "#D9B8C4",
  //         "#957186",
  //         "#703D57",
  //         "#003049",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <IonImg src={"assets/img/rhino.jpeg"}/>
    
    // <div>
    //   <Bar
    //     data={data}
    //     // height="30%"
    //     // width="75%"
    //     options={{
    //       maintainAspectRatio: true,
    //       responsive: true,
    //       plugins: {
    //         title: {
    //           display: true,
    //           text: "pile vs pile",
    //         },
    //         legend: {
    //           display: true,
    //           position: "top",
    //         },
    //       },
    //     }}
    //   />
    // </div>
  );
};

export default UserPlusFriendWeight;
