import React from 'react';
import { useState } from 'react';
import './App.css';
import { supabase } from './supabaseClient';


function FavoriteBooks() {
    const [myBooks, setMyBooks] = useState([]);
    async function getMyBooks() {
      let {data: books} = await supabase
        .from('books')
        .select('*')
  
      setMyBooks(books);
    }
  
  
    getMyBooks();
  
  
    return (
        <div className="App">
          <div id="main-header">
            <h1 class="clickable" onClick={() => {window.location.href="/";}}>My Favorite Books</h1>
            <hr></hr>
          </div>
          <div className="App-header">
          <div class="container main-content" style={{width: 75 + "%"}}>
          
          {
          myBooks.map(book => (
            <div class="row align-self-center book-entry">
              <div class="card book-card" style=
              {{width: 15 + "rem", 
              background: "none",
              border: "none",
              margin: 2 + "vh",
              fontFamily: "helvetica"}}>
                  <img src={`https://covers.openlibrary.org/b/ISBN/${book.isbn}-M.jpg`} 
                  style={{minWidth: "0", 
                  borderRadius: 10 + "px",
                  width: 100 + "%",
                  marginBottom: 1 + "vh"}} alt={`Cover of ${book.title} by ${book.author}`}></img>
                  <div class="card-body clickable" onClick={() => {window.location.href=`${book.amazon_url}`;}} style={{width: 100 + "%",
                      borderRadius: 10 + "px"}}>
                    <p class="card-text book-title" style={{
                      background: "none",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 1.2 + "vw"}}>{book.title}</p>
                  </div>
              </div>
              <div class="col book-description" style={{position: "relative",
            fontSize: 2 + "vw"}}>
                <p class="align-text-bottom" style={{position: "absolute", bottom: 0}}>{book.description}</p>
              </div>
              <hr></hr>
            </div>
          ))
          }
             
          </div>
          <footer id="my-footer">
            <span id="footer-text" style={{background: "none"}}>&copy; Riley Tucker</span>
        </footer>
          </div>
        </div>
        )
  }

  export default FavoriteBooks;