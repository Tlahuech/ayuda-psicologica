import { Outlet } from "react-router-dom";
import MenuNavegacion from "./MenuNavegacion";

export default function Layout() {
  return (
    <>
      <MenuNavegacion />
      <main>
        <Outlet /> {/* Aquí se "inyectará" el contenido de la página actual */}
      </main>
    </>
  );
}