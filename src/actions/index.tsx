"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!title.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      title,
      description,
    },
  });

  revalidatePath("/");
}

export async function changeStatus(formData: FormData) {
    const inputId = formData.get("inputId") as string;
    const todo = await prisma.todo.findUnique({
      where: {
        id: inputId,
      },
    });
  
    const updateStatus = !todo?.isComplete;
  
    await prisma.todo.update({
      where: {
        id: inputId,
      },
      data: {
        isComplete: updateStatus,
      },
    });
  
    revalidatePath("/");
  }
  

  export async function editTodo(formData: FormData) {
    const newTitle = formData.get("newTitle") as string;
    const newDescription = formData.get("newDescription") as string;
    const inputId = formData.get("inputId") as string;
  
    await prisma.todo.update({
      where: {
        id: inputId,
      },
      data: {
        title: newTitle,
        description: newDescription,
      },
    });
  
    revalidatePath("/");
  }

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  await prisma.todo.delete({
    where: {
      id: inputId,
    },
  });

  revalidatePath("/");
}
