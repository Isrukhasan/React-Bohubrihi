
import '../stylesheet/custom-style.css';

const Book=(props)=>{
    return(
        <div className='Book'>
            <h3>Book: {props.bookName}</h3>
            <h4> Writer: {props.writer}</h4>
            <p onClick={props.delete}> Delete</p>
            
        </div>
        
    )
} 
export default Book