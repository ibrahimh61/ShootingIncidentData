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
// shows the statics of the victims from Dec 2025 - may 2026
let Bronx = ["Bronx",12, 14, 15, 11, 13, 10 ];
let Manhattan  = ["Manhattan ",7, 6, 5, 8, 7, 6];
let Brooklyn  = ["Brooklyn",14, 13, 12, 17, 16, 18];
let Queens  = ["Queens",3, 3, 2, 4, 5, 5];
let StatenIsland  = ["Staten Island",0, 0, 1, 1, 1, 4];


function chart(type){
  //Task 3: Combine the math, english, science and social data into one array and store in a variable 'data'
  data = [Bronx, Manhattan, Brooklyn, Queens, StatenIsland];
  
  //Task 4: Using the "type" of chart passed, call the function below to create an appropriate chart of that type in the "chart" container using the data from Task 3
  displayChart(data, "chart", type);
}

//Task 5: Create a array "budget" with at least 6 items. Recall that budget must be structured as an array of arrays.
let percentages =[
  ["Bronx",75],
  ["Manhattan",39],
  ["Brooklyn",90],
  ["Queens",22],
  ["Staten Island",7],
];

function budgetChart(){
  //Task 6: Display the budget as a pie chart
  displayChart(percentages, "chart", "pie");
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
function filterByBoro(){
  leftPanel = get("leftPanel");
  let boro = get("borough").value;
  let build = "";
  
  for(let i = 0; i < data.length; i++){
      let boro = data[i];
      if (boro.borough == boro){		
        build += card(boro);
      }
  }

}