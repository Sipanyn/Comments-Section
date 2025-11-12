import supabase from "../../supabase-client";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../queryClient";
import { useSupa } from "../supa-Store";
export const useDeleteCm = () => {
  const setData = useSupa((state) => state.setData);
  const setReplies = useSupa((state) => state.setReplies);

  return useMutation({
    mutationFn: async (item) => {
      const { error, data } = await supabase
        .from("comments")
        .delete()
        .eq("id", item.id)
        .select();
      if (data) {
        const { error, data } = await supabase
          .from("replies")
          .delete()
          .eq("comment_id", item.comment_id);
      }
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries(["replies"]);
      await queryClient.invalidateQueries(["comments"]);

      const replyQuery = queryClient.getQueryData(["replies"]);
      const commentQuery = queryClient.getQueryData(["comments"]);

      setReplies(replyQuery.data);
      setData(commentQuery.data);
    },
  });
};
