import { useEffect, useState } from "react"

export default function Main(){
    const [allMemeImages, setallMemeImages] = useState([])
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    useEffect(()=> {
        async function getMeme(){
            const response = await fetch("https://api.imgflip.com/get_memes");
            const data = await response.json();
            setallMemeImages(data.data.memes)
        }
        getMeme()
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    const getRandomMeme = () => {
        const random = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[random].url
        setMeme({
            topText: "",
            bottomText: "",
            randomImage: url
        })
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return(
        <main>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={meme.topText}
                    onChange={handleChange}
                    placeholder="Top text"
                    name="topText"
                    className="inputField"/>
                <input
                    type="text"
                    value={meme.bottomText}
                    onChange={handleChange}
                    placeholder="Bottom text"
                    name="bottomText"
                    className="inputField"/>
                <button className="btn" 
                onClick={getRandomMeme}>Get a new meme image</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} alt="Meme" className="memeImage"/>
                <h2 className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}
