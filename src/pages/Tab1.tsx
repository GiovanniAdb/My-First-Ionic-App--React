import {
  IonContent, IonHeader, IonPage, IonButton, IonTitle, IonToolbar,
  IonAlert, IonCardContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle
} from '@ionic/react';
import { Network } from '@capacitor/network';
import './Tab1.css';
import { useState } from 'react';
import React from 'react';

const Tab1: React.FC = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  const [connected, setConnected] = useState(false);
  const [connectionType, setConnectionType] = useState("");

  /*Network.addListener('networkStatusChange', function (val) {
    status = val.connectionType;
    console.log(val);
  });*/
  const logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();

    setConnected(status.connected);
    setConnectionType(status.connectionType);
    setShowAlert1(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Network information</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Plugin</IonCardSubtitle>
            <IonCardTitle>Network Details</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton
              onClick={() => {
                logCurrentNetworkStatus();
              }}
              expand="block">
              Show Info</IonButton>
            <IonAlert
              isOpen={showAlert1}
              onDidDismiss={() => setShowAlert1(false)}
              header={'Your network information is available'}
              subHeader={''}
              message={'Connected: ' + connected + ' Type: ' + connectionType.toUpperCase()}
              buttons={['OK']}
            />
            
          </IonCardContent>
          
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Plugin</IonCardSubtitle>
            <IonCardTitle>Device Details</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton
              onClick={() => {
                logCurrentNetworkStatus();
              }}
              expand="block">
              Show Info</IonButton>
            <IonAlert
              isOpen={showAlert1}
              onDidDismiss={() => setShowAlert1(false)}
              header={'Your network information is available'}
              subHeader={''}
              message={'Connected: ' + connected + ' Type: ' + connectionType.toUpperCase()}
              buttons={['OK']}
            />
            
          </IonCardContent>
          
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
