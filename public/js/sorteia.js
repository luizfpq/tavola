/**
 * Sorteio Geral
 */
function SorteiaTae(candidato, segmento){
  var myHeaders = new Headers();
  
  var myInit = { method: 'GET',
                 headers: myHeaders,
                 mode: 'cors',
                 cache: 'default' };
  
  var myRequest = new Request('/questao/sorteioTae/', myInit);
  
  fetch(myRequest)
  // Store XMLHttpRequest and the JSON file location in variables
  var xhr = new XMLHttpRequest();
  var url = "/questao/sorteioTae/";
  
  // Called whenever the readyState attribute changes 
  xhr.onreadystatechange = function() {
  
    // Check if fetch request is done
    if (xhr.readyState == 4 && xhr.status == 200) { 
    
      // Parse the JSON string
      var jsonData = JSON.parse(xhr.responseText);
      
      // Call the showData(), passing in the parsed JSON string
      showData(jsonData);
    }
  };
  
  // Do the HTTP call using the url variable we specified above
  xhr.open("GET", url, true);
  xhr.send();
  
  // Function that formats the string with HTML tags, then outputs the result
  function showData(data) {
      // Output the data to the "artistlist" element
      document.getElementById("questionNumber").value = data.id;
      document.getElementById("questionText").value = data.pergunta;
  }
  }


  function SorteiaDiscente(){
    var myHeaders = new Headers();
    
    var myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };
    
    var myRequest = new Request('/questao/sorteioDiscente', myInit);
    
    fetch(myRequest)
    // Store XMLHttpRequest and the JSON file location in variables
    var xhr = new XMLHttpRequest();
    var url = "/questao/sorteioDiscente";
    
    // Called whenever the readyState attribute changes 
    xhr.onreadystatechange = function() {
    
      // Check if fetch request is done
      if (xhr.readyState == 4 && xhr.status == 200) { 
      
        // Parse the JSON string
        var jsonData = JSON.parse(xhr.responseText);
        
        // Call the showData(), passing in the parsed JSON string
        showData(jsonData);
      }
    };
    
    // Do the HTTP call using the url variable we specified above
    xhr.open("GET", url, true);
    xhr.send();
    
    // Function that formats the string with HTML tags, then outputs the result
    function showData(data) {
        // Output the data to the "artistlist" element
        document.getElementById("questionNumber").value = data.id;
        document.getElementById("questionText").value = data.pergunta;
    }
    }
    function SorteiaDocente(){
      var myHeaders = new Headers();
      
      var myInit = { method: 'GET',
                     headers: myHeaders,
                     mode: 'cors',
                     cache: 'default' };
      
      var myRequest = new Request('/questao/sorteioDocente', myInit);
      
      fetch(myRequest)
      // Store XMLHttpRequest and the JSON file location in variables
      var xhr = new XMLHttpRequest();
      var url = "/questao/sorteioDocente";
      
      // Called whenever the readyState attribute changes 
      xhr.onreadystatechange = function() {
      
        // Check if fetch request is done
        if (xhr.readyState == 4 && xhr.status == 200) { 
        
          // Parse the JSON string
          var jsonData = JSON.parse(xhr.responseText);
          
          // Call the showData(), passing in the parsed JSON string
          showData(jsonData);
        }
      };
      
      // Do the HTTP call using the url variable we specified above
      xhr.open("GET", url, true);
      xhr.send();
      
      // Function that formats the string with HTML tags, then outputs the result
      function showData(data) {
          // Output the data to the "artistlist" element
          document.getElementById("questionNumber").value = data.id;
          document.getElementById("questionText").value = data.pergunta;
      }
      }

/**
 * Sorteio para o candidato 1
 */
function SorteiaDiretoTae1(candidato, segmento){
  var myHeaders = new Headers();
  
  var myInit = { method: 'GET',
                 headers: myHeaders,
                 mode: 'cors',
                 cache: 'default' };
  
  var myRequest = new Request('/questao/sorteioDiretoTae/1', myInit);
  
  fetch(myRequest)
  // Store XMLHttpRequest and the JSON file location in variables
  var xhr = new XMLHttpRequest();
  var url = "/questao/sorteioDiretoTae/1";
  
  // Called whenever the readyState attribute changes 
  xhr.onreadystatechange = function() {
  
    // Check if fetch request is done
    if (xhr.readyState == 4 && xhr.status == 200) { 
    
      // Parse the JSON string
      var jsonData = JSON.parse(xhr.responseText);
      
      // Call the showData(), passing in the parsed JSON string
      showData(jsonData);
    }
  };
  
  // Do the HTTP call using the url variable we specified above
  xhr.open("GET", url, true);
  xhr.send();
  
  // Function that formats the string with HTML tags, then outputs the result
  function showData(data) {
      // Output the data to the "artistlist" element
      document.getElementById("questionNumber").value = data.id;
      document.getElementById("questionText").value = data.pergunta;
  }
  }


  function SorteiaDiretoDiscente1(){
    var myHeaders = new Headers();
    
    var myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };
    
    var myRequest = new Request('/questao/sorteioDiretoDiscente/1', myInit);
    
    fetch(myRequest)
    // Store XMLHttpRequest and the JSON file location in variables
    var xhr = new XMLHttpRequest();
    var url = "/questao/sorteioDiretoDiscente/1";
    
    // Called whenever the readyState attribute changes 
    xhr.onreadystatechange = function() {
    
      // Check if fetch request is done
      if (xhr.readyState == 4 && xhr.status == 200) { 
      
        // Parse the JSON string
        var jsonData = JSON.parse(xhr.responseText);
        
        // Call the showData(), passing in the parsed JSON string
        showData(jsonData);
      }
    };
    
    // Do the HTTP call using the url variable we specified above
    xhr.open("GET", url, true);
    xhr.send();
    
    // Function that formats the string with HTML tags, then outputs the result
    function showData(data) {
        // Output the data to the "artistlist" element
        document.getElementById("questionNumber").value = data.id;
        document.getElementById("questionText").value = data.pergunta;
    }
    }
    function SorteiaDiretoDocente1(){
      var myHeaders = new Headers();
      
      var myInit = { method: 'GET',
                     headers: myHeaders,
                     mode: 'cors',
                     cache: 'default' };
      
      var myRequest = new Request('/questao/sorteioDiretoDocente/1', myInit);
      
      fetch(myRequest)
      // Store XMLHttpRequest and the JSON file location in variables
      var xhr = new XMLHttpRequest();
      var url = "/questao/sorteioDiretoDocente/1";
      
      // Called whenever the readyState attribute changes 
      xhr.onreadystatechange = function() {
      
        // Check if fetch request is done
        if (xhr.readyState == 4 && xhr.status == 200) { 
        
          // Parse the JSON string
          var jsonData = JSON.parse(xhr.responseText);
          
          // Call the showData(), passing in the parsed JSON string
          showData(jsonData);
        }
      };
      
      // Do the HTTP call using the url variable we specified above
      xhr.open("GET", url, true);
      xhr.send();
      
      // Function that formats the string with HTML tags, then outputs the result
      function showData(data) {
          // Output the data to the "artistlist" element
          document.getElementById("questionNumber").value = data.id;
          document.getElementById("questionText").value = data.pergunta;
      }
      }



/**
 * Sorteio para o candidato 2
 */
function SorteiaDiretoTae2(candidato, segmento){
  var myHeaders = new Headers();
  
  var myInit = { method: 'GET',
                 headers: myHeaders,
                 mode: 'cors',
                 cache: 'default' };
  
  var myRequest = new Request('/questao/sorteioDiretoTae/2', myInit);
  
  fetch(myRequest)
  // Store XMLHttpRequest and the JSON file location in variables
  var xhr = new XMLHttpRequest();
  var url = "/questao/sorteioDiretoTae/2";
  
  // Called whenever the readyState attribute changes 
  xhr.onreadystatechange = function() {
  
    // Check if fetch request is done
    if (xhr.readyState == 4 && xhr.status == 200) { 
    
      // Parse the JSON string
      var jsonData = JSON.parse(xhr.responseText);
      
      // Call the showData(), passing in the parsed JSON string
      showData(jsonData);
    }
  };
  
  // Do the HTTP call using the url variable we specified above
  xhr.open("GET", url, true);
  xhr.send();
  
  // Function that formats the string with HTML tags, then outputs the result
  function showData(data) {
      // Output the data to the "artistlist" element
      document.getElementById("questionNumber").value = data.id;
      document.getElementById("questionText").value = data.pergunta;
  }
  }


  function SorteiaDiretoDiscente2(){
    var myHeaders = new Headers();
    
    var myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };
    
    var myRequest = new Request('/questao/sorteioDiretoDiscente/2', myInit);
    
    fetch(myRequest)
    // Store XMLHttpRequest and the JSON file location in variables
    var xhr = new XMLHttpRequest();
    var url = "/questao/sorteioDiretoDiscente/2";
    
    // Called whenever the readyState attribute changes 
    xhr.onreadystatechange = function() {
    
      // Check if fetch request is done
      if (xhr.readyState == 4 && xhr.status == 200) { 
      
        // Parse the JSON string
        var jsonData = JSON.parse(xhr.responseText);
        
        // Call the showData(), passing in the parsed JSON string
        showData(jsonData);
      }
    };
    
    // Do the HTTP call using the url variable we specified above
    xhr.open("GET", url, true);
    xhr.send();
    
    // Function that formats the string with HTML tags, then outputs the result
    function showData(data) {
        // Output the data to the "artistlist" element
        document.getElementById("questionNumber").value = data.id;
        document.getElementById("questionText").value = data.pergunta;
    }
    }
    function SorteiaDiretoDocente2(){
      var myHeaders = new Headers();
      
      var myInit = { method: 'GET',
                     headers: myHeaders,
                     mode: 'cors',
                     cache: 'default' };
      
      var myRequest = new Request('/questao/sorteioDiretoDocente/2', myInit);
      
      fetch(myRequest)
      // Store XMLHttpRequest and the JSON file location in variables
      var xhr = new XMLHttpRequest();
      var url = "/questao/sorteioDiretoDocente/2";
      
      // Called whenever the readyState attribute changes 
      xhr.onreadystatechange = function() {
      
        // Check if fetch request is done
        if (xhr.readyState == 4 && xhr.status == 200) { 
        
          // Parse the JSON string
          var jsonData = JSON.parse(xhr.responseText);
          
          // Call the showData(), passing in the parsed JSON string
          showData(jsonData);
        }
      };
      
      // Do the HTTP call using the url variable we specified above
      xhr.open("GET", url, true);
      xhr.send();
      
      // Function that formats the string with HTML tags, then outputs the result
      function showData(data) {
          // Output the data to the "artistlist" element
          document.getElementById("questionNumber").value = data.id;
          document.getElementById("questionText").value = data.pergunta;
      }
      }








function SorteiaOrdemResposta(){
var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('/candidato/sorteio', myInit);

fetch(myRequest)
// Store XMLHttpRequest and the JSON file location in variables
var xhr = new XMLHttpRequest();
var url = "/candidato/sorteio";

// Called whenever the readyState attribute changes 
xhr.onreadystatechange = function() {

  // Check if fetch request is done
  if (xhr.readyState == 4 && xhr.status == 200) { 
  
    // Parse the JSON string
    var jsonData = JSON.parse(xhr.responseText);
    
    // Call the showData(), passing in the parsed JSON string
    showData(jsonData);
  }
};

// Do the HTTP call using the url variable we specified above
xhr.open("GET", url, true);
xhr.send();

// Function that formats the string with HTML tags, then outputs the result
function showData(data) {
    // Output the data to the "artistlist" element
    document.getElementById("candidatoNumber").value = data.id;
    document.getElementById("candidatoName").value = data.nome;
}
}