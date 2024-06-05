export const user=[
    {id:1,name:"umer",age:30,email:"umerbinsiddiq@gmail.com"},
    {id:2,name:"ali",age:27,email:"umerbinsiddiq@gmail.com"},
    {id:3,name:"usman",age:24,email:"umerbinsiddiq@gmail.com"},
    {id:4,name:"abdullah",age:5,email:"umerbinsiddiq@gmail.com"},
    {id:5,name:"abdur rehman",age:2,email:"umerbinsiddiq@gmail.com"},
]

const {username,password} = process.env;
export const connectionString = 'mongodb+srv://'+username+':'+password+'@cluster0.hcwzdpc.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0'