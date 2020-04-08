import React, {useState} from 'react'

export default function Notes() {

    const [allNotes, setAllNotes] = useState([])

    const displayNotes = () => {
        let text = document.querySelector('textarea').value
        console.log(text)
        console.log('all notes was', allNotes)
        setAllNotes(allNotes => [...allNotes, text])
        // console.log('all notes is', allNotes)
        for (const note of allNotes) {
        return <p>{note}</p>
        }
    }

    return (
        <section className = 'note'>
            <div className = 'form'>

            <p>Enter note here</p>
            <label>Date</label>
            <input type='date' name='date' />
            <textarea>

            </textarea>
            <button onClick={() => displayNotes()}>Submit</button>
            </div>
            <div className = 'all-notes'>
                {allNotes.map((note) => {
                    return <p key={note}>{note}</p>
                })}
            </div>
        </section>
    )
}