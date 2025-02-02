// import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
// import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { createClient } from "@/utils/supabase/server";
import Center from "@/components/Center";
import UserInputForm from "@/components/ManualEntry";
import Cabinet from "@/components/MedCabinet/Cabinet";
import { redirect } from 'next/navigation';
import Intro from "@/components/Homepage/Intro";

export default async function HomePage() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  // If not authenticated, redirect to root
  if (!session) {
    redirect('/');
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '40% 60%' }} className="gap-4 p-4">
      <Center>
        <Intro />
        {/* <UserInputForm /> */}
      </Center>
      <Center>
        <Cabinet />
      </Center>
    </div>
  );
}
