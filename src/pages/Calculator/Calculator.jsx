import React from 'react'
import GPACalculator from "../../component/GPA/GPA"
import CGPACalculator from '../../component/CGPA/CGPA'


const Calculator = () => {
  return (
    <div>
        <section>
        <GPACalculator/>

            <CGPACalculator/>
        </section>
      
    </div>
  )
}

export default Calculator
