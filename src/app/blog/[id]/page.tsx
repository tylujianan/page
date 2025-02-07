import React from 'react'
import { Card } from 'antd'
import { data } from '@/data'

interface IParams {
    params: {
        id: string
    }
}
export async function generateMetadata({params}:IParams){
    const { id } = await params
    return {
        title: `博客详情 - ${id}`,
    }
}

export default async function Page({ params }:IParams) {
    const { id } = await params
    const item = data.find(item => item.id === +id)
    return (
        <Card title={item?.title}>
            <p>{item?.body}</p>
        </Card>
    )
}
