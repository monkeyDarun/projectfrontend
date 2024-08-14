import React from 'react';
import './Home.css';
//import houseImage1 from 'https://media.designcafe.com/wp-content/uploads/2022/04/07185020/easter-home-decor-ideas.jpg'; // Replace with your actual image paths
//import houseImage2 from 'https://www.centuryply.com/assets/img/blog/25-08-22/11.jpg'; // Replace with your actual image paths

const Home = () => {
    return (
        <div className="home">
            <header className="header">
                <h1>Home Decor Ideas</h1>
            </header>
            <main className="main-content">
                <section className="left-panel">
                    <img src={'https://media.designcafe.com/wp-content/uploads/2022/04/07185020/easter-home-decor-ideas.jpg'} alt="House Interior 1" />
                    <img src={'https://www.centuryply.com/assets/img/blog/25-08-22/11.jpg'} alt="House Interior 2" />
                    <img src={'https://media.designcafe.com/wp-content/uploads/2020/07/23205856/home-interior-design-ideas.jpg'} alt="House Interior 3" />
                </section>
                <section className="center-panel">
                    <div className="blogs">
                        <div className="blog">
                            <h2>Creative DIY Wall Art Projects</h2>
                            <p>Add a personal touch to your home with DIY wall art projects. From canvas paintings to wall-mounted sculptures, explore creative ways to make your walls stand out.</p>
                        </div>
                        <div className="blog">
                            <h2>Modern Minimalist Living Room Designs</h2>
                            <p>Transform your living space with sleek, minimalist decor ideas that emphasize simplicity and functionality. Discover the beauty of clean lines, neutral colors, and clutter-free environments.</p>
                        </div>
                        <div className="blog">
                            <h2>Eco-Friendly Home Decor Tips</h2>
                            <p>Make your home more sustainable with eco-friendly decor ideas. Learn how to incorporate natural materials, energy-efficient lighting, and upcycled furniture into your living spaces.</p>
                        </div>
                    </div>
                </section>
                <section className="right-panel">
                    <div className="search">
                        <h2>Search Blogs</h2>
                        <input type="text" placeholder="Search..." />
                    </div>
                    <div className="consultation-form">
                        <h2>Register for Consultation</h2>
                        <form>
                            <label>Name:</label>
                            <input type="text" name="name" />
                            <label>Email:</label>
                            <input type="email" name="email" />
                            <label>Message:</label>
                            <textarea name="message"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
