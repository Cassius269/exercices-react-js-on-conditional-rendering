import styles from '../assets/styles/layouts/Notification.module.scss';

const Notification = ({type, message, loading}) => {
    
    let classColorMessage;
    switch(type){
        case 'success':
            classColorMessage = 'success';
            break;
        case 'error':
            classColorMessage = 'danger';
            break;
        case 'info':
            classColorMessage = 'info';
            break;
        default: 
            classColorMessage= "";
   }
    
   
   let typeOfMessage;
    switch(type){
        case 'success':
            typeOfMessage = 'Success';
            break;
        case 'error':
            typeOfMessage = 'Erreur detectée';
            break;
        case 'info':
            typeOfMessage = 'Information';
            break;
        default: 
            typeOfMessage= "";
   }

   
   // Si les données ne sont pas affichées, afficher "chargement..."
    if(!loading){
        return <p>Chargement...</p>;
    }

    const notif =(
                    <div id={styles.divNotification} className={`bg-${classColorMessage} shadow-sm text-white`}>
                        <div id={styles.divButtonExit}>
                            <h3>{typeOfMessage} {type == 'success' ? '✓' :''}</h3>
                            <button className="close btn btn-light">X</button>
                        </div>
                        <p>{message}</p>
                    </div>
    );


    return loading && notif;
};

export default Notification;