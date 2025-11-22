import { useQuery } from "@tanstack/react-query";
import supabase from "./supabase-client";

export default function useDataQueryHook() {
  const commentQuery = useQuery({
    queryKey: ["comment"],
    queryFn: async () => {
      let { data, error } = await supabase
        .from("comments")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) {
        console.log(error);
      } else {
        return data;
      }
    },
  });

  const replyQuery = useQuery({
    queryKey: ["reply"],
    queryFn: async () => {
      let { data, error } = await supabase
        .from("replies")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) {
        console.log(error);
      } else {
        return data;
      }
    },
  });
  const UserQuery = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      let { data, error } = await supabase.from("user").select("*");
      if (error) {
        console.log(error);
      } else {
        return data;
      }
    },
  });
  return {
    commentQuery,
    replyQuery,
    UserQuery,
  };
}
