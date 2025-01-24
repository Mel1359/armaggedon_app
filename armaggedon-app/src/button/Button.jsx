export function Button(){
    return <button onClick={()=>{
        click();
        hello();
    }}>Custon кнопка</button>

}

function click(){
    console.log("НАЖАЛ")
}


function hello(){
    console.log("привееееет")
}