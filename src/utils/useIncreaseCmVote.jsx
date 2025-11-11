import { useMutation } from "@tanstack/react-query";
import supabase from "../../supabase-client";
import { queryClient } from "../../queryClient";
import { useSupa } from "../supa-Store";

export const useIncreaseCmVote = () => {
  const setData = useSupa((state) => state.setData);
  return useMutation({
    mutationFn: async (item) => {
      const { data, error } = await supabase
        .from("comments")
        .select("votes")
        .eq("id", item.id)
        .single();
      if (error) {
        console.log(error);
      }
      if (data) {
        const newVotes = data.votes + 1;

        const { error } = await supabase
          .from("comments")
          .update({ votes: newVotes })
          .eq("id", item.id);
        if (error) {
          console.log(error);
        }
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(["comments"]);

      const commentQuery = queryClient.getQueryData(["comments"]);

      setData(commentQuery.data);
    },
  });
};
