import { NextResponse } from "next/server"


export async function POST(req,res){
    let token = req.cookies.get('Cookie_3')
    return NextResponse.json({msg: token})
}