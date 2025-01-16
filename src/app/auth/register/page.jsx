"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {

        if (data.password !== data.confirmPassword) {
            return alert("Las contraseñas no coinciden")
        }

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(
                {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (res.ok) {
            router.push('/auth/login')
        }
    });

    console.log(errors);

    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <form onSubmit={onSubmit} className="w-1/4">
                <h1 className="text-slate-200 font-bold text-4xl mb-4">
                    Registrate
                </h1>

                <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
                    Nombre Usuario:
                </label>
                <input
                    type="text"
                    {...register("username", {
                        required: {
                            value: true,
                            message: 'El usuario es obligatorio'
                        }
                    })}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    placeholder="Usuario..."
                />
                {errors.username && (
                    <span className="text-red-400 text-xs">{errors.username.message}</span>
                )}

                <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
                    Correo Electrónico:
                </label>
                <input type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: 'El correo es obligatorio'
                        }
                    })}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    placeholder="usuario@correo.com"
                />
                {errors.email && (
                    <span className="text-red-400 text-xs">{errors.email.message}</span>
                )}

                <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
                    Contraseña:
                </label>
                <input type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: 'La contraseña es obligatoria'
                        }
                    })}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    placeholder="*********"
                />
                {errors.password && (
                    <span className="text-red-400 text-xs">{errors.password.message}</span>
                )}

                <label htmlFor="confirmPassword" className="text-slate-500 mb-2 block text-sm">
                    Confirmar Contraseña:
                </label>
                <input type="password"
                    {...register("confirmPassword", {
                        required: {
                            value: true,
                            message: 'La confirmación es obligatoria'
                        }
                    })}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    placeholder="Contraseña..."
                />
                {errors.confirmPassword && (
                    <span className="text-red-400 text-xs">{errors.confirmPassword.message}</span>
                )}

                <button
                    className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2"
                >Registrarse
                </button>
            </form>
        </div>
    );
}

export default RegisterPage