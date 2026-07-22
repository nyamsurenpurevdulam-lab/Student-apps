import Sidebar from "./components/Sidebar";
export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="content">
        <h1>Student App</h1>
        <p>Дотуур байрны бүртгэлийн систем</p>
      </main>
    </>
  );
}