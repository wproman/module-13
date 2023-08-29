import { NextResponse } from "next/server"


export async function POST(req,res){
    let token = req.cookies.get('Cookie_2')
    return NextResponse.json({mgs: token})
}