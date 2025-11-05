import { create } from "zustand";
export const useSupa = create((set) => ({
  supa_data: [],
  supa_replies: [],
  setData: (item) => {
    set({
      supa_data: [item],
    });
  },
  setReplies: (item) => {
    set({
      supa_replies: [item],
    });
  },
}));
