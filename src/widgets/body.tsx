import img from '../assets/image-qr-code.png'
export default function body() {
  return (
    <div className="min-h-screen bg-slate-300 m-0 p-0 overflow-hidden">
      <div className="bg-white w-[400px] h-[700px] rounded-4xl m-auto mt-80">
        <div className='p-6'>
          <img src={img} className=' rounded-2xl ' />
        </div>
        <div >
          <h3 className='p-3'>Improve your font-end skills by building projects</h3>
          <p>improve your font-end skills by building projects</p>
        </div>
      </div>
       
    </div>
  )
}

