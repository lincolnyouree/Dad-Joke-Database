
$('.add').on('click', function() {
    let joke = $('input').val();
    let newJoke = 
    `<tr> 
    <td><button class="remove">X</button></td>
    <td>${joke}</td>
    </tr>`
    $('tbody').append(newJoke);
    $('input').val('');
});

 $('table tbody').on(
      'click',
      'button',
      function() {
          $(this).closest('tr').fadeOut(1000, function() {
              $(this).remove();
          });
      }
  );

