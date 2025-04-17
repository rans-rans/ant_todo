import { Typography, Button, Tooltip, List } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const { Title } = Typography;


function App() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const [drawerOpen, setDrawerOpen] = useState(false)


  function openDrawer() {
    setDrawerOpen(true)
  }
  function closeDrawer() {
    setDrawerOpen(false)
  }


  return (
    <div className="p-8">
      <div className="flex gap-4 p-8">
        <Title>
          React TODO
        </Title>
        <Tooltip title="Add todo">
          <Button type="primary"
            onClick={openDrawer}
            shape="circle" icon={<PlusOutlined />} />
        </Tooltip>
        <TodoForm drawerOpened={drawerOpen} onDrawerClose={closeDrawer} />
      </div >
      <List
        dataSource={todos}
        renderItem={(item) =>
          <TodoCard todo={item} />
        }
      ></List>
    </div>
  )
}

export default App
