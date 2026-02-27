// Página pública

import heroBg from "@/assets/images/imagen-hero.jpg";

export default function HomePage(){

    return(
        <section
            className=" relative min-h-screen w-full flex items-center justify-center text-black"
            style={
                {
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }
         }
        >
        <div className="absolute inset-0 -z-10 bg-black/"></div>

        <div className="relative z-10 text-center">
            <h1 className="text-h1 font-heading">
                Bienvenido al sena 
            </h1>
                <p className= "text-body">
                    Aprende según tus gusto
                </p>
        
        
        </div>
        </section>
    )
}