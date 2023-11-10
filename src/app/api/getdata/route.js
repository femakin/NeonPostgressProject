

// async function getData() {
//     const sql = neon(process.env.DATABASE_URL);

//     const response = await sql`SELECT version()`;
//     console.log(response);
//     return response;
// }

// export default async function Page() {
//     const data = await getData();
// }


import { neon } from '@neondatabase/serverless';
import { NextResponse } from "next/server";

export async function GET(request) {
    // const body = await request.json()

    const sql = neon(process.env.DATABASE_URL);

    // const response = await sql`SELECT version()`;
    const response = await sql`select * from playing_with_neon`
    console.log(response);


    // console.log(data, 'datat')
    return NextResponse.json(response)

}



"select * from post"
