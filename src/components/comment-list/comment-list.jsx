import { useSupa } from "../../supa-Store";
import CommentComponent from "../comment-component/comment-component";

import styles from "./comment-list.module.css";

const CommentList = () => {
  const supa_data = useSupa((state) => state.supa_data);

  return (
    <div className={styles.CommentList_container}>
      {supa_data?.map((item) => {
        return <CommentComponent key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CommentList;
