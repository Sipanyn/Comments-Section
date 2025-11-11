import DecremnetComponent from "../decremnet-component/decremnet-component";
import IncrementComponent from "../increment-component/increment-component";
import styles from "./vote-component.module.css";

const VoteComponent = ({ item, rply }) => {
  return (
    <div className={styles.vote_container}>
      <IncrementComponent item={item} rply={rply} />
      <p className={styles.count}>
        {item?.votes}
        {rply?.votes}
      </p>
      <DecremnetComponent item={item} rply={rply} />
    </div>
  );
};

export default VoteComponent;
