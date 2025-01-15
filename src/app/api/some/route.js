import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json('Api Funcionando Correctamente')
}