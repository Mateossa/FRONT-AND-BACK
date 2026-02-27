import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/shared/layout/Navbar";
// import heroBg from "@/assets/images/imagen-hero.jpg"

export default function MainLayout(){


  const Location = useLocation();

  const isHome = location.pathname === "/"
  return(
    <div className="min-h-screen text-text-primary">

      {/* Navbar */}
      <Navbar variant= {isHome ? "transparent" : "solid"}/>
      
      {/* Contenido externo que se inyecta */}

      <main className="mx-auto">
        <Outlet />
      </main>

    </div>
  );
};
