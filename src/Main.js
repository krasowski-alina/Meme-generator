export default function Main(){
    return(
        <main>
            <form>
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
                <button className="btn">Get a new meme image</button>
            </form>
            
        </main>
    )
}
// https://api.imgflip.com/get_memes  API