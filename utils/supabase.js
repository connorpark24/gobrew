import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ohzgeumrmbiwcdwemyvi.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oemdldW1ybWJpd2Nkd2VteXZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0NzUyMzgsImV4cCI6MjAxNzA1MTIzOH0.Ax_NSB67VUaLuXHEQpWlJZv0o7wJIrlJalvsP32UZPo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
