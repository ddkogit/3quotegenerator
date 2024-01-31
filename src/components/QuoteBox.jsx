import React from 'react'

function QuoteBox({text,author,genRand}) {
  return (
    <div className='quotebox'>
        <button onClick={genRand}>New Quote</button>

<p className='quote'>

        "{text}"
</p>

<p className='author'>
 - {author}
</p>
    </div>
  )
}

export default QuoteBox