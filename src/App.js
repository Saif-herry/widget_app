import logo from './logo.svg'
import './App.css'
import users from '././userData'
import { useState } from 'react'

function App () {
  const [search, setSearch] = useState('')

  const filterUser = users?.filter(
    user =>
      `${user?.name?.first} ${user?.name?.last}`
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      `${user?.location?.city}, ${user?.location?.country}`
        .toLowerCase()
        .includes(search.toLowerCase())
  )

  console.log(filterUser, '......')
  return (
    <section>
      <div className='w-full h-40 bg-blue-500 flex flex-col p-8 gap-1 lg:gap-0 text-start lg:text-center'>
        <h1>User List</h1>
        <p>Search by name/Location</p>
        <div className='flex justify-center w-full '>
          <input
            type='text'
            value={search}
            name='search'
            className='h-8 w-full lg:w-[40%] rounded-full bg-blue-900 text-white px-6 outline-none'
            placeholder='Search'
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className='w-full flex justify-center pt-5'>
        <div className=' w-full lg:w-[40%] flex flex-col gap-5'>
          {filterUser?.map(item => (
            <div key={item?.id} className='flex flex-col gap-5'>
              <div className='flex gap-8 px-8'>
                <div className=' lg:w-[30%] '>
                  <img
                    src={item?.picture}
                    alt='broken-img'
                    className=' h-16 w-20 lg:w-20 lg:h-20 rounded-full '
                  />
                </div>
                <div className='w-full lg:w-[70%] '>
                  <div className='flex gap-1 font-bold'>
                    <p>{item?.name?.first}</p>
                    <p>{item?.name?.last}</p>
                  </div>

                  <div className='flex gap-1 '>
                    <p>{item?.location?.city}</p>
                    <p>{item?.location?.country}</p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default App
