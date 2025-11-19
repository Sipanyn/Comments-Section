import "./App.css";
import CommentList from "./components/comment-list/comment-list";
import MainTextBox from "./components/main-text-box/main-text-box";
import useDataQueryHook from "../useDataQueryHook";
import { useEffect } from "react";
import { useSupa } from "./supa-Store";
import { SvgSpinners12DotsScaleRotate } from "./components/spinner/spinner";
import QueryErrorMessage from "./components/query-error-message/query-error-message";
function App() {
  const { commentQuery, replyQuery, UserQuery } = useDataQueryHook();
  const setData = useSupa((state) => state.setData);
  const setReplies = useSupa((state) => state.setReplies);
  const setUser = useSupa((state) => state.setUser);
  useEffect(() => {
    if (replyQuery && commentQuery.data && UserQuery.data) {
      setReplies(replyQuery.data);
      setData(commentQuery.data);
      setUser(UserQuery.data);
    }
  });

  if (commentQuery.isLoading && replyQuery.isLoading && UserQuery.isLoading) {
    return <SvgSpinners12DotsScaleRotate />;
  }
  if (replyQuery.isError || commentQuery.isError || UserQuery.isError) {
    return <QueryErrorMessage />;
  }

  return (
    <>
      <div className="main">
        <CommentList />
      </div>
      <MainTextBox />
    </>
  );
}

export default App;
