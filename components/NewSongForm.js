import React, { useState } from 'react'

const NewSongForm = ({addSong}) => {
  const [ title, setTitle] = useState('')
  const handleChange = (e)=>{
    console.log(e.target.value)
    setTitle(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("the title is ", title)
    addSong(title)
    setTitle('')
  }
  return (
    <form onSubmit = {handleSubmit}>
      <label for=" song-input" > Enter Song </label>
      <input type=" text" value = {title} id=" song-input" onChange = {handleChange} />
      <input type='submit' value='add'  />
    </form>
  );
}

export default NewSongForm