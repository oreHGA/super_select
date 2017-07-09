$(document).ready(function() {
    $('#update_select').click(function() {
        // loop through the list and add replace the select options 
        var optionHTML = '<option value="" selected>Select your values</option>'
        $('#new-options > input').each(function() {
            var value = $(this).val();
            optionHTML += '<option value="' + value + '">' + value + '</option>';
        });
        $('#myselector').html(optionHTML);
    });

    $('#addoptions').click(function() {
        var addtextHTML = '<input type="text">';
        $('#new-options').append(addtextHTML);
    });
});