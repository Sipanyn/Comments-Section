import { useMutation } from "@tanstack/react-query";
import supabase from "/supabase-client.js";
import { useSupa } from "./src/supa-Store";
import { queryClient } from "./queryClient";

export const useSendComment = () => {
  const setData = useSupa((state) => state.setData);
  const setReplies = useSupa((state) => state.setReplies);
  const supa_user = useSupa((state) => state.supa_user);

  const setTextBoxValueFree = useSupa((state) => state.setTextBoxValueFree);

  return useMutation({
    mutationFn: async (commentContent) => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });

      const { data, error } = await supabase
        .from("comments")
        .insert([
          {
            content: commentContent,
            image_url: supa_user?.[0]?.[0].image_url,
            username: supa_user?.[0]?.[0].username,
          },
        ])
        .select();

      if (error) throw error;
      else {
        setTextBoxValueFree();
        return data;
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
