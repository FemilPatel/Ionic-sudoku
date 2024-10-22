// import {
//   getPlatforms,
//   IonApp,
//   IonContent,
//   IonRouterOutlet,
//   isPlatform,
//   setupIonicReact,
// } from "@ionic/react";
// import { IonReactRouter } from "@ionic/react-router";

// /* Core CSS required for Ionic components to work properly */
// import "@ionic/react/css/core.css";

// /* Basic CSS for apps built with Ionic */
// import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css";
// import "@ionic/react/css/typography.css";

// /* Optional CSS utils that can be commented out */
// import "@ionic/react/css/padding.css";
// import "@ionic/react/css/float-elements.css";
// import "@ionic/react/css/text-alignment.css";
// import "@ionic/react/css/text-transformation.css";
// import "@ionic/react/css/flex-utils.css";
// import "@ionic/react/css/display.css";

// /**
//  * Ionic Dark Mode
//  * -----------------------------------------------------
//  * For more info, please see:
//  * https://ionicframework.com/docs/theming/dark-mode
//  */

// /* import '@ionic/react/css/palettes/dark.always.css'; */
// /* import '@ionic/react/css/palettes/dark.class.css'; */
// import "@ionic/react/css/palettes/dark.system.css";

// /* Theme variables */
// // import "./theme/variables.css";
// import { SudokuProvider } from "./context/SudokuContext";
// import "./App.css";
// import { useEffect } from "react";
// import { StatusBar, Style } from "@capacitor/status-bar";
// import { SplashScreen } from "@capacitor/splash-screen";
// import {
//   Route,
//   Redirect,
//   BrowserRouter as Router,
//   Switch,
// } from "react-router-dom";
// import Splash from "./Splash";
// import Game from "./Game";
// setupIonicReact();

// const App: React.FC = () => {
//   // const platform = getPlatforms();
//   const platform = isPlatform("android") || isPlatform("ios");

//   useEffect(() => {
//     // Simulate an async operation (e.g., API call) and hide the splash screen afterward
//     const hideSplashScreen = async () => {
//       // You can add any other initialization logic here
//       await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 3s delay
//       await SplashScreen.hide(); // Hide the splash screen after initialization
//     };

//     if (platform) {
//       hideSplashScreen();
//     }
//   }, []);

//   useEffect(() => {
//     // Change the background color and content color of the status bar
//     const setStatusBar = async () => {
//       await StatusBar.setBackgroundColor({ color: "#3880ff" }); // Set the background color
//       await StatusBar.setStyle({ style: Style.Light }); // Set content color (Light or Dark)
//     };
//     if (platform) {
//       setStatusBar();
//     }
//   }, []);

//   return (
//     <IonApp>
//       <SudokuProvider>
//         <IonContent>
//           <IonReactRouter>
//             <IonRouterOutlet>
//               <Router>
//                 <Switch>
//                   <Redirect exact path="/" to="/splash" />
//                   <Route path="/splash" exact={true}>
//                     <Splash />
//                   </Route>
//                   <Route path="/game" exact={true}>
//                     <Game />
//                   </Route>
//                 </Switch>
//               </Router>
//             </IonRouterOutlet>
//           </IonReactRouter>
//         </IonContent>
//       </SudokuProvider>
//     </IonApp>
//   );
// };
// export default App;
import {
  getPlatforms,
  IonApp,
  IonContent,
  IonRouterOutlet,
  isPlatform,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

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
import "./App.css";
import { useEffect } from "react";
import { StatusBar, Style } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Splash from "./Splash";
import Game from "./Game";
setupIonicReact();

const App: React.FC = () => {
  // const platform = getPlatforms();
  const platform = isPlatform("android") || isPlatform("ios");

  useEffect(() => {
    // Simulate an async operation (e.g., API call) and hide the splash screen afterward
    const hideSplashScreen = async () => {
      // You can add any other initialization logic here
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 3s delay
      await SplashScreen.hide(); // Hide the splash screen after initialization
    };

    if (platform) {
      hideSplashScreen();
    }
  }, []);

  useEffect(() => {
    // Change the background color and content color of the status bar
    const setStatusBar = async () => {
      await StatusBar.setBackgroundColor({ color: "#3880ff" }); // Set the background color
      await StatusBar.setStyle({ style: Style.Light }); // Set content color (Light or Dark)
    };
    if (platform) {
      setStatusBar();
    }
  }, []);

  return (
    <IonApp>
      <SudokuProvider>
        <IonContent>
          <Router>
            <Switch>
              <Redirect exact path="/" to="/splash" />
              <Route path="/splash" exact={true}>
                <Splash />
              </Route>
              <Route path="/game" exact={true}>
                <Game />
              </Route>
            </Switch>
          </Router>
        </IonContent>
      </SudokuProvider>
    </IonApp>
  );
};
export default App;
