import { useSupa } from "../../supa-Store";
import styles from "./reply-component.module.css";

const ReplyComponent = ({
  setSelectedComment,
  setSelectedRply,
  rply,
  item,
}) => {
  const selectedCmToEdit = useSupa((state) => state.selectedCmToEdit);
  return (
    <div
      onClick={() => {
        if (item) {
          setSelectedComment(item);
        } else {
          setSelectedRply(rply);
        }
      }}
      className={styles.reply_container}
    >
      <svg className={styles.reply_icon}>
        <use href={"/sprite.svg#reply_icon"} />
      </svg>
      <p>Reply</p>
    </div>
  );
};

export default ReplyComponent;
