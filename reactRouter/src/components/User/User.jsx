import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';

function User() {
    const {UserId} = useParams();
    const user = useLoaderData();
    console.log(user);

  return (
    <div>User : {user.name}</div>
  )
}

export default User

//fetching the user data even before the component loading is started.....similar to angular resolvers 
//.....kind of .....bcause in loaders when the user hover over then only it starts fetching data and 
//saving it in cache unlike in angular where user when starts navigating in comps then we fetch data in resolvers
// https://reactrouter.com/en/main/start/overview#data-loading
export const UserInfoData = async ({params}) => {
    const {UserId} = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/` + UserId );
    debugger
    if(!response.status === 200) throw new Error('Not a valid request');
    return response.json();    
}