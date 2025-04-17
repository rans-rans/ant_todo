import { Button, Checkbox, List, Typography } from "antd";
import { Todo } from "./todo";
import DeleteFilled from "@ant-design/icons/lib/icons/DeleteFilled";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./todoslice";

const { Text } = Typography

interface TodoCardProps {
    todo: Todo
}

export default function TodoCard({ todo }: TodoCardProps) {
    const dispatch = useDispatch();

    function toggleComplete() {
        dispatch(toggleTodo(todo.id))
    }
    function deleteItem() {
        dispatch(removeTodo(todo.id))
    }

    return <List.Item
        extra={
            <Button icon={<DeleteFilled />}
                danger onClick={deleteItem}
            />}
    >
        <Checkbox checked={todo.completed} onChange={toggleComplete}>
            <Text key={`${todo.id}-${todo.completed}`} delete={todo.completed}>
                {todo.title}
            </Text>
        </Checkbox>
    </List.Item>

}