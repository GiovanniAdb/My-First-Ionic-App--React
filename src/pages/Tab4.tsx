import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonToast, IonCard, IonCardHeader, IonCardContent,
  IonCardSubtitle, IonCardTitle
} from '@ionic/react';
import React, { useState } from 'react';
import { Toast } from '@capacitor/toast';
import { Dialog } from '@capacitor/dialog';
import './Tab4.css';

const Tab4: React.FC = () => {

  const [showToast1, setShowToast1] = useState(false);

  async function name() {
      await Toast.show({
          text: 'This is a toast with Capacitor',
          duration: "long",
          position: "center",
      });
  }

  async function showAlert() {
    await Dialog.alert({
      title: 'Alert',
      message: 'This is an alert dialog.',
      buttonTitle: 'OK'
    });
  }

  async function showConfirmation() {
    const { value } = await Dialog.confirm({
      title: 'Confirmation',
      message: 'Are you sure you want to proceed?',
      cancelButtonTitle: 'Cancel',
      okButtonTitle: 'OK'
    });

    if (value) {
      // El usuario seleccionó "OK"
    } else {
      // El usuario seleccionó "Cancel"
    }
  }

  async function showPrompt() {
    const { value } = await Dialog.prompt({
      title: 'Prompt',
      message: 'Please enter your name:',
      cancelButtonTitle: 'Cancel',
      okButtonTitle: 'OK',
      inputPlaceholder: 'Your name'
    });

    if (value) {
      // El usuario ingresó un valor en el cuadro de diálogo de entrada
      console.log('Name:', value);
    } else {
      // El usuario seleccionó "Cancel" o no ingresó ningún valor
    }
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
              <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Plugin</IonCardSubtitle>
            <IonCardTitle>Toast with Capacitor</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton onClick={showAlert} expand="block">Show Alert</IonButton>
            <IonButton onClick={showConfirmation} expand="block">Show Confirmation</IonButton>
            <IonButton onClick={showPrompt} expand="block">Show Prompt</IonButton>
          </IonCardContent>
        </IonCard>
          </IonContent>
      </IonPage>
  );
};

export default Tab4;