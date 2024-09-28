import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <div>
            <h1>Main Home Page</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dignissimos ab exercitationem voluptatibus, consequuntur ad explicabo nostrum repellat molestiae enim laudantium, temporibus aliquid vel excepturi corporis qui quo ut. Temporibus!</p>
            <button onClick={goToLogin}>Go to Login page</button>
        </div>
    )
    
}

export default Home