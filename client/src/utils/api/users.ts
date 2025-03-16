import { formatResponse } from "@/utils/api/utils";
import { client } from "@/utils/axios";

const endpoint = "/users";

export const getCurrentUser = async () => {
  const response = await client.get(`${endpoint}/current`);

  return formatResponse(response.data);
};
