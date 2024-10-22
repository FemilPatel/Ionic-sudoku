import React from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  useIonRouter,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

// import "./Splash.css"; // Custom CSS for styling

const Splash: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent className="ion-padding splash-screen">
        <IonGrid className="content-container">
          <IonRow className="ion-justify-content-center ion-margin-bottom">
            {/* Logo section */}
            <IonCol size="auto">
              <img
                src={"../assets/icon-only.png"}
                alt="App Logo"
                className="login-logo"
              />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-margin-bottom">
            {/* Logo section */}
            <IonCol size="auto" className="sudoku-labels">
              <label>sudoku</label>
              <label>.</label>
              <label>solver</label>
            </IonCol>
          </IonRow>

          {/* Button section */}
          <IonRow className="ion-justify-content-center button-container">
            <IonCol sizeMd="6" sizeLg="4" sizeXs="12">
              <IonButton
                className="login-button"
                expand="block"
                fill="clear"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/game");
                }}
              >
                Play
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Splash;
