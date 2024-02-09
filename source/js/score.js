function initializePage() {
            var animatedElement = document.getElementById('scoreImage');
            animatedElement.style.setProperty('--Apercent', `0%`);

            document.querySelector('.top-left-text').classList.add('Aanimate');
            document.querySelector('.bottom-right-text').classList.add('Banimate');
            document.querySelector('#blasonA').classList.add('blasonAanimate');
            document.querySelector('#blasonB').classList.add('blasonBanimate');
            var gifImage = document.getElementById('scoreImage');
        gifImage.src = 'source/image/score/struggle.gif';
        gifImage.style.display = 'block';
       
            // Your script code goes here
            
    
            // Hide the loading screen
            document.getElementById('loadingScreen').style.display = 'none';
    
            updatePoints();
        function mapValue(inputValue, inputRangeMin, inputRangeMax, outputRangeMin, outputRangeMax) {
            return (inputValue - inputRangeMin) / (inputRangeMax - inputRangeMin) * (outputRangeMax - outputRangeMin) + outputRangeMin;
        }

        function setPoints(data){
            pointsA = data.record.teams.find(team => team.teamName === "Team A").points;
            pointsB = data.record.teams.find(team => team.teamName === "Team B").points;
            updateIncrementalText();
            if (pointsA > pointsB) {
                mostPoints = pointsA;
            } else {
                mostPoints = pointsB;
            }
            var animatedElement = document.getElementById('scoreImage');
    animatedElement.style.setProperty('--Apercent', `${mapValue((((pointsA / (pointsA + pointsB))) * 100), 0, 100, -205, 205)}%`);
    if (pointsB > pointsA) {
        document.body.style.backgroundColor = '#E1F5ED';
        
        var TopLeft = document.getElementById('tl');
        TopLeft.style.setProperty('--Ascale','1.3');
        var BottomRight = document.getElementById('br');
        BottomRight.style.setProperty('--Bscale','2.7');

        var blasonA = document.getElementById('blasonA');
        var blasonB = document.getElementById('blasonB');
        blasonA.style.setProperty('--Apos','100vw');
        blasonB.style.setProperty('--Bpos','20vw');
    }else {
        
        
        var TopLeft = document.getElementById('tl');
        TopLeft.style.setProperty('--Ascale','2.7');
        var BottomRight = document.getElementById('br');
        BottomRight.style.setProperty('--Bscale','1.3');
        
        var blasonA = document.getElementById('blasonA');
        var blasonB = document.getElementById('blasonB');
        blasonA.style.setProperty('--Apos','-20vw');
        blasonB.style.setProperty('--Bpos','-100vw');

        
    }

        } 
        var scoreImage = document.getElementById('scoreImage');
        var points = 0;

        // Function to replace the GIF with the PNG and play the animation after the GIF ends
        function replaceGifWithPng() {
            // Set the source to the PNG
            scoreImage.src = 'source/image/score/score.png';

            // Add a class to trigger the animation
            scoreImage.classList.add('animate-png');
            
        
        }

        // Add an event listener to the GIF to trigger the replacement when it ends
        setTimeout(replaceGifWithPng, 1333)

        // Play the GIF
        scoreImage.classList.add('play-once');




    const score1Element = document.getElementById('score1');
    const score2Element = document.getElementById('score2');
    const points1Element = document.getElementById('points1');
    const points2Element = document.getElementById('points2');
    // Function to update text content with random values


    // Call the function to start updating text content
    

    let counter = 0;
    
    function updateIncrementalText() {
        
        points2Element.textContent = `${pointsB} points`;
        points1Element.textContent = `${pointsA} points`;
        
        var textdisplay = document.getElementById('textScore');
        textdisplay.style.display ='block';
        }
    

        

    // Call the function to start updating the text content
    
        function updatePoints() {
            let req = new XMLHttpRequest();
            var pointsA = 0;
            var pointsB = 0;
            var mostPoints = 0;
            req.open("GET", "https://api.jsonbin.io/v3/b/65ba11021f5677401f28c1a7/latest", true);
            req.setRequestHeader("X-Master-Key", "$2a$10$t0TB.mYwq16iqROanh0X7OBAWGrdVeyeXa3Xd92lZNir2NRkwtOi.");
            req.send();
            req.onreadystatechange = () => {
                if (req.readyState == XMLHttpRequest.DONE) {
                    const jsonData = JSON.parse(req.responseText);
                    setPoints(jsonData);
                }
            };
            setTimeout(updatePoints, 600000);
        }



        }
    
        // Attach the initializePage function to the window.onload event
        window.onload = initializePage;
        
        