// import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
// import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import SupabaseTest from "./notes/page";
import Center from "@/components/Center";
import UserInputForm from "@/components/ManualEntry";
import Cabinet from "@/components/MedCabinet/Cabinet";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <Center>
          <UserInputForm />
        </Center>
        <Center>
          <Cabinet />
        </Center>
    </div>
  );
}
