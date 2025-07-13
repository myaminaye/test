import { fetchUsers } from "@/lib/fetchUsers";
import { groupByDepartment } from "@/lib/groupByDepartment";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await fetchUsers();
    const grouped = groupByDepartment(users);
    return NextResponse.json(grouped);
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch or group users", error }, { status: 500 });
  }
}
