import { useEffect, useState } from "react";

function autoArticles() {
    // State to store CSS variable values
    const [carArticles, setCarArticles] = useState([]);

    useEffect(() => {
        //Get CSS variable values
        const rootStyles = getComputedStyle(document.documentElement);

    const cars = [
        {
            id:1,
            title: "SEDANS",
            imgSrc: "./src/assets/icon-sedans.svg",
            description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
            backgroundColor: rootStyles.getPropertyValue("--bright-orange").trim()
        },
        {
            id:2,
            title: "SUVS",
            imgSrc: "./src/assets/icon-suvs.svg",
            description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
            backgroundColor: rootStyles.getPropertyValue("--dark-cyan").trim()
        },
        {
            id:3,
            title: "LUXURY",
            imgSrc: "./src/assets/icon-luxury.svg",
            description: "Cruise in the best car brands without the bloated prices. enjoy the enhanced comfort of a luxury rental and arrive in style.",
            backgroundColor: rootStyles.getPropertyValue("--very-dark-cyan").trim()
        },
    ];

    setCarArticles(cars);

}, []); //Runs once when component mounts

    return (
        <div className='main container-fluid d-flex flex-wrap justify-content-center h-100 lexend-deca'>

            {carArticles.map((car,index) => {

                const isFirst = index === 0;
                const isLast = index === carArticles.length -1;

                return(

                <article 
                    key={car.id} 
                    className='card' 

                    style={{ 
                        backgroundColor: car.backgroundColor
                    }}
                >

                    <img 
                        src={car.imgSrc} 
                        className="img-fluid w-50" 
                        alt={car.title} 
                    />

                    <h1 className="big-shoulders-display">
                            {car.title}
                    </h1>

                    <p>{car.description}</p>

                    <button 
                    style={{color: car.backgroundColor}}>
                        Learn More
                    </button>

                </article>

                );

            })}

        </div>
    );
}

export default autoArticles;