
function PropsChild(props) {

  //console.log(props);

  return (
    <>
      <div className="bg-red-400">PropChild</div>
      <li>{props.anime} </li>
      <li>{props.myObj.name} </li>
      <li>{props.myArr[0]} </li>
    </>
  )
}

export default PropsChild