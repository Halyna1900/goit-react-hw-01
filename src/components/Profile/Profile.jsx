import styles from "./Profile.module.css";
const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.info}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Follower:</span>
          <span className={styles.itemInfo}>{followers}</span>
        </li>
        <li className={styles.item}>
          <span>Views:</span>
          <span className={styles.itemInfo}>{views}</span>
        </li>
        <li className={styles.item}>
          <span>Likes:</span>
          <span className={styles.itemInfo}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
