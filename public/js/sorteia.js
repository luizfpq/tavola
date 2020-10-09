const fetchCandidato = document.getElementById('newQuote')
 newQuote.addEventListener('click', _ => {
   fetch('/candidato/sorteio', {
    mode: 'no-cors'
   })
    .then(response => response.json())
    .then(data => {
      data.filter(key => {
          let quote = document.getElementById('quote')
          quote.innerHTML = key.content
      })
    })
    .catch(err => console.error(err))
 })