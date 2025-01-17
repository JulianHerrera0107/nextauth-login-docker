import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

async function Navbar() {
    const session = await getServerSession(authOptions);
    console.log(session);
    return (
        <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-3">

            <h1 className="text-xl font-bold">Escappy Travel</h1>

            <ul className="flex gap-x-2">
                {/* Si hay una sesión que NO esta activa muestra el Home Page */}
                {!session?.user ? (
                    <>
                        <li>
                            <Link href="/">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/auth/login">Iniciar Sesion</Link>
                        </li>
                        <li>
                            <Link href="/auth/register">Registrarse</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/dashboard/settings">Configuración</Link>
                        </li>
                        <li>
                            <Link href="/api/auth/signout">Cerrar Sesion</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar