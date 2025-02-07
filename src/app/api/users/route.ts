import { NextResponse } from "next/server";
interface IParams {params: {id:string}}

export async function GET(request: Request, {params}: IParams){
    return NextResponse.json({
        code: 0,
        message: 'get success'
    })
}