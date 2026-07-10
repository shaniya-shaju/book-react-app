import React, { useState } from 'react'
import Navigation from './Navigation'


const BookView = () => {
    const [data,changeData]=useState(
        [
            {
              "name": "The Alchemist",
              "author": "Paulo Coelho",
              "price": "₹399",
              "avatar": "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
            },
            {
              "name": "Atomic Habits",
              "author": "James Clear",
              "price": "₹599",
              "avatar": "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
            },
            {
              "name": "Rich Dad Poor Dad",
              "author": "Robert T. Kiyosaki",
              "price": "₹450",
              "avatar": "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
            },
            {
              "name": "Think and Grow Rich",
              "author": "Napoleon Hill",
              "price": "₹349",
              "avatar": "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg"
            },
            {
              "name": "The Psychology of Money",
              "author": "Morgan Housel",
              "price": "₹499",
              "avatar": "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg"
            },
            {
              "name": "Ikigai",
              "author": "Héctor García",
              "price": "₹399",
              "avatar": "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg"
            },
            {
              "name": "The Power of Your Subconscious Mind",
              "author": "Joseph Murphy",
              "price": "₹299",
              "avatar": "https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg"
            },
            {
              "name": "The 5 AM Club",
              "author": "Robin Sharma",
              "price": "₹550",
              "avatar": "https://images-na.ssl-images-amazon.com/images/I/71zytzrg6lL.jpg"
            },
            {
              "name": "Deep Work",
              "author": "Cal Newport",
              "price": "₹525",
              "avatar": "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg"
            },
            {
              "name": "The Hobbit",
              "author": "J.R.R. Tolkien",
              "price": "₹699",
              "avatar": "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
            }
          ]

    )
  return (
    <div>
        <center><h1>View Book</h1></center>
        <Navigation />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        {data.map(
                            (value,indedx) =>{
                                return (
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                            <div class="card" >
                                <div class="card-body">
                                    <img src={value.avatar} class="card-img-top" alt="The Alchemist" height="400"/>
                                    <h5 class="card-title">{value.name}</h5>
                                    <p class="card-text"><strong>Author:</strong> {value.author}</p>
                                    <p class="card-text"><strong>{value.price}</strong></p>
                                    <a href="#" class="btn btn-primary">Add to Cart</a>
                                </div>
                            </div>
                        </div>   
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default BookView