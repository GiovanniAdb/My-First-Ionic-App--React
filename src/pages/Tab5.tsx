import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonToast
} from '@ionic/react';
import { Geolocation } from '@capacitor/geolocation';
import React, { useState } from 'react';

const Tab5: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [location, setLocation] = useState<any>(null);

  const getCurrentLocation = async () => {
    try {
      const position = await Geolocation.getCurrentPosition();
      setLocation(position);
      setShowToast(true);
    } catch (error) {
      console.error('Error getting current location', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Geolocation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton expand="block" onClick={getCurrentLocation}>Get Current Location</IonButton>
        {location && (
          <div>
            <p>Latitude: {location.coords.latitude}</p>
            <p>Longitude: {location.coords.longitude}</p>
          </div>
        )}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Location retrieved"
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab5;