import { create } from "zustand";

const useProfileStore = create((set) => ({
  session: null,
  firstName: "",
  lastName: "",
  major: "",
  bio: "",
  year: 0,
  studentGroups: "",
  experiences: "",
  linkedin: "",
  profilePicture: "",
  setSession: (session) => set({ session }),
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setMajor: (major) => set({ major }),
  setBio: (bio) => set({ bio }),
  setYear: (year) => set({ year }),
  setStudentGroups: (studentGroups) => set({ studentGroups }),
  setExperiences: (experiences) => set({ experiences }),
  setLinkedin: (linkedin) => set({ linkedin }),
  setProfilePicture: (profilePicture) => set({ profilePicture }),
}));

export { useProfileStore };
