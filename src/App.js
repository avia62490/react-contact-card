import React from 'react'
import emptyStar from './images/empty-star.png'
import filledStar from './images/filled-star.png'
import profilePic from './images/profile-pic.png'
import './App.css';

function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? filledStar : emptyStar
    
    function toggleFavorite() {
        console.log("Toggle Favorite")
    }
    
    return (
        <main>
            <article className="card">
                <img src={profilePic} className="card--image" alt=''/>
                <div className="card--info">
                    <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                        alt=''
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

export default App;
