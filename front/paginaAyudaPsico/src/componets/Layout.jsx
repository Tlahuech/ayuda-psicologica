import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <main>
      {/* Aquí se cargarán dinámicamente Inicio, Tenis o Contacto */}
      <Outlet /> 
    </main>
  );
}

export default Layout;