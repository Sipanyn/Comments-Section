import { useEffect, useRef } from "react";
import { useSupa } from "../../supa-Store";
import styles from "./edit-text-box.module.css";

const EditTextBox = ({ content }) => {
  const setEditableContent = useSupa((state) => state.setEditableContent);
  const textareaRef = useRef(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.focus();
      el.setSelectionRange(el.value.length, el.value.length); // Move cursor to end
    }
  }, []);

  return (
    <textarea
      ref={textareaRef}
      autoFocus
      onChange={(e) => {
        setEditableContent(e.target.value);
      }}
      defaultValue={content}
      className={styles.textarea}
    ></textarea>
  );
};

export default EditTextBox;
