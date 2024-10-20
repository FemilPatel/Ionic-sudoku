import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
// import "./theme/variables.css";
import { SudokuProvider } from "./context/SudokuContext";
import { Game } from "./Game";
import "./App.css";
import { useEffect } from "react";
import { StatusBar, Style } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";
setupIonicReact();

const App: React.FC = () => {
  useEffect(() => {
    // Simulate an async operation (e.g., API call) and hide the splash screen afterward
    const hideSplashScreen = async () => {
      // You can add any other initialization logic here
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 3s delay
      await SplashScreen.hide(); // Hide the splash screen after initialization
    };

    hideSplashScreen();
  }, []);

  useEffect(() => {
    // Change the background color and content color of the status bar
    const setStatusBar = async () => {
      await StatusBar.setBackgroundColor({ color: "#3880ff" }); // Set the background color
      await StatusBar.setStyle({ style: Style.Light }); // Set content color (Light or Dark)
    };

    setStatusBar();
  }, []);

  return (
    <IonApp>
      <SudokuProvider>
        <IonContent>
          <Game />
        </IonContent>
      </SudokuProvider>
    </IonApp>
  );
};
export default App;
