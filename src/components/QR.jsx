import React from 'react'

const QR = () => {
  return (
    <section
      className='container'
    >
      <img
        className='qr-image'
        src="/img/image-qr-code.png"
        alt="qr image to redirect a fontend-mentor page"
      />
      <article
        className='text-container'
      >
        <h2>
          Improve your front-end skills by building projects
        </h2>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding
          skills to the next level.
        </p>
      </article>
    </section>
  )
}

export default QR
