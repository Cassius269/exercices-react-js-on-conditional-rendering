
import Notification from "./Notification";
import styles from '../assets/styles/layouts/Notification.module.scss';

const Notifications = () => {
    return (
        <>
        <div className="position-absolute" id={styles.divAllNotifications}>
            <Notification type='success' message='Ajouté avec succès' loading={false} />
            <Notification type='error' message='Ajout échoué' loading={false} />    
            <Notification type='info' message='Nouvelle commande effectuée' loading={false} />    
        </div>
        </>
    );
}


export default Notifications;