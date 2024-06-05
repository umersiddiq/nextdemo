


export default async function Page(){
    const product  = await GetAllProduct();
    console.log(product)
    // const [product,setProduct] = useState([]);
    // useEffect(async () =>{
    //     let data = await fetch("https://dummyjson.com/products")
    //     data = await data.json();
    //     setProduct(data.products);
    // },[])
    return(
        <div>
            <h1>Product List Page</h1>
            <table>
                <thead>
                    <tr>
                        <td>Mobile Name</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Company</td>
                        <td>Category</td>
                    </tr>
                </thead>
                <tbody>
          
            {
                product.map((item:any)=>(
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.color}</td>
                    <td>{item.company}</td>
                    <td>{item.category}</td>
                    </tr> 
                ))
                
            }
                      
                </tbody>
            </table>
            
        </div>
    )
}


export async function GetAllProduct() {
    let data = await fetch("http://localhost:3000/api/product")
    data = await data.json();
    return data.data;
}