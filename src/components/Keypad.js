// Code Keypad Component Here

function Keypad (){

    const handleOnChange = () => {
        console.log('Entering password...')
    }
    
    return (
        <input type='password' onChange={handleOnChange}></input>
    )
}

export default Keypad;