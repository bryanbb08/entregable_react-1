import React from "react"

const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {

    console.log(randomColor)

    const colorObj = {
        color : randomColor
    }

    const backgroundObject = {
        backgroundColor: randomColor
    }

    return (
        <article style={colorObj} className="card">

{/* pendiente el 3 componente 10/10 */}

{/* componente */}
            <p className="card__icon"><i class='bx bxs-bookmark-alt-minus'></i>{getRandomAll}</p>
            <p className="card__quote">"{randomQuote.quote}"</p>
            <h1 className="card__author">¡{randomQuote.author}!</h1>
{/* componente */}
            <button style={backgroundObject} className="card__btn"
            onClick={getRandomAll}
            >&#62;</button>

        </article>
    )
}

export default QuoteBox