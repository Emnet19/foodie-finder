import React from 'react'
// const [searchTerm,setSearchTerm]= useState('');
// const handleSearch=async ()=>{
//     const results =await serachMealByName(seatchTerm);
//     setMeals(results || [])
// }
const  SearchBar =({onSearch})=> {
  return (
    <div className='mt-2'>
      <button onClick={onSearch} className="bg-green-500 text-white px-4 py-2 rounded ml-2">
        Search
      </button>
      {/* <p className='rounded-2xl  bg-green-200 '>search </p> */}
    </div>
  )
}
export default SearchBar;