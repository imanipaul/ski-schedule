import React, {useState, useEffect} from 'react'

export default function Header () {

    let allMonths = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December']

    const currentDate = () => {
        let today = new Date();
        let date = today.getDate();
        let month = allMonths[today.getMonth()];
        let year = today.getFullYear();
        // var yyyy = today.getFullYear();

        console.log(month + ' ' + date + ' ' + year)
        return(month + ' ' + date + ', ' + year)
        
    }

    return (
        <header className = 'header'>

            <div>
            <h1>{currentDate()}</h1>
            <h2>Ski Schedule and Data</h2>

            </div>

            <div className = 'line'>
                
            </div>

        </header>
    )

}