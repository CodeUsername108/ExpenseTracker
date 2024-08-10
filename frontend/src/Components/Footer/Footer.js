import {DiReact} from 'react-icons/di'
import { DiNodejsSmall } from 'react-icons/di'
import { DiMongodb } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiHtml5 } from 'react-icons/di'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <DiHtml5 width={100} height={100}/>
            <DiCss3 width={100} height={100}/>
            <DiReact width={100} height={100}/>
            <DiNodejsSmall width={100} height={100}/>
            <DiMongodb width={100} height={100}/>
        </footer>
    </div>
  )
}

export default Footer
