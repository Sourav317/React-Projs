import {useLocation} from 'react-router-dom'

function BreadCrumps() {

    const location = useLocation();
    console.log(location);

   
    const crumps = location.pathname.split('/');
    const arr =crumps.filter(crump => crump !== "");
    let  s = ''; 
    arr.forEach(crump => s += crump + ' ->');


  return (
    <div>BreadCrumps
        <p>{s} </p>

    </div>
  )
}

export default BreadCrumps