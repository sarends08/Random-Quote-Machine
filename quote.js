$(document).ready(function(){
  $.ajaxSetup({ cache: false });
  
  $("#getQuote").on("click", function(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {
      var quoteText = data.quoteText;
      var quoteAuthor = data.quoteAuthor;
      
        if (quoteAuthor === '') {
          $("#quoteHolder").html('<span>' + ' " ' + quoteText + ' " ' + '<br>' + '<b>' + '- Author Unknown' + '</b>' + '</span>');
        }else{
          $("#quoteHolder").html('<span>' + '"' + quoteText + '"' + '<br>' + '<b>' + '- ' + quoteAuthor + '</b>' + '</br>' + '</span>');
        }
       $("#tweetButton").on("click", function(){
        window.open("https://twitter.com/intent/tweet?text=" + $("#quoteHolder").text());
      });
    });
  });
});