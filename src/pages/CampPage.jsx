import { FiChevronLeft } from 'react-icons/fi'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { campsData } from '../assets/data';

export default function CampPage() {

    const { campId } = useParams();
    const navigate = useNavigate()

    const currentCamp = campsData[campId - 1]

  return (
    <div className='px-4 py-5'>
        <div className="flex items-center mb-8">
            <FiChevronLeft className='text-2xl text-gray-400 mr-1' onClick={() => navigate(-1)} />
            <h2 className="text-xl font-bold">{currentCamp.name}</h2>
        </div>
        <div className="flex items-center">
            <div className="bg-gray-200 h-10 w-10 mr-2 rounded-full">
            </div>
            Camp Reperentative
        </div>
        <img className="h-[180px] w-full rounded-xl my-3" src={currentCamp.image} alt='' />
        <div className="text-cente mb-6">
            <h2 className="text-xl">Mangala Camp</h2>
            <p className='text-sm'>{currentCamp.detail} </p>
        </div>
        <Link className="blcok my-5 px-3 py-2 bg-primary text-white rounded" to='/donate'>Make Donation</Link>
    </div>
  )
}
