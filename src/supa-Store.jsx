import { create } from "zustand";
export const useSupa = create((set) => ({
  supa_data: [],
  supa_replies: [],
  textBoxValue: "",
  customTextBoxValue: "",
  supa_user: [],
  selectedComment: null,
  selectedRply: null,
  selectedCmToEdit: null,
  selectedRpToEdit: null,
  editableContent: "",
  openEdit: false,
  ip: "",
  setIp: (ip) =>
    set({
      ip: ip,
    }),
  setData: (items) => set({ supa_data: items }),
  setReplies: (item) => {
    set({
      supa_replies: [item],
    });
  },
  setUser: (user) => {
    set({
      supa_user: [user],
    });
  },
  setTextBoxValue: (letter) => {
    set({
      textBoxValue: letter,
    });
  },
  setTextBoxValueFree: () => {
    set({ textBoxValue: "" });
  },
  setCustomTextBoxValue: (letter) => {
    set({
      customTextBoxValue: letter,
    });
  },
  setCustomTextBoxValueFree: () => {
    set({ customTextBoxValue: "" });
  },
  setSelectedComment: (item) => {
    set((state) => ({
      selectedComment: state.selectedComment?.id === item.id ? null : item,
      selectedRply: null,
    })),
      console.log("selectedComment_Id:", item.comment_id);
  },
  setSelectedCommentNull: () => {
    set({ selectedComment: null });
  },
  setSelectedRply: (reply) => {
    set((state) => ({
      selectedRply: state.selectedRply?.id === reply.id ? null : reply,
      selectedComment: null,
    })),
      console.log("selectedRply_id:", reply);
  },
  setSelectedRplyNull: () => {
    set({ selectedRply: null });
  },
  setSelectedCmToEdit: (item) => {
    set({
      selectedCmToEdit: item,
      selectedRpToEdit: null,
      selectedComment: null,
      selectedRply: null,
    });
    console.log("selectedCmToEdit", item);
  },
  setSelectedRpToEdit: (item) => {
    set({
      selectedRpToEdit: item,
      selectedCmToEdit: null,
      selectedComment: null,
      selectedRply: null,
    });
    console.log("selectedRpToEdit", item);
  },
  setEditableContent: (content) => {
    set({
      editableContent: content,
    });
  },
  setEditableContentNull: () => {
    set({ editableContent: "" });
  },
  setOpenEdit: (entry) => {
    set({ openEdit: entry });
  },
}));
