import React from 'react'
import { DataTable } from '../../components/data-table'
import { User, columns } from './columns'

async function getUsers(): Promise<User[]> {
    const res = await fetch(
        'https://prasutigirha.vercel.app/api/baby/get'
    )
    const data = await res.json()
    return data
}

export default async function Page() {
    const data = await getUsers()

    return (
        <section className="py-24">
            <div className="container">
            <h1 className="text-3xl font-bold">All users</h1>
            <DataTable columns={columns} data={data} />
            </div>
    </section>  
    )
}

//git branch test //
