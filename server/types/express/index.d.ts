import { OrgMember, User } from "..";

declare global {
  declare namespace Express {
    interface Request {
      user: User;
      orgMember?: OrgMember;
    }
  }
}
