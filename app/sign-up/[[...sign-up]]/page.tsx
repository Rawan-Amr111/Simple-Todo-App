import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black">
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
}
