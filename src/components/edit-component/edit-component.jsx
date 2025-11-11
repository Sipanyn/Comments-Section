import { useSupa } from "../../supa-Store";
import styles from "./edit-component.module.css";

const EditComponent = ({ rply, item }) => {
  const setSelectedCmToEdit = useSupa((state) => state.setSelectedCmToEdit);
  const setSelectedRpToEdit = useSupa((state) => state.setSelectedRpToEdit);
  const setOpenEdit = useSupa((state) => state.setOpenEdit);

  return (
    <div
      onClick={() => {
        setOpenEdit(true);
        if (item) {
          setSelectedCmToEdit(item);
        } else {
          setSelectedRpToEdit(rply);
        }
      }}
      className={styles.editComponent}
    >
      <svg className={styles.edit_icon}>
        <use href={"/sprite.svg#edit_icon"} />
      </svg>
      <p>Edit</p>
    </div>
  );
};

export default EditComponent;
