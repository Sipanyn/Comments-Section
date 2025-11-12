import { useMutation } from "@tanstack/react-query";
import supabase from "../../supabase-client";
import { queryClient } from "../../queryClient";
import { useSupa } from "../supa-Store";

export const useDecreaseRpVote = () => {
  const setReplies = useSupa((state) => state.setReplies);
  return useMutation({
    mutationFn: async (rply) => {
      const { data, error } = await supabase
        .from("replies")
        .select("votes")
        .eq("id", rply.id)
        .select();
      if (error) {
        console.log(error);
      }
      if (data?.[0].isVoted === "Not") {
        const newVotes = data[0].votes - 1;

        const { error } = await supabase
          .from("replies")
          .update({ votes: newVotes, isVoted: "decreased" })
          .eq("id", rply.id);
        if (error) {
          console.log(error);
        }
      }
      if (data?.[0].isVoted === "increased") {
        const newVotes = data[0].votes - 2;

        const { error } = await supabase
          .from("replies")
          .update({ votes: newVotes, isVoted: "decreased" })
          .eq("id", rply.id);
        if (error) {
          console.log(error);
        }
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(["replies"]);

      const commentQuery = queryClient.getQueryData(["replies"]);

      setReplies(commentQuery.data);
    },
  });
};
