import {
  IonItem,
  IonButton,
  IonSearchbar,
  IonList,
  IonAvatar,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonBadge,
  IonText,
} from "@ionic/react";
import { personAddOutline } from "ionicons/icons";
import { FriendStore } from "../../store";
import { UserStore } from "../../store"
import { useStoreState } from "pullstate";
import { getFriends, getUserInfo } from "../../store/Selectors";
import React, { useState, useEffect } from "react";
import useResourceUsers from "../../hooks/useResourceUsers";
import useResourceRequests from "../../hooks/useResourceRequests";
import useResourceSentRequests from "../../hooks/useResourceSentRequests";
import PendingRequests from "./pendingRequests";

const AddFriends: React.FC = () => {
  //useResouce hooks to connect to api
  const { resourcesUsers } = useResourceUsers();
  const { resourcesSentRequests, createResourceSentRequests } =
    useResourceSentRequests();
  const { resourcesRequests } = useResourceRequests();

  // Global state variables
  const friends = useStoreState(FriendStore, getFriends);
  const userInfo = useStoreState(UserStore, getUserInfo)

  //local state variables
  const [possibleFriend, setPossibleFriend] = useState<any>();
  //local version of sent requests
  const [sentRequests, setSentRequests] = useState<any>();
  //list of users minus friends and self
  const [potentialFriends, setPotentialFriends] = useState<any>([]);
  //friend we are trying to add
  //state that shows incoming friend requests
  const [showRequests, setShowRequests] = useState<boolean>(false);

  const checkIfPendingDisabled = (user: any) => {
    let disabled: boolean | undefined = undefined;
    for (let i = 0; i < sentRequests.length; i++) {
      let request = sentRequests[i];
      if ((request.to_user === user.username) && (request.rejected === null)) {
        disabled = true;
        return disabled;
      } else {
        disabled = false;
      }
    }
    return disabled;
  };

  const checkIfPendingColor = (user: any) => {
    let color: string | undefined = undefined;
    for (let i = 0; i < sentRequests.length; i++) {
      let request = sentRequests[i];
      if ((request.to_user === user.username) && (request.rejected === null)) {
        color = "medium";
        return color;
      } else {
        color = "primary";
      }
    }
    return color;
  };

  const checkIfPendingString = (user: any) => {
    let string: string | undefined = undefined;
    for (let i = 0; i < sentRequests.length; i++) {
      let request = sentRequests[i];
      if ((request.to_user === user.username) && (request.rejected === null)) {
        string = "pending";
        return string;
      } else {
        string = "send request";
      }
    }
    return string;
  };

  const handleRequest = async (user: any) => {
    // setHopefullFriend(user)
    let newRequest = await createResourceSentRequests({
      to_user: user.username,
    });
    setSentRequests([...sentRequests, newRequest]);
    // setPossibleFriend(null)
  };

  useEffect(() => {
    // filtering through users
    if (resourcesUsers && friends && resourcesSentRequests && userInfo) {
      let friendIds: any[] = [];

      for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        let id = friend.id;
        friendIds.push(id);
        friendIds.push(userInfo.id)
      }
      setPotentialFriends(
        resourcesUsers.filter((user: any) => !friendIds.includes(user.id))
      );
      setSentRequests(resourcesSentRequests);
    }
  }, [resourcesUsers, friends, resourcesSentRequests, userInfo]);

  // console.log(userInfo)
  // console.log(potentialFriends)

  return (
    <>
      {possibleFriend ? (
        ""
      ) : (
        <>
          <IonText>
            <h2 className="ion-text-center">
              You cant just go snooping around people's crap!
            </h2>
            <p className="ion-text-center">
              Enter the username of a friend and we'll ask them how they feel
              about becoming buddies
            </p>
          </IonText>

          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            {resourcesRequests && resourcesRequests.length > 0 ? (
              <IonBadge color="danger">{resourcesRequests.length}</IonBadge>
            ) : (
              ""
            )}
            <IonFabButton
              color="medium"
              activated={showRequests}
              onClick={() => setShowRequests(!showRequests)}
            >
              <IonIcon icon={personAddOutline} />
            </IonFabButton>
          </IonFab>
        </>
      )}

      <IonItem>
        <IonSearchbar
          value={possibleFriend}
          onIonChange={(e) => setPossibleFriend(e.detail.value!)}
          showCancelButton="never"
        ></IonSearchbar>
      </IonItem>

      <h4 className="ion-text-center">Possible Friends</h4>

      {potentialFriends && sentRequests && userInfo ? (
        <IonList>
          {
            // eslint-disable-next-line array-callback-return
            potentialFriends.map(
              // eslint-disable-next-line array-callback-return
              (user: any, index: React.Key | null | undefined) => {
                if (
                  possibleFriend &&
                  user.username !== userInfo.username &&
                  user.username.toLowerCase().includes(`${possibleFriend.toLowerCase()}`)
                ) {
                  return (
                    <IonItem key={index}>
                      <IonAvatar>
                        <img
                          src={`https://avatars.dicebear.com/api/bottts/${user.id}${user.poopInfo}.svg?colorful=true`}
                          alt={"little robot avatar for each person"}
                        />
                      </IonAvatar>
                      <IonLabel>
                        <h1>{user.username}</h1>
                        <h3>{user.email}</h3>
                        {/* <p>{friend.poopInfo}</p> */}
                      </IonLabel>
                      <IonButton
                        fill="outline"
                        slot="end"
                        color={checkIfPendingColor(user)}
                        disabled={checkIfPendingDisabled(user)}
                        onClick={() => handleRequest(user)}
                      >
                        {checkIfPendingString(user) || "send request"}
                      </IonButton>
                    </IonItem>
                  );
                }
              }
            )
          }
        </IonList>
      ) : (
        ""
      )}
      {showRequests ? <PendingRequests /> : ""}
    </>
  );
};

export default AddFriends;
