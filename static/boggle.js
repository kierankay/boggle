$(function() {
    $('#submit-guess').on('submit', async function(e) {
        e.preventDefault();
        let guess = e.target.children[0].value;
        response = await axios.post('/submitguess', {guess: guess});
        $('#result').text(response.data.result)
        })
})

