import styles from "./update-component.module.css";

const UpdateComponent = ({ item, rply, isPending, updateCm, updateRp }) => {
  return (
    <div
      onClick={() => {
        item ? updateCm(item) : updateRp(rply);
      }}
      className={styles.UpdateComponent}
    >
      {isPending ? "Updating..." : "Update"}
    </div>
  );
};

export default UpdateComponent;
