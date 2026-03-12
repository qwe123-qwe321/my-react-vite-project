import img from '../assets/image-qr-code.png'
export default function body() {
  return (
    <div className="min-h-screen bg-slate-300 flex justify-center items-center p-4">
      <div className="bg-white w-[400px] h-[700px] rounded-4xl max-w-full overflow-hidden">
        <div className='p-6 flex justify-center items-center'>
          <img src={img} className=' rounded-2xl ' />
        </div>
      
<div className="px-6 py-6 text-center"> 
  <h2 className="text-2xl font-bold text-gray-800 ">
    Improve your front-end skills by building projects
  </h2>
  <p className="text-gray-500 text-xl  mx-auto">
    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
  </p>
</div>
      </div>
       
    </div>
  )
}

