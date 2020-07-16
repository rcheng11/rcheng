var faceIcon = $(".faceIcon");
var ama = $("#AMA");
var amaResponse = $(".chatBox");
var amaButton = $(".askButton");
var amaHidden = true;
var amaResponseHidden = true;
var jokes = ["My physics grade 😰", "Eating sushi with a fork 💀", "I read a book the other day about levitation. Can't put it down. 🙃", "The past, the present, and the future walk into a bar. It was tense. 😏","My childhood drawing has been in jail for the past 10 years. I think it was framed! 😏","Hear me out. If we were all ants. Our uncles... would be ants. 😏"]
faceIcon.click(function(){
  if(amaHidden == true){
    ama.show();
    amaResponse.show();
    amaButton.show();
    amaHidden = false;
  }
  else{
    ama.hide();
    amaResponse.hide()
    amaButton.hide();
    amaResponseHidden = true;
    amaHidden = true;
  }
})
ama.keydown(function(callback){
  if(callback.key == "Enter"){
    processAnswer(ama.val());
  }
})

amaButton.click(function(){
  processAnswer(ama.val())});

$(".qInput").click(function(){
  ama.val(this.innerHTML)
  ama.focus()
})
function scrollDown(){
  amaResponse.scrollTop(function() { return this.scrollHeight; });
}
function processAnswer(s){
  var input = s.toLowerCase();
  var response = "I either couldn't understand that or my human hasn't given me that information yet. Sorry! 😖";
  if(input.includes("favorite food")){
    response = "Carrots with hummus 😳... tied with sushi!"
  }
  else if(input.includes("favorite movie"))
  {
    response = "My favorite movie... honestly anything studio ghibli or pixar. The animation's gorgeous 😭."
  }
  else if(input.includes("favorite song")){
    response = "Walk but in a garden by Llusion or Ghosts by Jeremy Zucker!";
  }
  else if(input.includes("spotify playlist")){
    response = "<a style ='color:inherit;' target='_blank' href='https://open.spotify.com/playlist/7kaHuZhyTWbW2huDv5kTyk?si=jDzEXb8dTq2iFX0RQX4czA'>Click Here!</a>";
  }
  else if(input.includes("do for fun")){
    response = "I code and draw in my free time 😄. I also like to cook.";
  }
  else if(input.includes("favorite artist")){
    response = "Kushivnov Ilya has been a long time favorite. For representational artists, I would say Felix Gonzalez-Torres. His 'Untitled' (Perfect Lovers) piece 😢";
  }
  else if(input.includes("old are you")){
    response = "16.";
  }
  else if(input.includes("hobbies")){
    response = "I like to code and draw. Sometimes I cook!";
  }
  else if(input.includes("coding languages")){
    response = "<ul><li>HTML</li><li>CSS</li><li>Javascript</li><li>Python</li><li>Java</li><li>Currently learning SQL and Swift</li></ul>";
  }
  else if(input.includes("favorite tv show")){
    response = "Avatar the Last Airbender. Not even a question 😤.";
  }
  else if(input.includes("thoughts on potatoes")){
    response = "Potatoes are an A-tier vegetable. Versatile, delicious, nutritious 10/10. 🥵";
  }
  else if(input.includes("see yourself in 10 years")){
    response = "At the very least, I hope I have a job 😅. I think I'd work as a freelancer or work my way up an entry level development job.";
  }
  else if(input.includes("joke")){
    response = "Joke machine broke.";
    if(jokes.length > 0){
      var index = Math.floor(Math.random*jokes.length);
      response = jokes.splice(index,1);
    }
  }
  else if(input.includes("look like in real life")){
    response = "According to AI I average a 4/10. Regardless, you'll probably catch me smiling 90% of the time 😅.";
    $(".faceIcon").hide();
    $(".showUnder").show();
    setTimeout(function(){
      $(".faceIcon").show()
      $(".showUnder").hide();
    },4500)
  }
  else if(input.includes("hi")){
    response = "Hey!";
  }
  else if(input.includes("hello")){
    response = "Hello!";
  }
  else if(input.includes("hey")){
    response = "Hi!";
  }
  else if(input.includes("favorite color")){
    response = "I like most colors equally (as long as they're combined properly)! It just depends on the situation.";
  }
  $(".chatBox").append("<br><span style='color:gray'>Q: " + s + "</span> <br>" + response);
  scrollDown();
  ama.val("");
}
