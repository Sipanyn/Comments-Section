import VoteComponent from "../vote-component/vote-component";
import ReplyComponent from "../reply-component/reply-component";
import UserInfo from "../user-info/user-info";
import styles from "../comment-component/comment-component.module.css";
import ReplyList from "../reply-list/reply-list";
import { useSupa } from "../../supa-Store";

const CommentComponent = ({ item }) => {
  const supa_replies = useSupa((state) => state.supa_replies);
  return (
    <>
      <div className={styles.comment_container}>
        <div className={styles.VoteComponent}>
          <VoteComponent item={item} />
        </div>
        <div className={styles.UserInfo}>
          <UserInfo item={item} />
        </div>
        <div className={styles.ReplyComponent}>
          <ReplyComponent />
        </div>
      </div>
      {supa_replies[0]?.map((rply) => {
        return (
          rply.comment_id === item.id && <ReplyList rply={rply} key={rply.id} />
        );
      })}
    </>
  );
};

export default CommentComponent;
