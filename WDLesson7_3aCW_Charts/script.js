//global variables
let data;

async function init(){   
  let link = "open.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let boro = data[i];
    build += `<div class="fitted card">
                 <h3>${boro.occur_date}</h3>
                 <hr>
                 <p>${boro.boro}</p>
                 <p>${boro.perp_age_group}</p>
                 <p>${boro.perp_sex}</p>
                 <p>${boro.perp_race}</p>
                 <hr>
                 <p>${boro.vic_race}</p>
                 <p>${boro.vic_sex}</p>
                 <p>${boro.vic_age_group}</p>
                 <hr>
                 <p>${boro.incident_key}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Arrays of information
let math = ["Math",79.0,80.0,79.9,78.8,73.4,77.2,74.5,78.7,76.8 ];
let english = ["English",79.7,78.8,81.6,80.6,82.3,77.4,79.5,78.6,77.9];
let science = ["Science",78.0,81.5,81.6,81.6,82.2,82.4,81.3,80.1,78.2];
let social = ["Social Studies",95.0,80.6,80.8,81.5,81.8,80.6,81.1,80.9,80.6];


function chart(type){
  //Task 3: Combine the math, english, science and social data into one array and store in a variable 'data'
  data = [      ];
  
  //Task 4: Using the "type" of chart passed, call the function below to create an appropriate chart of that type in the "chart" container using the data from Task 3
  displayChart(       );
}

//Task 5: Create a array "budget" with at least 6 items. Recall that budget must be structured as an array of arrays.
let budget =[
  ["Rent",1500],
  ["Food",600],
  ["Car",500],
  

];

function budgetChart(){
  //Task 6: Display the budget as a pie chart
  displayChart(      );
}


//Function that accepts the data, an id to the div to display the chart, and the type of chart
function displayChart( data, chart_id, chart_type ){
  c3.generate({
    bindto: `#${chart_id}`, // id of the div to display chart
    data: {
      columns: data, // data must be an array of arrays
      type: chart_type // type of chart (pie/line/bar)
    }
  });
}