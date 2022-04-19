import {
  
  IonIcon,
  IonList,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonItem,
  IonListHeader,

  IonDatetime,
  IonRange,
  IonSlides,
  IonSlide,
  IonButton,
  useIonRouter,
} from "@ionic/react";
import { thumbsDown, thumbsUp } from "ionicons/icons";
import { differenceInDays } from 'date-fns';
// import { FriendStore } from "../../store";
// import { getFriends } from "../../store/Selectors";
// import { useStoreState } from "pullstate";
import React, { useEffect, useRef, useState } from "react";
import useResourcePoop from "../../hooks/useResourcePoop"
// import { useForm, SubmitHandler, Controller } from "react-hook-form";


import { useAuth } from "../../contexts/auth.js";
import "./getPoopSurvey.scss";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const PoopSurvey: React.FC = () => {
  const { user } = useAuth();
  const { createResourcePoop } = useResourcePoop();

  const [q1selected, setq1Selected] = useState<string>('avg');
  const [selectedDate, setSelectedDate] = useState<any>("1987-12-03");
  const [fiberValue, setFiberValue] = useState<any>(5);

  const router = useIonRouter();

  const getTotalPoop = (info:any) => {
    /// function that will use the 3 states above (mostly the birthday) and turn it into a single poop number that i can send to the back
    let current = new Date()
    let currentDate: any = new Date(`${current.getMonth()}-${current.getDate()}-${current.getFullYear()}`);
    let bornDate = new Date(info.selectedDate);
    let totalDays = differenceInDays(currentDate, bornDate)
    let totalOunces = totalDays * 14
    let totalPounds = Math.round(totalOunces / 16)
    return totalPounds
    
    

    
  }

  async function sendDataToServer(e: React.FormEvent<HTMLFormElement>) {
    //send Ajax request to your web server
    e.preventDefault();
    let formInfo = {
      baby: q1selected,
      selectedDate: selectedDate,
      fiber: fiberValue,
    };
    let poopInfo = getTotalPoop(formInfo)

    let newPoopProfile = await createResourcePoop({
      user: user.id,
      nickname: user.username,
      poopInfo: poopInfo,
    })

    console.log(newPoopProfile)
    //should end up push ing to tab3
    router.push("/tab1");

  }

  const mySlides = useRef<any>(null);

  useEffect(() => {
    mySlides.current.lockSwipes(true);
  });

  const next = async () => {
    await mySlides.current.lockSwipes(false);
    await mySlides.current.slideNext();
    await mySlides.current.lockSwipes(true);
  };

  const previous = async () => {
    await mySlides.current.lockSwipes(false);
    await mySlides.current.slidePrev();
    await mySlides.current.lockSwipes(true);
  };

  return (
    <form onSubmit={e => sendDataToServer(e)}>
      <IonSlides pager={true} options={slideOpts} ref={mySlides}>
        <IonSlide>
          <div className="slide-main">
            <div className="form-content">
              <IonList>
                <IonRadioGroup
                  value={q1selected}
                  onIonChange={(e) => setq1Selected(e.detail.value)}
                  // {...register("baby", { required: true })}
                >
                  <h3 className="ion-text-center">As a lil shitter(baby)</h3>
                  <IonListHeader>
                    <IonLabel>
                      Have you heard rumor of you pooping habits?
                    </IonLabel>
                  </IonListHeader>

                  <IonItem>
                    <IonLabel>I never pooped as a baby</IonLabel>
                    <IonRadio slot="start" value="small" />
                  </IonItem>

                  <IonItem>
                    <IonLabel>I was a baby, I pooped. Not much to tell</IonLabel>
                    <IonRadio slot="start" value="avg" />
                  </IonItem>

                  <IonItem>
                    <IonLabel>Oh, my baby poops were legendary</IonLabel>
                    <IonRadio slot="start" value="large" />
                  </IonItem>

                  <IonItem>
                    <IonLabel>Such things were not told to me</IonLabel>
                    <IonRadio slot="start" value="idk" />
                  </IonItem>
                </IonRadioGroup>
                <IonItem>{q1selected ?? "none selected"}</IonItem>
              </IonList>
            </div>
            <div className="form-footer">
              <IonButton onClick={() => next()}>Next</IonButton>
            </div>
          </div>
        </IonSlide>
        <IonSlide>
          <div className="slide-main">
          <h3 className="ion-text-center">Birthday</h3>
            <div className="form-content">
            <IonLabel >don't worry, no one is gonna check</IonLabel>
          <IonItem>
            <IonDatetime presentation={"date"} value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)} >
              <p>don't worry, no one is gonna check</p>
            </IonDatetime>

          </IonItem>



              <IonItem>{selectedDate ?? "none selected"}</IonItem>
            </div>
            <div className="form-footer">
              <IonButton onClick={() => previous()}>Prev</IonButton>
              <IonButton onClick={() => next()}>Next</IonButton>
            </div>
          </div>
        </IonSlide>
        <IonSlide>
          <div className="slide-main">
          <h3 className="ion-text-center">How do you feel about fiber?</h3>
            <div className="form-content">
            <IonItem>
            <IonRange min={1} max={10} step={1} value={fiberValue} onIonChange={e => setFiberValue(e.detail.value!)} >
              <IonIcon size="small" slot="start" icon={thumbsDown} />
              <IonIcon slot="end" icon={thumbsUp} />
         
            </IonRange>
          </IonItem>

          <IonItem>{fiberValue ?? "none selected"}</IonItem>

            </div>
            <div className="form-footer">
              <IonButton onClick={() => previous()}>Prev</IonButton>
              <IonButton type="submit">Submit</IonButton>
            </div>
          </div>
        </IonSlide>
      </IonSlides>
    </form>
  
  );
};

export default PoopSurvey;
