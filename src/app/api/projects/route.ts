// src/app/api/projects/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        order: "asc",
      },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects from database:", error);
    // Ensure the response is a proper Response object
    return new Response(JSON.stringify({ message: "Failed to fetch projects" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  // NOTE: prisma.$disconnect() is generally not needed in serverless environments
  // like Vercel, as it can interfere with connection management.
}