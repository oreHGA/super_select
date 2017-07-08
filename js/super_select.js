$(document).ready(function() {
    $('#myselector').on('change', function() {
        var selected = $(this).val();
        var multiple = $(this).attr('data-ismultiple');
        if ( multiple && (selected != "") ) {
            selectedHTML = generateHTML(selected);

            $('.selected-elements').append(selectedHTML);
        }
    });
    function generateID() {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    };
    function generateHTML(value) {
        // generate a unique id for this element 
        var elem_id = generateID();
        var result_html = '<span id="'+ elem_id  +'" data-value="'+ value +'" class="signle-element">'+ value +'</span>';
        return result_html;
    }
});