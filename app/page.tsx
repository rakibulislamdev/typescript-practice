import AddTodo from "@/components/AddTodo";
import { ModeToggle } from "@/components/ModeToggle";
import NavBar from "@/components/NavBar";
import Todos from "@/components/Todos";



export default function Home() {

  return (
    <>
      <main className="flex flex-col items-center min-h-screen">
        <div>
          <ModeToggle />
          <h1 className="text-2xl font-bold mb-4">Todo Next + Typescripts</h1>
          <NavBar />
          <AddTodo />
          <Todos />
        </div>
      </main>
    </>
  );
}
