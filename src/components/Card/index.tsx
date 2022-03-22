import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import React, { ReactElement } from "react";

export type CardProps = {
  title: string;
  subtitle: string;
  content: string;
};

export default function Card({
  title,
  subtitle,
  content,
}: CardProps): ReactElement {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{content}</IonCardContent>
    </IonCard>
  );
}