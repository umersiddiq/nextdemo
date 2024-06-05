import { NextResponse } from "next/server";

export async function PUT(request,content){
    const product = content.params.productid;
    const filter ={_id:product};
    const payload = await request.json();
    await mongoose.connect(connectionString);
    const result= await Product.findOneAndUpdate(filter,payload);
    return NextResponse.json({result,success:true});
}