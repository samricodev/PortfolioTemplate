import Layout from './layout'
import Link from 'next/link'
import Error from './_error'
import Image from 'next/image'

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/users/samricodev')
  const data = await res.json()

  const statusCode = res.status > 200 ? res.status : false
  return {
    props: {
      user: data,
      statusCode
    }
  }
}

export default function GitHubPage({ user, statusCode }) {

  if (statusCode){
    return <Error statuscode={statusCode}/>
  } 

  return (
    <Layout footer={false} title={'Github Profile'} dark={true}>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className='card card-body text-center rounded'>
            <h1>{user.name}</h1>
            <h3>{user.login}</h3>
            <Image style={{ objectFit: 'contain'}} className='card-img-top rounded' src={user.avatar_url} width={250} height={250} alt={`${user.name} avatar` } />
            <p>{user.bio}</p>
            <Link href='/blog' className='btn btn-outline-primary'>My Blog</Link>
            <Link href={user.html_url} target='_blank' className='btn btn-outline-secondary mt-2'>Go to my profile</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
