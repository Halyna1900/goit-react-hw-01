import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={styles.friendlist}>
        {friends.map((friend) => (
          <li className={styles.item} key={friend.id}>
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default FriendList;
