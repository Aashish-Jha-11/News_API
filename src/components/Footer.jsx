import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='container-fuild footer'>
       <footer>
        <h6>News API</h6>

        <ul>
            <li>
                <a href="https://newsapi.org/" target='_blank'>News API Reference</a>
            </li>
            <li>
                <a href="https://github.com/Aashish-Jha-11" target='_blank'>Github Profile</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/aashish-jha-4760a1323/" target='_blank'>Linkedin</a>
            </li>
            
        </ul>
       </footer>
    </div>
  )
}

export default Footer