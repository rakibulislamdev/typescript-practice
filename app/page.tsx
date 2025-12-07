import AddTodo from "@/components/AddTodo";
import NavBar from "@/components/NavBar";
import Todos from "@/components/Todos";



export default function Home() {

  return (
    <>
      <h1>Todo Next + Typescripts</h1>
      <NavBar />
      <AddTodo />
      <Todos />
    </>
  );
}
