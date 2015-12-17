'use strict';

 $(function(){

        $('#comment-submit').click(function (event) {
          event.preventDefault();
          var title = $('#name').val();
          var text = $('#new-comment').val();
          console.log(text)
          var date = new Date();
          $.ajax({
            method: "POST",
            url: '/comments',
            data: {text: text}
          })
          .done(function(data) {
            var schoolment = $("#comment-container");
            schoolment.append('<p>' + data.text + '</p>')
            console.log(data.text)
            });
          });



        });
