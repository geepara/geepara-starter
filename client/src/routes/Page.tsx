import { useClerk } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";

import { currentUserQuery } from "@/utils/queries/users";

export default function Page() {
  const { signOut } = useClerk();
  const { data: user } = useQuery(currentUserQuery);

  return (
    <div>
      <div className="flex w-full justify-between p-4">
        <div className="text-xl font-semibold">geepara-starter</div>
        <div>
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      </div>
      <div className="p-4 font-semibold text-blue-500">
        Hello world! Welcome to geepara-starter user #{user?.id}!
      </div>
    </div>
  );
}
