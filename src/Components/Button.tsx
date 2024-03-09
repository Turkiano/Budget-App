
// how to use Button component in anoher component 

//  <Button label = "submit"/>
// in tyescript, you need to declare the type of props 
type ButtonProps = {
    label: string
}

export function Button({label} : ButtonProps){
    return <button className='btn'>{label}</button>
}