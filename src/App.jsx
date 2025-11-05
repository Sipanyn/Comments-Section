import "./App.css";
import CommentList from "./components/comment-list/comment-list";
import MainTextBox from "./components/main-text-box/main-text-box";
import supabase from "../supabase-client";
import { useSupa } from "./supa-Store";
import { useEffect } from "react";
function App() {
  const setData = useSupa((state) => state.setData);
  const setReplies = useSupa((state) => state.setReplies);
  async function fetchData() {
    let { data, error } = await supabase.from("comments").select("*");
    if (error) {
      console.log(error);
    } else {
      // console.log(data);
      setData(data);
    }
  }
  async function fetchReplies() {
    let { data, error } = await supabase.from("replies").select("*");
    if (error) {
      console.log(error);
    } else {
      // console.log(data);
      setReplies(data);
    }
  }
  useEffect(() => {
    fetchData();
    fetchReplies();
  }, []);

  return (
    <div className="main">
      <CommentList />
      <MainTextBox />
    </div>
  );
}

export default App;
