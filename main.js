write_text_array = [];

function getParagraph1(){
var inputs= [];
for(var i = 1 ; i <=6 ; i++)
{
inputs.push(document.getElementById("para1_input_box_1" + i).value);
}
inputs.join(". ");
document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}