import Layout from './layout'

function Error({ statuscode }) {
  return (
    <Layout footer={false}>
      <h1 className='text-center'>Error {statuscode ? statuscode : 'NULL'}</h1>
      <div class="alert alert-danger" role="alert">
        <p className='text-center'>Could not load your page</p>
      </div>
    </Layout>
  )
}

export default Error