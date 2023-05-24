import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonTextarea, IonCard,
  IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButton, IonToast
} from '@ionic/react';
import { Clipboard } from '@capacitor/clipboard';
import './Tab3.css';
import { useState } from 'react';

const Tab3: React.FC = () => {

  const [showToast1, setShowToast1] = useState(false);
  const [text, setText] = useState("");

  function writeToClipboard(idFunc: number){
      if(idFunc === 0){
          Clipboard.write({
              string: "This text will be copied to the clipboard"
          });
          setShowToast1(true);
          return;
      }
      
      Clipboard.write({
          string: text
      });
      setShowToast1(true);
  };

  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonTitle>Clipboard tool</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
              <IonContent>
                  <IonCard>
                      <IonCardHeader>
                          <IonCardSubtitle>UI Component</IonCardSubtitle>
                          <IonCardTitle>Static text</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                          <IonItem>
                              <IonTextarea disabled value="This text will be copied to the clipboard"></IonTextarea>
                          </IonItem>
                          <IonButton expand="block" onClick={()=>{writeToClipboard(0)}}>Copy to clipboard</IonButton>
                      </IonCardContent>
                      <IonToast
                          isOpen={showToast1}
                          onDidDismiss={() => setShowToast1(false)}
                          message="Copied to clipboard"
                          duration={2000}
                      />
                  </IonCard>
                  <IonCard>
                      <IonCardHeader>
                          <IonCardSubtitle>UI Component</IonCardSubtitle>
                          <IonCardTitle>Your own text</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                          <IonItem>
                              <IonTextarea 
                              placeholder="Ingresa texto para despues copear :D" 
                              value={text}
                              onIonChange={(e: any) => setText(e.target.value)}
                              ></IonTextarea>
                          </IonItem>
                          <IonButton expand="block" onClick={()=> {writeToClipboard(1)}}>Copy to clipboard</IonButton>
                      </IonCardContent>
                      <IonToast
                          isOpen={showToast1}
                          onDidDismiss={() => setShowToast1(false)}
                          message="Copied to clipboard"
                          duration={2000}
                      />
                  </IonCard>
              </IonContent>
          </IonContent>
      </IonPage>
  );
};

export default Tab3;