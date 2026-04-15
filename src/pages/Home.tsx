import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { bookOutline, key, search, star } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Favorites from "./Home-tabs/Favorites";
import Feed from "./Home-tabs/Feed";
import Search from "./Home-tabs/Search";

const Home: React.FC = () => {
  const Tabs = [
    {name: "Feed", tab: 'feed',url: "/app/home/feed", icon:bookOutline},
    {name: "Search", tab: 'search',url: "/app/home/search", icon:search},
    {name: "Favorites", tab: 'favorites',url: "/app/home/favorites", icon:star},
    ]
 return (
        <IonReactRouter>
          <IonTabs>
          <IonTabBar slot="bottom">
            <IonToolbar>
              <IonTitle>Tabs</IonTitle>
            </IonToolbar>
            {Tabs.map((item, index) => (
              <IonTabButton key={index} tab={item.tab} href={item.url}>
                <IonIcon icon={item.icon} />
                <IonLabel>{item.name}</IonLabel>
              </IonTabButton>
            ))}

          </IonTabBar>
          <IonRouterOutlet>
            <Route exact path="/app/home/feed" component={Feed} />
            <Route exact path="/app/home" />
            <Redirect to="/app/home/feed" />
            
            <Route exact path="/app/home/search" component={Search} />
            <Route exact path="/app/home/favorites" component={Favorites} />
          </IonRouterOutlet>
          </IonTabs>
        </IonReactRouter>
    );
};

  export default Home;