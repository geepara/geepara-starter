import { useClerk } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";

import { currentUserQuery } from "@/utils/queries/users";

export default function Page() {
  const { signOut } = useClerk();
  const { data: user } = useQuery(currentUserQuery);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
      <div className="text-xl font-semibold text-blue-500">
        Hello world! Welcome to geepara-starter, user {user?.clerkId}!
      </div>
    </div>
  );
}
