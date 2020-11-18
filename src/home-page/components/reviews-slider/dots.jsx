import React from 'react';

const Dot = ({ active }) => (
    <span className="bullit"
        style={{ background:` ${active ? '#DEC377' : 'rgba(0, 0, 0, 0.1)'}`}}
    />
  )
  
export const Dots = ({ reviewsContent, activeIndex }) => (
    <div className="dots" >
      {reviewsContent.map((slide, i) => (
        <Dot key={slide.id} active={activeIndex === i} />
      ))}
    </div>
  )