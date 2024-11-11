import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/login");
  }
  return <div>Dashboard</div>;
};

export default HomePage;
