// eslint-disable-next-line react/prop-types
const Input = ({label}) => {
  return (
    <div>
        <h1 className="font-alexandria font-light text-lg">{label}<span className="text-red-600"> *</span></h1>
        <input type="text" className="h-[57px] mt-2 rounded border w-[400px] border-[#D3D3D3]" />
    </div>
  )
}

export default Input