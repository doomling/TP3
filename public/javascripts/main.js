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
	    }
    }
  })
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
      console.log(data);
  });
});

$('#login').on('click', function() {
  let value = $(this).text();
  console.log(value)
    if (value == 'logout') {
        $.ajax({
          url: 'http://localhost:3000/logout',
          method: 'PUT',
          data: {
            login: false
          }
        })
    } else {
      window.location.href = '/auth';
    }
})
