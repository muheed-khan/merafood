import React from 'react'
import broastImage from '../assets/broast.jpg'
import pizzaImage from '../assets/pizza.jpg'
import burgerImage from '../assets/burger.jpg'

export default function Carousal() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div class="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                        <form class="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src={burgerImage} className="d-block w-100" alt="burger" style={{ filter: "brightness(30%", height: "30rem" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={broastImage} className="d-block w-100" alt="broast" style={{ filter: "brightness(30%", height: "30rem" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={pizzaImage} className="d-block w-100" alt="pizza" style={{ filter: "brightness(30%", height: "30rem" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </>
    )
}
