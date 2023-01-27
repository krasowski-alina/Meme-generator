import logo from './logo.png'
export default function Header(){
    return(
        <nav>
            <img src={logo} alt="troll face" className='logo'/>
            <h2>Meme Generator</h2>
        </nav>
    )
}