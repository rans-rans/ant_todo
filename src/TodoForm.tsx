import { Button, Drawer, Form, FormProps, Input } from "antd";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoslice";
import { Todo } from "./todo";


type FieldType = {
    item?: string;
};

interface TodoFormProps {
    drawerOpened: boolean;
    onDrawerClose: () => void;
}


export default function TodoForm({ drawerOpened, onDrawerClose }: TodoFormProps) {
    const dispatch = useDispatch();


    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        const todo: Todo = {
            id: Date.now().toLocaleString(),
            title: values.item ?? "",
            completed: false
        }
        dispatch(addTodo(todo));
        onDrawerClose()
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (_) => {
        alert("Please enter your item")
    };



    return <Drawer open={drawerOpened} placement="bottom" title="Add new todo Item" onClose={onDrawerClose}>
        <Form
            name="todo_form"
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item<FieldType>
                label="Item"
                name="item"
                rules={[{ required: true, message: 'Please input your item' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Add Item</Button>
            </Form.Item>
        </Form>
    </Drawer>
}