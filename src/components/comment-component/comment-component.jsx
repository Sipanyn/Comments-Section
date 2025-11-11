import VoteComponent from "../vote-component/vote-component";
import ReplyComponent from "../reply-component/reply-component";
import UserInfo from "../user-info/user-info";
import styles from "../comment-component/comment-component.module.css";
import ReplyList from "../reply-list/reply-list";
import { useSupa } from "../../supa-Store";
import CustomTextBox from "../custom-text-box/custom-text-box";
import DeleteComponent from "../delete-component/delete-component";
import EditComponent from "../edit-component/edit-component";
import UpdateComponent from "../update-component/update-component";
import { useUpdateCm } from "../../utils/useUpdateCm";
import { useUpdateRp } from "../../utils/useUpdateRp";

const CommentComponent = ({ item }) => {
  const supa_replies = useSupa((state) => state.supa_replies);
  const setSelectedComment = useSupa((state) => state.setSelectedComment);
  const setLastSelected = useSupa((state) => state.setLastSelected);
  const selectedComment = useSupa((state) => state.selectedComment);
  const selectedCmToEdit = useSupa((state) => state.selectedCmToEdit);
  const openEdit = useSupa((state) => state.openEdit);
  const { mutate: updateCm, isPending } = useUpdateCm();
  const { mutate: updateRp } = useUpdateRp();

  return (
    <>
      <div className={styles.comment_container}>
        <div className={styles.VoteComponent}>
          <VoteComponent item={item} />
        </div>
        <div className={styles.UserInfo}>
          <UserInfo item={item} />
        </div>
        {item.username === "Tom Rey" && (
          <div className={styles.delete_edit}>
            <DeleteComponent item={item} />
            <EditComponent item={item} />
          </div>
        )}
        <div className={styles.ReplyComponent}>
          {selectedCmToEdit?.id === item?.id &&
          item?.username === "Tom Rey" &&
          openEdit === true ? (
            <UpdateComponent
              item={item}
              updateCm={updateCm}
              updateRp={updateRp}
              isPending={isPending}
            />
          ) : (
            <ReplyComponent
              item={item}
              setSelectedComment={setSelectedComment}
              setLastSelected={setLastSelected}
            />
          )}
        </div>
      </div>
      {selectedComment?.id === item.id && (
        <div className={styles.CustomTextBox}>
          <CustomTextBox />
        </div>
      )}
      <div className={styles.rplyListContainer}>
        {supa_replies[0]?.map((rply) => {
          return (
            rply.comment_id === item.comment_id && (
              <ReplyList rply={rply} key={rply.id} />
            )
          );
        })}
      </div>
    </>
  );
};

export default CommentComponent;
