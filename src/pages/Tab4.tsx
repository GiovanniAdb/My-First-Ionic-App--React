import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonToast, IonCard, IonCardHeader, IonCardContent,
  IonCardSubtitle, IonCardTitle
} from '@ionic/react';
import React, { useState } from 'react';
import { Toast } from '@capacitor/toast';
import './Tab5.css';

const Tab5: React.FC = () => {

  const [showToast1, setShowToast1] = useState(false);

  async function name() {
      await Toast.show({
          text: 'This is a toast with Capacitor',
          duration: "long",
          position: "center",
      });
  }

  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonTitle>Notifications</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
              <IonCard>
                  <IonCardHeader>
                      <IonCardSubtitle>UI Component</IonCardSubtitle>
                      <IonCardTitle>Toast with Ionic</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                      <IonButton onClick={() => setShowToast1(true)} expand="block">Show Toast</IonButton>
                      <IonToast
                          isOpen={showToast1}
                          onDidDismiss={() => setShowToast1(false)}
                          message="Your settings have been saved."
                          duration={2000}
                      />
                  </IonCardContent>
              </IonCard>
              <IonCard>
                  <IonCardHeader>
                      <IonCardSubtitle>Plugin</IonCardSubtitle>
                      <IonCardTitle>Toast with Capacitor</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                      <IonButton onClick={() => name()} expand="block">Show Toast</IonButton>
                  </IonCardContent>
              </IonCard>
          </IonContent>
      </IonPage>
  );
};

export default Tab5;