import PropsChild from "./PropsChild";

function Props() {

    let Obj = {
        name : 'Props',
        age : 30
    };

    let arr = [1,2,3];


  return (
    <>
        <div>Props</div>
        <PropsChild anime='Naruto' myObj={Obj} myArr ={arr}/>
    </>
  )
}

export default Props