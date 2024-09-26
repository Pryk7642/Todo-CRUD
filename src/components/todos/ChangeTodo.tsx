import { todoProps } from "@/types";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";
import * as actions from "@/actions";
import { FaCheck } from "react-icons/fa";

const ChangeTodo = ({ todo }: { todo: todoProps }) => {
    return (
      <form action={actions.changeStatus}>
        <Input name="inputId" value={todo.id} type="hidden"></Input>
        <Button
          text={<FaCheck />}
          type="submit"
          actionButton
          bgColor={todo.isComplete ? "bg-green-400" : "bg-blue-500"}
        ></Button>
      </form>
    );
  };

export default ChangeTodo;
