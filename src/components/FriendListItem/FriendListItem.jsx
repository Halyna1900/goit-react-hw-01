import clsx from "clsx";
import styles from "./FriendListItem.module.css";
const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div className={styles.friendListItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.frienName}>{name}</p>
      <p className={clsx(isOnline ? styles.online : styles.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
