$(function() {
    var count = 60;
    setTimeout(function() {
        $("#submit-guess").off();
        $("#submit").prop("disabled", true);
        clearInterval(counter)
    }, 60000)
    let counter = setInterval(function(){
        count -= 1
        $("#timer").text(count)
    }, 1000)


    $('#submit-guess').on('submit', async function(e) {
        e.preventDefault();
        let guess = e.target.children[0].value;
        response = await axios.post('/submitguess', {guess: guess});
        $('#result').text(response.data.result)
        updateScore(response.data.result, guess.length);
        });

   function updateScore(result, guess) {
        if(result === "ok") {
            $("#score-num").text(guess);
        }
   };     



})

