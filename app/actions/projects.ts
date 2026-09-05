"use server";

import { prisma } from "@/lib/prisma"; // PrismaClient инстанц

// Төслүүдийг унших хүсэлт
export async function getProjects() {
  try {
    const projects = await prisma.project.findMany();
    return { success: true, data: projects };
  } catch (error) {
    return { success: false, error: "Төслүүдийг татахад алдаа гарлаа" };
  }
}

// Шинэ төсөл үүсгэх хүсэлт
export async function createProject(data: {
  name: string;
  description?: string;
}) {
  try {
    const newProject = await prisma.project.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
    return { success: true, data: newProject };
  } catch (error) {
    return { success: false, error: "Төсөл үүсгэж чадсангүй" };
  }
}
