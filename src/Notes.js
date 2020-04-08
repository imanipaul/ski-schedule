import React, {useState} from 'react'

export default function Notes() {

    const [allNotes, setAllNotes] = useState([])

    const handleSubmit = () => {
        let text = document.querySelector('textarea').value
        console.log(text)
        console.log('all notes was', allNotes)
        setAllNotes(allNotes => [...allNotes, text])
      
    }

    return (
        <section className = 'note'>
            <div className = 'form'>

            <p>Enter note here</p>
            <label>Date</label>
            <input type='date' name='date' />
            <textarea>

            </textarea>
            <button onClick={() => handleSubmit()}>Submit</button>
            </div>
            <div className = 'all-notes'>
                {allNotes.map((note, index) => {
                    return <p key={index}>{note}</p>
                })}
            </div>
        </section>
    )
}