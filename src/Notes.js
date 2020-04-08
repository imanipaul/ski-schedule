import React, {useState} from 'react'

export default function Notes() {

    const [allNotes, setAllNotes] = useState([])
    const [chosenDate, setChosenDate] = useState(null)

    const handleSubmit = () => {
        let text = document.querySelector('textarea').value
        let date = document.querySelector('input[type="date"]').value
        console.log(text)
        console.log('all notes was', allNotes)
        setAllNotes(allNotes => [...allNotes, [handleDate(date), text]])
        console.log(date)
        // setChosenDate(handleDate(date))
      
    }

    const handleDate = (date) => {
        if (!date) {
            return ''
        }
        let values = date.split('-');
        let year = values[0];
        let selectedDate = values[2]
        let allMonths = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December']
        let month = allMonths[parseInt(values[1]-1)]

        let fullDate = `${month} ${selectedDate}, ${year}`

        return fullDate

    }



    return (
        <section className = 'note'>
            <h3>Notes</h3>
            <div className = 'form'>

                <div>

            <label>Date:</label>
            <input type='date' name='date' />
                </div>

<div>

            <label>Content:</label>
            <textarea>

            </textarea>
</div>
            <button onClick={() => handleSubmit()}>Submit</button>
            </div>
            <div className = 'all-notes'>
                {allNotes.map((note, index) => {
                    return (
                    <div key={index+200} className = 'new-note'>
                        <p key={index}>{note[0]  ? note[0] : ''}</p>
                        <p key={index+100}>{note[1]}</p>
                        </div>)
                })}
            </div>
        </section>
    )
}