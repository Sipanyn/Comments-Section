import ReplyComponent from "../reply-component/reply-component";
import UserInfo from "../user-info/user-info";
import VoteComponent from "../vote-component/vote-component";
import styles from "./user-reply-component.module.css";

const UserReplyComponent = ({ rply }) => {
  return (
    <div className={styles.reply_container}>
      <div className={styles.VoteComponent}>
        <VoteComponent rply={rply} />
      </div>
      <div className={styles.UserInfo}>
        <UserInfo rply={rply} />
      </div>
      <div className={styles.ReplyComponent}>
        <ReplyComponent />
      </div>
    </div>
  );
};

export default UserReplyComponent;
