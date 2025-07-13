import { RawUser, User } from "@/app/types/user";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  return data.users.map(
    (user: RawUser): User => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      department: user.company?.department || "Unknown",
    })
  );
}
