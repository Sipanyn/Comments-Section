import UserReplyComponent from "../user-reply-component/user-reply-component";
import styles from "./reply-list.module.css";

const ReplyList = ({ rply }) => {
  return (
    <div className={styles.ReplyList_container}>
      <UserReplyComponent rply={rply} />
    </div>
  );
};

export default ReplyList;
