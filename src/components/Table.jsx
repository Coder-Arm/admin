import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeUsers } from '../store/adminSlice';
const Table = () => {
    const usersState = useSelector(state => state.admin.admin);
    const dispatch = useDispatch();
    console.log('state',usersState)

  return (
    usersState.length > 1 &&
    <table className='w-[100%] border-2 border-slate-900 mt-8 box-border'>
      <thead>
        <tr>
            <th className='border-2 border-slate-900'>ID</th>
            <th className='border-2 border-slate-900'>Username</th>
            <th className='border-2 border-slate-900'>Password</th>
            <th  className='border-2 border-slate-900'>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            usersState.slice(1).map((item) => {
                return <tr key={item.id}>
                    <td className='border-2 border-slate-900 text-center'>{item.id}</td>
                    <td className='border-2 border-slate-900 text-center'>{item.username}</td>
                    <td className='border-2 border-slate-900 text-center'>{item.password}</td>
                    <td className='border-2 border-slate-900 text-center p-2'>
                        <button className='text-white bg-red-600 pt-1 pb-1 pl-4 pr-4 rounded-md hover:bg-red-500'
                        onClick={() => dispatch(removeUsers({id : item.id}))}
                        >DELETE</button>
                    </td>
                </tr>
            })
        }
      </tbody>
    </table>
  )
}

export default Table