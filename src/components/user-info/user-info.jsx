import { useSupa } from "../../supa-Store";
import CommentContent from "../comment-content/comment-content";
import EditTextBox from "../edit-text-box/edit-text-box";
import styles from "./user-info.module.css";

const UserInfo = ({ item, rply }) => {
  const date = new Date(item?.created_at || rply?.created_at);
  const options = { month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const selectedCmToEdit = useSupa((state) => state.selectedCmToEdit);
  const selectedRpToEdit = useSupa((state) => state.selectedRpToEdit);
  const openEdit = useSupa((state) => state.openEdit);
  return (
    <div className={styles.userInfo_container}>
      <div className={styles.info}>
        <div className={styles.user_image_container}>
          <img src={item?.image_url || rply?.image_url} alt="user" />
        </div>
        <div className={styles.name_date}>
          <p className={styles.user_name}>
            {item?.username}
            {rply?.username}
          </p>
          <p className={styles.date}>{formattedDate}</p>
        </div>
      </div>
      {(selectedCmToEdit?.id === item?.id &&
        item?.username === "Tom Rey" &&
        openEdit === true) ||
      (selectedRpToEdit?.id === rply?.id &&
        rply?.username === "Tom Rey" &&
        openEdit === true) ? (
        <EditTextBox
          content={selectedCmToEdit?.content || selectedRpToEdit?.content}
        />
      ) : (
        <CommentContent item={item} rply={rply} />
      )}
    </div>
  );
};

export default UserInfo;
