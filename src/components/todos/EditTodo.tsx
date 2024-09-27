"use client";

import * as actions from "@/actions";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import { useState } from "react";
import { todoProps } from "@/types";
import { MdEdit } from "react-icons/md";

const EditTodo = ({ todo }: { todo: todoProps }) => {
  const [editTodoState, setEditTodoState] = useState(false);

  const handleEdit = () => {
    if (todo.isComplete) {
      return;
    }
    setEditTodoState(!editTodoState);
  };

  const handleSubmit = () => {
    setEditTodoState(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<MdEdit />} actionButton />
      {editTodoState ? (
        <Form action={actions.editTodo} onSubmit={handleSubmit}>
        <Input name="inputId" value={todo.id} type="hidden"></Input>
        <div className="flex flex-col justify-center">
          <Input type="text" name="newTitle" placeholder="Edit Title..." />
          <Input type="text" name="newDescription" placeholder="Edit Description..." />
          <Button type="submit" text="Save"></Button>
        </div>
      </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
