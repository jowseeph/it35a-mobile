import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Favorites: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>Favorites ay sya</IonTitle>
                </IonButtons>
                
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        </IonContent>
    </IonPage>
    );   

};

export default Favorites;