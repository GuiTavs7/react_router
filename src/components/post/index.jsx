import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

async function getPost(id) {
    const response = await fetch(`/json/post-${id}.json`)
    return await response.json()
}

const PostDetails = () => {
    const [post, setPost] = useState({})

    const { id } = useParams(); //"id" vem da rota "/post/:id"

    useEffect(() => {
        async function fetchData() {
            const post = await getPost(id)
            setPost(post.data)
        }

        fetchData()
    }, [id])

    return (
        <section>
            <Link to='/'>Voltar</Link>
            <div>
                <Link to={`/post/${post.id}`}>
                    <img src={post.image} alt={post.title} />
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                </Link>
            </div>
        </section>
    )
}

export { PostDetails }