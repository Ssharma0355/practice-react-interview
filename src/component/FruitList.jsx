const fruits = ["Apple", "Mango","banana"];
function FruitList(){
    return (

        <div>
            <ul>
                {fruits.map((fruit, index) =>(
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}
export default FruitList