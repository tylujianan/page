import BlogList from '@/components/BlogList'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: '博客列表'
}

export default function Page() {
    return <BlogList/>
}

