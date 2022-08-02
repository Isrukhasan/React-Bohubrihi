import { Component } from 'react';
import './App.css';
import Book from './components/Book';



//class component
class App extends Component{

  state={
    books:[
      {bookName:"Harry Potter",writer:"JK "},
      {bookName:"Al Quran",writer:"Allah" },
      {bookName:"Injeel",writer:"Allah" },
    ]

  }
  
  deleteBookState=(index)=>{
    console.log("changeBookState");
    //get current books
    const currentBooks=this.state.books
    currentBooks.splice(index,1);
    this.setState({
      books:currentBooks
    })
  };
  
  render()  {
    const BookState=this.state.books
    console.log(BookState);

    const books=BookState.map((book,index) =>{
      return(
        <Book 
        bookName={book.bookName} 
        writer={book.writer}
        delete={this.deleteBookState}
        />
      );
    });
    
    return(
      <div className="App">
        <h1>BooK List</h1>
       {books}
      </div>
      
    )

  }
}
export default App;