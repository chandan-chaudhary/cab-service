import {useState} from 'react'
import AllVehicles from './AllVehicles';

function ManageVehicles() {
    const [editMode, setEditMode] = useState<string>('');
//   console.log(editMode, 'he');
  
    const handleEditMode = (mode:string)=>{
        setEditMode(mode);
    };
    const handleEditModeColor= (mode:string) =>{
        if(mode === 'add')  return 'bg-teal-500';
        if(mode === 'update')  return 'bg-purple-600';
        if(mode === 'remove')  return 'bg-red-500';
      }
  return (
    <section>
            <div className='bg-gray-100  text-blue-950 py-12 px-2'>

                {/* all vehicles */}
                <div className=''>
                    <h4 className='text-center font-bold text-3xl uppercase'>Vehicles</h4>
                    <AllVehicles />
                </div>
              
                <form className={` ${editMode === '' && 'hidden'} flex flex-col space-y-3 p-5 rounded-lg border-2 border-gray-400 `}>
                <div className='flex justify-center p-4 text-2xl font-bold uppercase'>
                    <h3>Add vehicle</h3>
                </div>
                    {/* VEHICLE TYPE */}
                    <div className='flex flex-col space-y-1'>
                        <label className='text-xl' htmlFor="vehicleType">Vehicle Type:</label>
                        <input type="text" name="vehicleType" placeholder='sedan' className="outline-none rounded-lg bg-inherit p-1 pl-3 border-2 border-gray-500"/>
                    </div>

                    {/* VEHICLE NAME */}
                    <div className='flex flex-col space-y-1'>
                        <label className='text-xl' htmlFor="vehicleType">Vehicle Name:</label>
                        <input type="text" name="vehicleType" placeholder='swift' className="outline-none rounded-lg bg-inherit p-1 pl-3 border-2 border-gray-500"/>
                    </div>

                    {
                       ( editMode !== 'remove') &&
                        <>
                             {/* PRICE */}
                            <div className='flex flex-col space-y-1'>
                                <label className='text-xl' htmlFor="price/km">Price (per KM):</label>
                                <input type="text" name="price/km" placeholder='12/km' className="outline-none rounded-lg bg-inherit p-1 pl-3 border-2 border-gray-500"/>
                            </div>

                            {/* AC NON-AC */}
                            <div className='flex flex-col space-y-1'>
                                <label className='text-xl' htmlFor="ac/non-ac">AC / Non AC:</label>
                                <select name="ac/non-ac" className='bg-inherit p-1.5 px-3 outline-none border-2 border-gray-500 rounded-lg'>
                                    <option value="ac">AC</option>
                                    <option value="non-ac">NON-AC</option>
                                </select>
                            </div>

                            {/* IMAGE */}
                            <div className='flex flex-col space-y-1'>
                                <label className='text-xl' htmlFor="vehicleImage">Vehicle Image:</label>
                                <input type="file" name="vehicleImage" placeholder='sedan' className="outline-none rounded-lg bg-inherit p-1 pl-3 border-2 border-gray-500"/>
                            </div>
                        </>
                    }
                   
                    {/* BUTTON */}
                    <div className='flex justify-center'>
                        <button className={`p-3 ${handleEditModeColor(editMode)} font-bold  rounded-lg uppercase text-white`}>{editMode + ' vehicle'}</button>
                    </div>
                </form>

                {/* VEHICLE CRUD HANDLER */}
                <div  className=" flex space-x-5 items-center justify-center text-center mt-5">
                    <button onClick={() =>handleEditMode('add')} className={`${editMode === 'add' && 'hidden'} bg-teal-500 w-32 mt-5 text-center p-3 rounded-lg uppercase font-bold text-white`}>add</button>
                    <button onClick={() =>handleEditMode('update')} className={`${editMode === 'update' && 'hidden'} bg-purple-600 w-32 mt-5 text-center p-3 rounded-lg uppercase font-bold text-white`}>update</button>
                    <button onClick={() =>handleEditMode('remove')} className={`${editMode === 'remove' && 'hidden'} bg-red-500 w-32 mt-5 text-center p-3 rounded-lg uppercase font-bold text-white`}>remove</button>
                </div>

            </div>

    </section>
  )
}

export default ManageVehicles