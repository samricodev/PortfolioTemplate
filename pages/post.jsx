import Layout from './layout'
import { useRouter} from 'next/router'
import { posts } from '@/profile'
import Image from 'next/image'

function Post () {

  const router = useRouter()
  const post = posts.filter(post => post.title === router.query.title)[0]

  return (
    <Layout footer={false} title={post.title}>
      <div className="text-center">
        <h1>{post.title}</h1>
        <Image className='img-fluid' src={post.imageURL} width={250} height={250} alt={post.title} />
        <p>{post.content}</p>
      </div>
    </Layout>
  )
}

export default Post