import { useEffect, useState } from "react"

export default function Main(){
    const [allMemeImages, setallMemeImages] = useState([])
    const [meme, setMeme] = useState({
        topText: "",
        bottomtext: "",
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
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }
    return(
        <main>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    className="inputField"/>
                <input
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    className="inputField"/>
                <button className="btn" 
                onClick={getRandomMeme}>Get a new meme image</button>
                <img src={meme.randomImage} alt="Meme" className="memeImage"/>
            </form>
            
        </main>
    )
}
