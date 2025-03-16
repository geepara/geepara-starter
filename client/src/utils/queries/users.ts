import { UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { User } from "@/types";
import { getCurrentUser } from "@/utils/api/users";

export const currentUserQuery: UseQueryOptions<User, AxiosError, User> = {
  queryKey: ["currentUser"],
  queryFn: getCurrentUser,
};
