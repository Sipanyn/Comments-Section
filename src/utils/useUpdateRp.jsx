import supabase from "../../supabase-client";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../queryClient";
import { useSupa } from "../supa-Store";
export const useUpdateRp = () => {
  const setReplies = useSupa((state) => state.setReplies);
  const editableContent = useSupa((state) => state.editableContent);
  const setOpenEdit = useSupa((state) => state.setOpenEdit);
  const setEditableContentNull = useSupa(
    (state) => state.setEditableContentNull
  );
  return useMutation({
    mutationFn: async (item) => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      if (editableContent.length > 0) {
        const { data, error } = await supabase
          .from("replies")
          .update({ content: editableContent })
          .eq("id", item.id)
          .select();
        if (error) throw error;
        else {
          setEditableContentNull();
          console.log(data);

          return data[0];
        }
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(["replies"]);

      const replyQuery = queryClient.getQueryData(["replies"]);

      setOpenEdit(false);
      setReplies(replyQuery.data);
    },
  });
};
