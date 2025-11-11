import { useIncreaseCmVote } from "../../utils/useIncreaseCmVote";
import { useIncreaseRpVote } from "../../utils/useIncreaseRpVote";
import styles from "./increment-component.module.css";

const IncrementComponent = ({ item, rply }) => {
  const { mutate: increaseVote } = useIncreaseCmVote();
  const { mutate: increaseRpVote } = useIncreaseRpVote();
  return (
    <div
      onClick={() => {
        item ? increaseVote(item) : increaseRpVote(rply);
      }}
      className={styles.increment}
    >
      +
    </div>
  );
};

export default IncrementComponent;
