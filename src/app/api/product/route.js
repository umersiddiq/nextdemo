import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionString } from "@/util/db";
import { Product } from "@/util/model/product";

export async function GET(){
    try{
        await mongoose.connect(connectionString);
        const data = await Product.find();

        return NextResponse.json({result:data})
    }
    catch(e){
        return NextResponse.json({result:false})
    }
}

export async function POST(request){
    const payload = await request.json();
    await mongoose.connect(connectionString);
    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({result,success:true});
}