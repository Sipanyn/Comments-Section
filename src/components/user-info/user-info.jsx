import CommentContent from "../comment-content/comment-content";
import styles from "./user-info.module.css";

const UserInfo = ({ item, rply }) => {
  const date = new Date(item?.created_at || rply?.created_at);
  const options = { month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className={styles.userInfo_container}>
      <div className={styles.info}>
        <div className={styles.user_image_container}>
          <img src={item?.image_url || rply?.image_url} alt="user" />
        </div>
        <p className={styles.user_name}>
          {item?.username}
          {rply?.username}
        </p>
        <p className={styles.date}>{formattedDate}</p>
      </div>
      <CommentContent item={item} rply={rply} />
    </div>
  );
};

export default UserInfo;
