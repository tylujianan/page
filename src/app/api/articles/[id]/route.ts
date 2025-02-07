import { NextResponse } from "next/server";
import db from '@/db';

interface IParams {params: {id:string}}

export async function DELETE(request: Request, {params} : IParams){
    const { id } = await params;
    await db.update(({posts}) =>{
        const idx = posts.findIndex(post => post.id === id);
        posts.splice(idx, 1);
    })
    return NextResponse.json({
        code: 0,
        message: 'delete success'
    })
}

export async function PATCH(request: Request, {params}: IParams){
    const data = await request.json();
    const { id } = await params;
    let idx = -1;
    await db.update(({posts}) =>{
        idx = posts.findIndex(post => post.id === id);
        posts[idx] = {
            ...posts[idx],
            ...data
        };
    })
    return NextResponse.json({
        code: 0,
        message: 'patch success',
        data: db.data.posts[idx]
    })
}

export async function GET(request: Request, {params}: IParams){
    const { id } = await params;
    const data = db.data.posts.find(post => post.id === id);
    return NextResponse.json({
        code: 0,
        message: 'get success',
        data
    })
}