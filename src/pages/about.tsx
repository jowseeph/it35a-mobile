import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const About: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>About sa kanila</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        </IonContent>
    </IonPage>
    );   

};

export default About;