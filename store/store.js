import { create } from "zustand";
import { supabase } from "../utils/supabase";

const useProfileStore = create((set) => ({
  firstName: "",
  lastName: "",
  major: "",
  bio: "",
  year: 0,
  session: null,
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setMajor: (major) => set({ major }),
  setBio: (bio) => set({ bio }),
  setYear: (year) => set({ year }),
  setSession: (session) => set({ session }),
}));

export { useProfileStore };
