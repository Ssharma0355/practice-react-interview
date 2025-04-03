const empployee = ["Sachin", "Sharma" , "Apple"];
function Search(){
    return(

        <div>
            <ul>
                {empployee.map((employee,index)=>(
                    <li key={index}>{employee}</li>
                ))}
            </ul>
        </div>
    )

}

export default Search