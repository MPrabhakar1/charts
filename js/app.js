const scores = [ // array
 { // these are all objects
  "topic": "chemistry",
  "questionsAnswered": 10,
  "questionsCorrect": 5,
  "date": "01/06/2018",
  "student": "James"
 },
 {
  "topic": "chemistry",
  "questionsAnswered": 20,
  "questionsCorrect": 7,
  "date": "01/06/2018",
  "student": "James"
 },
 {
  "topic": "chemistry",
  "questionsAnswered": 16,
  "questionsCorrect": 8,
  "date": "02/06/2018",
  "student": "James"
 },
 {
  "topic": "biology",
  "questionsAnswered": 10,
  "questionsCorrect": 5,
  "date": "02/06/2018",
  "student": "James"
 },
 {
  "topic": "physics",
  "questionsAnswered": 12,
  "questionsCorrect": 10,
  "date": "03/06/2018",
  "student": "James"
 },
 {
  "topic": "biology",
  "questionsAnswered": 10,
  "questionsCorrect": 5,
  "date": "01/06/2018",
  "student": "Manisha"
 },
 {
  "topic": "chemistry",
  "questionsAnswered": 20,
  "questionsCorrect": 19,
  "date": "01/06/2018",
  "student": "Manisha"
 },
 {
  "topic": "biology",
  "questionsAnswered": 16,
  "questionsCorrect": 8,
  "date": "02/06/2018",
  "student": "Manisha"
 },
 {
  "topic": "chemistry",
  "questionsAnswered": 10,
  "questionsCorrect": 5,
  "date": "02/06/2018",
  "student": "Manisha"
 },
 {
  "topic": "chemistry",
  "questionsAnswered": 12,
  "questionsCorrect": 10,
  "date": "03/06/2018",
  "student": "Manisha"
 },
 {
  "topic": "chemistry",
  "questionsAnswered": 10,
  "questionsCorrect": 5,
  "date": "01/06/2018",
  "student": "Charlotte"
 },
 {
  "topic": "physics",
  "questionsAnswered": 20,
  "questionsCorrect": 7,
  "date": "01/06/2018",
  "student": "Charlotte"
 },
 {
  "topic": "chemistry",
  "questionsAnswered": 16,
  "questionsCorrect": 8,
  "date": "02/06/2018",
  "student": "Charlotte"
 },
 {
  "topic": "physics",
  "questionsAnswered": 10,
  "questionsCorrect": 5,
  "date": "02/06/2018",
  "student": "Charlotte"
 },
 {
  "topic": "physics",
  "questionsAnswered": 12,
  "questionsCorrect": 10,
  "date": "03/06/2018",
  "student": "Charlotte"
 }
];

function calculateScores(position) { // write a function that gets the above data from the server
  console.log("Questions answered: " + scores[position].questionsCorrect); // position is the input in line 109. Position is now..
  console.log("Your percentage is " + (scores[position].questionsCorrect/scores[position].questionsAnswered)*100 + '%');
};

function totalQuestionsAnswered () {
  var total = 0; // starts at zero. Good practice. When making an iterator from an array, need to define variable outside each loop.

  for (let scoresIndex = 0;
    scoresIndex < scores.length;
    scoresIndex++) {

      total += scores[scoresIndex].questionsAnswered;
      console.log('Currently at scores Index ' + scoresIndex + ' questions answered: ' + scores[scoresIndex].questionsAnswered + 'Total questions: ' + total);
  }
};





function setupGraph() {
  console.log("Setting up graph");

  var options = {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  };

var ctx = $('#chartJSContainer');
new Chart(ctx, options);

};

function markAssignment(correctAnswers, totalAnswers) {
  var percentage = (correctAnswers/totalAnswers) * 100; // return will end the function, finish on first one it hits

  var returnString = 'Your score is ' + percentage + '%'; // No (). Only use {} for var with objects

  if (percentage > 80) {
    returnString += " Great work! How about another quiz?";
  }

  else {
    returnString += " Good effort, try again to see if you can get a higher score!";
  }
  return returnString;
};

function setupDoughnut() {



/*
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});
*/

};
