// for auth

$('#send').on('click', function() {
  let username = $('#username').val();
  let password = $('#password').val();

  $.ajax({
    url: 'http://localhost:3000/authenticate',
    method: 'POST',
    data: {
      username: username,
      password: password,
    },
    statusCode: {
  		'302': function() {
	  	   window.location.href = '/agregar';
	    },
      '401': function() {
          if ($('.show-error').length < 1) {
  	  	  $('#auth-wrapper').append('<span class="show-error">por favor verifique sus credenciales</span>')
          }
        },
      '400': function() {
          if ($('.show-error').length < 1) {
    	  	    $('#auth-wrapper').append('<span class="show-error">Los campos no pueden estar vacios</span>')
          }
    	   }
       }
     });
   });

//for product loading

$('#save').on('click', function() {

  let name = $('#product-name').val();
  let url = $('#product-url').val();
  let price = $('#product-price').val();

  $.ajax({
    url: 'http://localhost:3000/add',
    method: 'POST',
    data: {
      name: name,
      url: url,
      price: price,
    }
  }).done(function(data) {
      console.log($('#product-name').val(""));
      $('#product-name').val("");
      $('#product-url').val("");
      $('#product-price').val("");
  });
});

$('#login').on('click', function() {
  let value = $(this).text();
    if (value == 'logout') {
        $.ajax({
          url: 'http://localhost:3000/logout',
          method: 'PUT',
          data: {
            login: false
          },
          statusCode: {
        		'302': function() {
      	  	   window.location.href = '/auth';
      	   },
        }
      });
    } else {
      window.location.href = '/auth';
    }
});
