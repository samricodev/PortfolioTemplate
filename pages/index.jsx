import Layout from './layout'
import Image from 'next/image'
import { skills, experiences, projects } from '../profile'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>

      {/* Presentation Card */}
      <header className='row' id='top'>
        <div className='col-md-12'>
          <div className='card card-body bg-secondary text-light'>
            <div className='row'>
              <div className='col-md-4'>
                <Image className='card-img-top' width={200} height={200} src='/profile.jpeg' alt='avatar' priority />
              </div>
              <div className='col-md-8'>
                <h1>Sam Rico</h1>
                <h3>Software Enginner</h3>
                <p>
                  Hi, it is me Samuel. I am a software developer in progress with a very nice skills.
                  My purpose in this life is better my aim in Valorant. It is so hard but not is impossible
                  Cha cha chau
                </p>
                <a href='/hireme' className='btn btn-primary rounded'>Hire me</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SSkils and Experience */}
      <div className='row py-4 '>
        <div className='col-md-4 mt-2'>
          <div className='card bg-light rounded'>
            <div className='card-body'>
              <h1 className='card-title'>Skills</h1>
              {
                skills.map(skill => (
                  <div className='py-3' key={skill.name}>
                    <h3>{skill.name}</h3>
                    <div className="progress">
                      <div className="progress-bar" role='progressbar' style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='col-md-8 mt-2'>
          <div className='card bg-light rounded'>
            <div className='card-body'>
              <h1 className='card-title'>Experience</h1>
              <ul style={{ listStyle: 'none' }}>
                {
                  experiences.map(({ title, from, to, description }) => (
                    <li key={title}>
                      <h3>{title}</h3>
                      <h5>{from} - {to ? to : 'current'}</h5>
                      <p>{description}</p>
                    </li>
                  ))
                }
              </ul>
              <Link href='/#top' className='btn btn-secondary rounded'>Know more</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className='text-center text-light'>Portfolio</h1>
              </div>
              {
                projects.map(({ name, description, image }, i) => (
                  <div className="col-md-4 p-2" key={i}>
                    <div className="card">
                      <div className="overflow">
                        <Image className='card-img-top' src={`/${image}`} width={250} height={250} alt={name} />
                      </div>
                      <div className="card-body">
                        <h3 className='card-title'>{name}</h3>
                        <p className='card-text'>{description}</p>
                        <Link href='#top' className='btn btn-primary rounded'>Know More</Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="text-center mt-4">
              <Link href='/portfolio' className='btn btn-outline-light rounded'>More projects</Link>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}
