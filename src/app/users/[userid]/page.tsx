export default async function UserDetail({params}:any){
    let data = await getUserById(params.userid)
    return(
        <div>
            <h1>User Detail Page</h1>
            <p>Name :{data.name}</p>
            <p>Age :{data.age}</p>
        </div>
    )
}

async  function getUserById(id:any){
    let user = await fetch(`http://localhost:3000/api/users/${id}`);
    user = await user.json();
    return user;
}