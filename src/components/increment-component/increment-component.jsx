import { useIncreaseCmVote } from "../../utils/useIncreaseCmVote";
import { useIncreaseRpVote } from "../../utils/useIncreaseRpVote";
import styles from "./increment-component.module.css";

const IncrementComponent = ({ item, rply }) => {
  const { mutate: increaseVote } = useIncreaseCmVote();
  const { mutate: increaseRpVote } = useIncreaseRpVote();
  return (
    <button
      disabled={
        (item && item.isVoted === "increased") ||
        (rply && rply.isVoted === "increased")
      }
      onClick={() => {
        item ? increaseVote(item) : increaseRpVote(rply);
      }}
      className={styles.increment}
    >
      +
    </button>
  );
};

export default IncrementComponent;
