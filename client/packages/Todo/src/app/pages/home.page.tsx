import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div>
      XP Home
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: 200
        }}
      >
        <h1 tw="p-2 font-bold mt-2 bg-yellow-400">pro kid laroi Ho s sleeps</h1>
        <button
          style={{
            padding: 10,
            backgroundColor: 'green',
            color: 'white',
            marginBottom: 10
          }}
          onClick={() => navigate('dashboard')}
        >
          to Dashboard
        </button>
        <button
          style={{
            padding: 10,
            backgroundColor: 'paleturquoise',
            color: 'black',
            marginBottom: 10
          }}
          onClick={() => navigate('chat')}
        >
          to Chat
        </button>
      </div>
    </div>
  )
}

export default Home
