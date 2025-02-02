import Welcome from "@/components/Homepage/Welcome";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import i18n from "@/utils/i18n"; // Assuming you have an i18n setup

export default async function Home() {
  const [language, setLanguage] = useState("en");
  const router = useRouter();

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith("es")) {
      setLanguage("es");
      i18n.changeLanguage("es");
    }
  }, []);

  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    return redirect("/home");
  } 

  return <Welcome language={language} />;
};