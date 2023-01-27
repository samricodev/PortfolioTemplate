import PostCard from '../components/PostCard'
import { posts } from '../profile'
import Layout from './layout'

function Blog() {
  return (
    <Layout title={'My Blog'}>
      <h1 className="text-center">Blog</h1>
      <div className="row">
        {
          posts.map((post, i) => (
            <PostCard key={i} post={post}/>
          ))
        }
      </div>
    </Layout>
  )
}

export default Blog