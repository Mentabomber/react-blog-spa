import { Outlet } from "react-router-dom";
import TheFooter from "../components/TheFooter";
import TheNavbar from "../components/TheNavbar";

export default function DefaultLayout() {
  return (
    <>
      <TheNavbar></TheNavbar>

      <main className="min-h-[50vh]">
        <Outlet></Outlet>
      </main>

      <TheFooter></TheFooter>
    </>
  );
}