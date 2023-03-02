$(function(){
var elements = $('i[class*=file-]');
document.write('<style>');
for(var i = 0; i <elements.length; i++) {
if(typeof fileDir!=="undefined"&&fileDir == elements.eq(i).prop("class")){
continue;
}
else{
var fileDir = elements.eq(i).prop("class");
if(fileDir.indexOf(" ")>2){
fileDir = fileDir.substring(0,fileDir.indexOf(" "));
}
var suffix = fileDir.substr(fileDir.lastIndexOf("-"));
document.write('.file'+suffix+'::before{content:url("icons/file'+suffix+'.svg");} ');
}
}
document.write('</style>'); 
});
 
