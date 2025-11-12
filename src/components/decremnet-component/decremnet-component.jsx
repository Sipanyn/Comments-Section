import { useDecreaseCmVote } from "../../utils/useDecreaseCmVote ";
import { useDecreaseRpVote } from "../../utils/useDecreaseRpVote ";
import styles from "./decremnet-component.module.css";

const DecremnetComponent = ({ item, rply }) => {
  const { mutate: decreaseRpVote } = useDecreaseRpVote();
  const { mutate: decreaseVote } = useDecreaseCmVote();
  return (
    <button
      disabled={
        (item && item.isVoted === "decreased") ||
        (rply && rply.isVoted === "decreased")
      }
      onClick={() => {
        item ? decreaseVote(item) : decreaseRpVote(rply);
      }}
      className={styles.decrement}
    >
      -
    </button>
  );
};

export default DecremnetComponent;
