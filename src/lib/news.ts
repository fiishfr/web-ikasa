import { supabase } from "./supabase";
import { News } from "@/types/news";

export async function getNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("published", true)
    .order("created_at", {
      ascending: false,
    });

    console.log("DATA:", data);
    console.log("ERROR:", error);

  if (error) throw error;

  return data;
}

export async function getNewsBySlug(slug: string) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;

  return data;
}

export async function getRelatedNews(categoryId: string) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .limit(3);

  if (error) throw error;

  return data;
}