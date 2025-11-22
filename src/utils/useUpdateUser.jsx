import supabase from "../../supabase-client";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../queryClient";
import { useSupa } from "../supa-Store";

export const useUpdateUser = () => {
  const supa_user = useSupa((state) => state.supa_user);

  return useMutation({
    mutationFn: async (ip) => {
      const currentIp = supa_user?.[0]?.[0]?.ip;
      const userId = supa_user?.[0]?.[0]?.id;

      if (currentIp !== ip && userId) {
        const { data, error } = await supabase
          .from("user")
          .update({ ip })
          .eq("id", userId)
          .select();

        if (error) throw error;

        console.log("new:", data?.[0]?.ip, "old:", currentIp);

        const [commentsRes, repliesRes] = await Promise.all([
          supabase
            .from("comments")
            .update({ isVoted: "Not" })
            .neq("id", 0)
            .neq("id", 0)
            .select("*"),
          supabase
            .from("replies")
            .update({ isVoted: "Not" })
            .neq("id", 0)
            .select("*"),
        ]);

        if (commentsRes.error) throw commentsRes.error;
        if (repliesRes.error) throw repliesRes.error;

        return data;
      }

      return { message: "IP unchanged, no update performed." };
    },
  });
};
