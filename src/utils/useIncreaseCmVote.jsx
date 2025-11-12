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
        .select("isVoted")
        .eq("id", item.id)
        .select();
      if (error) {
        console.log(error);
      }
      if (data?.[0].isVoted === "Not") {
        const newVotes = data[0].votes + 1;

        const { error } = await supabase
          .from("comments")
          .update({ votes: newVotes, isVoted: "increased" })
          .eq("id", item.id);
        if (error) {
          console.log(error);
        }
      }
      if (data?.[0].isVoted === "decreased") {
        const newVotes = data[0].votes + 2;

        const { error } = await supabase
          .from("comments")
          .update({ votes: newVotes, isVoted: "increased" })
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
