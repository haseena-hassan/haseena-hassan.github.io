import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://github.com/haseena-hassan" className="home__social-icon" target='_blank'>
            <i class="uil uil-github-alt"></i>
        </a>
        <a href="https://leetcode.com/haseena_hassan/" className="home__social-icon" target='_blank'>
            <i class="uil uil-arrow"></i>    
        </a>
        <a href="https://www.linkedin.com/in/haseena-hassan/" className="home__social-icon" target='_blank'>
            <i class="uil uil-linkedin-alt"></i>
        </a>
        <a href="https://www.instagram.com/huh.seena/" className="home__social-icon" target='_blank'>
            <i class="uil uil-instagram"></i>
        </a>
        <a href="mailto:haseena2199@gmail.com" className="home__social-icon" target='_blank'>
            <i class="uil uil-envelope"></i>
        </a>
    </div>
  )
}

export default Social