import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { homeOutline, logOutOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";  // Import Redirect and route from react-router-dom, that's what the ai said that was the problem because the IonRoute does not exist. I really dont get why.
import Home from "./Home";
import About from "./about";
import template from "./template";
const Menu: React.FC = () => {
  const path = [
    { name: "Home", url: "/app/home", icon: homeOutline },
    { name: "About", url: "/app/about", icon: homeOutline }
  ];

  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {path.map((item, index) => (
              <IonMenuToggle key={index}>
                <IonItem routerLink={item.url} routerDirection="forward">
                  <IonIcon icon={item.icon} slot="start" />
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
            <IonButton routerLink="/app/home" routerDirection="forward" expand="full">
              <IonIcon icon={homeOutline} slot="start" />
              Home
            </IonButton>

            <IonButton routerLink="/app/about" routerDirection="forward" expand="full">
            About
            </IonButton>

            <IonButton routerLink="/" routerDirection="back" expand="full">
              <IonIcon icon={logOutOutline} slot="start" />
              Logout
            </IonButton>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Route exact path="/app/home" component={Home} />
          <Route exact path="/app/about" component={About} />
          <Route exact path="/app">
            <Redirect to="/app/home" />
          </Route>
          
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;