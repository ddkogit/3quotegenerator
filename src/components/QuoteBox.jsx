import React from 'react'

function QuoteBox({quote,author}) {
  return (
    <div className='quotebox'>
        <button>New Quote</button>

<p className='quote'>

        {quote}
</p>

<p className='author'>
  {author}
</p>
    </div>
  )
}

export default QuoteBox