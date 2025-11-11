import { useSupa } from "../../supa-Store";
import { useUpdateRp } from "../../utils/useUpdateRp";
import DeleteComponent from "../delete-component/delete-component";
import EditComponent from "../edit-component/edit-component";
import ReplyComponent from "../reply-component/reply-component";
import UpdateComponent from "../update-component/update-component";
import UserInfo from "../user-info/user-info";
import VoteComponent from "../vote-component/vote-component";
import styles from "./user-reply-component.module.css";

const UserReplyComponent = ({
  rply,
  setSelectedComment,
  setSelectedRply,
  setLastSelected,
  selectedRply,
}) => {
  const selectedCmToEdit = useSupa((state) => state.selectedCmToEdit);
  const selectedRpToEdit = useSupa((state) => state.selectedRpToEdit);
  const openEdit = useSupa((state) => state.openEdit);
  const { mutate: updateRp, isPending } = useUpdateRp();
  return (
    <div className={styles.reply_container}>
      <div className={styles.VoteComponent}>
        <VoteComponent rply={rply} />
      </div>
      <div className={styles.UserInfo}>
        <UserInfo rply={rply} />
      </div>
      {rply.username === "Tom Rey" && (
        <div className={styles.delete_edit}>
          <DeleteComponent rply={rply} />
          <EditComponent rply={rply} />
        </div>
      )}
      <div className={styles.ReplyComponent}>
        {(selectedCmToEdit?.id === rply?.id &&
          rply?.username === "Tom Rey" &&
          openEdit === true) ||
        (selectedRpToEdit?.id === rply?.id &&
          rply?.username === "Tom Rey" &&
          openEdit === true) ? (
          <UpdateComponent
            rply={rply}
            updateRp={updateRp}
            isPending={isPending}
          />
        ) : (
          <ReplyComponent
            setSelectedComment={setSelectedComment}
            setSelectedRply={setSelectedRply}
            setLastSelected={setLastSelected}
            selectedRply={selectedRply}
            rply={rply}
          />
        )}
      </div>
    </div>
  );
};

export default UserReplyComponent;
