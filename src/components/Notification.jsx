import styles from '../assets/styles/layouts/Notification.module.scss';

const Notification = ({type, message, loading}) => {
    
    let classColorMessage;
   switch(message){
    case 'success':
        classColorMessage = 'primary';
        break;
    case 'error':
        classColorMessage = 'secondary';
        break;
    case 'info':
        classColorMessage = 'info';
        break;
    default: 
        classColorMessage= "";
   }
   
    if(!loading){
        <p>Chargement...</p>
    }

    const notif =(
                    <div className="notification">
                        <h3>{type} {type == 'success' ? '✓' :''}</h3>
                        <p className={`bg-${classColorMessage}`}>{message}</p>
                        <button className="close">X</button>
                    </div>
    );


    return loading && notif;
};

export default Notification;