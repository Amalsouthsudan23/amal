import mgurush from '../assets/images/mgurush.png'
import momo2 from '../assets/images/momo.jpg'
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/mastercard.jpg'
import { useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function Donate() {
  const navigate = useNavigate()

  const [amoutn, setAmount] = useState(0)
  return (
    <div className='px-4 py-3'>
      <div className="flex items-center mb-8">
        <FiChevronLeft className='text-2xl text-gray-400 mr-1' onClick={() => navigate(-1)} />
        <h1 className="text-2xl text-center">Donate</h1>
      </div>
      <p>You selcted: {amoutn}</p>
      <div className="flex justify-evenly text-white items-center mb-6">
        {amounts.map(a => (
          <span className="bg-primary rounded px-3 py-2" key={a} onClick={() => setAmount(a)}>{a}$</span>
        ))}
      </div>
      <div className="flex justify-center">
        <input name='amout' type='text' className="blockpx-4 p-3 border border-primary rounded " placeholder='Other Amount'
          onChange={e => setAmount(e.target.value)}
        />
      </div>
      <textarea className="mt-8 p-3 w-full border" placeholder='Description'></textarea>
      <h3 className="text-2xl">Donate through:</h3>
      <div className="flex justify-evenly mt-5">
        <div className="flex-1">
          <img className='h-[3rem]' src={mgurush} alt='mgurush' />
        </div>
        <div className="flex-1 mx-2">
          <img className='h-[3rem]' src={momo2} alt='momo2' />
        </div>
        <div className="flex-1">
          <img className='h-[3rem]' src={mastercard} alt='mastercard' />
        </div>
        <div className="flex-1 ml-2">
          <img className='h-[3rem]' src={visa} alt='visa' />
        </div>
      </div>
      <div className="mt-5">
        <button className="px-8 py-2 bg-sky-600 rounded">Donate</button>
      </div>
    </div>
  )
}


const amounts = [5, 30, 45, 60]