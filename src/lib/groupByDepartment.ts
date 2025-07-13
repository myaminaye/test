import { User } from "@/app/types/user";

export type GroupedUsers = Record<string, User[]>;

export function groupByDepartment(users: User[]): GroupedUsers {
  return users.reduce((acc: GroupedUsers, user) => {
    const dept = user.department || "Unknown";
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(user);
    return acc;
  }, {});
}
