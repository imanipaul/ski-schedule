import React, {useState} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function Example() {
    const [selectedDays, setSelectedDays] = useState([])
  const modifiers = {
    thursdays: { daysOfWeek: [4] },
    birthday: new Date(2020, 3, 2),
  };
  const modifiersStyles = {
    birthday: {
      color: 'white',
      backgroundColor: 'red',
    },
    thursdays: {
      color: '#ffc107',
      backgroundColor: '#fffdee',
    },
    // outside: {
    //   // backgroundColor: 'white',
    // },
    selected: {
        backgroundColor: 'purple',
    }
  };

  const handleDayClick = (day, {selected}) => {

    setSelectedDays([...selectedDays, selected ? undefined : day])
   
  }

  return (
    <section className = 'calendar'>

      <DayPicker
      //   month={new Date(2020, 3)}
      //   modifiers={modifiers}
        modifiersStyles={modifiersStyles}
      selectedDays={selectedDays}
      onDayClick={handleDayClick}
      showOutsideDays
  
      />
    </section>
  );
}

// render() {
//     return (
//       <div>
//         <DayPicker
//           selectedDays={this.state.selectedDay}
//           onDayClick={this.handleDayClick}
//         />
//         <p>
//           {this.state.selectedDay
//             ? this.state.selectedDay.toLocaleDateString()
//             : 'Please select a day 👻'}
//         </p>
//       </div>
//     );
//   }
// }