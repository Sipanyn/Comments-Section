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
        .single();
      if (error) {
        console.log(error);
      }
      if (data) {
        const newVotes = data.votes - 1;

        const { error } = await supabase
          .from("replies")
          .update({ votes: newVotes })
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
