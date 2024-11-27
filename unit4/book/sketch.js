 // This is my Book project based off of Zach Whalen Quack Project. I decided to use the word
//Denouement, which means end of a narrative, which is perfect for this project. 
//I also wanted to add an antonym for the word, which is beginning, so it kinda spiraled into an "where's the beginning and the end, who knows"
// kind of thing.
   
/* 
Lines 9-12 are words that appear in the title and subtitles as well. 
*/
let word = "Denouement";
let chap = "Genesis";
let third = "Where";
let four = "It never ends.";

let wc = 0;

function setup() {

  // Blank Canvas
  noCanvas();

 
  let content = select("body");
  content.attribute("id","content");
  
  content.child(createElement("h1", word + "is The Word."));
  
  
  //Lines 31-33 are the headings of each chapter. You can change the numbers to see how many words will repeat in each line. 

  while( wc < 50000){
    content.child(createElement("h2",String(chap+" ").repeat(random(2,6)).toUpperCase()));
    content.child(createElement("h3",String(third+" ").repeat(random(2,4)).toUpperCase()));
    content.child(createElement("h4",String(four+" ").repeat(random(1,2)).toUpperCase()));
    //The follow code is for the punctuation at the end of sentences. 
    for (let p = 0; p < random(5,20); p++){
      let paragraph = '';
      for (let s = 0; s < random(3,20); s++){
        let internalPunct = [",",",",",",";"," --"];
        let endPunct = [".",".","?","!"];
        let sentence = word.charAt(0).toUpperCase() + word.slice(1);
        let sentenceLength = random(9,25);
        wc += sentenceLength + 1;
        for (let w = 0; w < sentenceLength; w++){
          sentence += " " + word;
          if (random() < 0.2){
            sentence += random(internalPunct);
          }
        }
        sentence += random(endPunct) + " ";
        paragraph += sentence;
      }
      content.child(createElement("p",paragraph));
    }
    
  
    
  }
  
 window.PagedPolyfill.preview();
}