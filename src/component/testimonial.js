import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';

const testimonial = () => {
  return (
    <div className=''>
       <h2>What Our Users Say</h2> 

       <div className='c1'>
       <Card  className='mycard1' >
      <Card.Body>
        <Card.Text>
        "BookAI revolutionized my writing process. I completed my debut novel in just two weeks!"
        <br/><span style={{fontWeight: 'bold'}}>- Sarah J., Author</span>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card  className='mycard1'>
      <Card.Body>
        <Card.Text>
        "The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips."
        <br/><span style={{fontWeight: 'bold'}}>- Mark T., Aspiring Writer</span>
        </Card.Text>
      </Card.Body>
    </Card>
 

       </div>
    </div>
  )
}

export default testimonial