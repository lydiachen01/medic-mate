// import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
// import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import SupabaseTest from "./notes/page";
import UserInputForm from "@/components/UserInputForm"
import CenteredPage from "@/components/CenteredPage"
import { PillBottle } from "lucide-react"

export default function Home() {
  return (
    <div className="grid grid-cols-2">
      <CenteredPage children={<UserInputForm />}/>
      <PillBottle />
      <div>hello</div>
    </div>
  );
}
