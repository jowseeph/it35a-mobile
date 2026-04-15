import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Feed: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>Feed</IonTitle>
                </IonButtons>
                
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        </IonContent>
    </IonPage>
    );   

};

export default Feed;