import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonToast
} from '@ionic/react';
import { Device } from '@capacitor/device';
import React, { useState } from 'react';

const Tab6: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState<any>(null);

  const getDeviceInfo = async () => {
    try {
      const info = await Device.getInfo();
      setDeviceInfo(info);
      setShowToast(true);
    } catch (error) {
      console.error('Error getting device information', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Device Information</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton expand="block" onClick={getDeviceInfo}>Get Device Information</IonButton>
        {deviceInfo && (
          <IonList>
            <IonItem>
              <IonLabel>Manufacturer</IonLabel>
              <IonLabel>{deviceInfo.manufacturer}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Model</IonLabel>
              <IonLabel>{deviceInfo.model}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Platform</IonLabel>
              <IonLabel>{deviceInfo.platform}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Version</IonLabel>
              <IonLabel>{deviceInfo.osVersion}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>UUID</IonLabel>
              <IonLabel>{deviceInfo.uuid}</IonLabel>
            </IonItem>
          </IonList>
        )}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Device information retrieved"
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab6;