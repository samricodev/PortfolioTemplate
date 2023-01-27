import Image from 'next/image'
import Link from 'next/link'

function PostCard({ post }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="overflow">
          <Image className='card-img-top' src={post.imageURL} alt={post.title} width={250} height={250} />
        </div>
        <div className="card-body">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <Link href={`/post?title=${post.title}`} className='btn btn-primary rounded'>Read</Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard