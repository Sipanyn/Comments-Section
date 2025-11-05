import styles from "./comment-content.module.css";

const CommentContent = ({ item, rply }) => {
  return (
    <p className={styles.content}>
      {item?.content}
      {rply?.content}
    </p>
  );
};

export default CommentContent;
