
$('.add').on('click', function() {
    let skill = $('input').val();
    let newSkill = 
    `<tr> 
    <td><button class="remove">X</button></td>
    <td>${skill}</td>
    </tr>`
    $('tbody').append(newSkill);
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

