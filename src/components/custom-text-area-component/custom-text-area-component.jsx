import styles from "./custom-text-area-component.module.css";
import { useSupa } from "../../supa-Store";
const CustomTextAreaComponent = ({ setCustomTextBoxValue }) => {
  return (
    <textarea
      onChange={(e) => setCustomTextBoxValue(e.target.value)}
      className={styles.textarea}
      placeholder="Add Comment..."
    ></textarea>
  );
};

export default CustomTextAreaComponent;
