import { useMutation } from "@tanstack/react-query";
import supabase from "/supabase-client.js";
import { useSupa } from "./src/supa-Store";
import { queryClient } from "./queryClient";

export const useSendRply = () => {
  const setData = useSupa((state) => state.setData);
  const setReplies = useSupa((state) => state.setReplies);
  const supa_user = useSupa((state) => state.supa_user);
  const selectedRply = useSupa((state) => state.selectedRply);
  const setSelectedRplyNull = useSupa((state) => state.setSelectedRplyNull);
  const selectedComment = useSupa((state) => state.selectedComment);
  const setCustomTextBoxValueFree = useSupa(
    (state) => state.setCustomTextBoxValueFree
  );
  const setSelectedCommentNull = useSupa(
    (state) => state.setSelectedCommentNull
  );

  return useMutation({
    mutationFn: async (RplyContent) => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      const { data, error } = await supabase
        .from("replies")
        .insert([
          {
            content: RplyContent,
            image_url: supa_user?.[0]?.[0].image_url,
            username: supa_user?.[0]?.[0].username,
            ...(selectedComment || selectedRply
              ? {
                  comment_id:
                    selectedComment?.comment_id || selectedRply?.comment_id,
                }
              : {}),

            votes: 0,
          },
        ])
        .select();

      if (error) throw error;
      else {
        setCustomTextBoxValueFree();
        setSelectedRplyNull();
        setSelectedCommentNull();
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
