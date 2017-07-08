$(document).ready(function() {
    $('#myselector').on('change', function() {
        var chosen = $(this).val();
        var multiple = $(this).attr('data-ismultiple');
        if ( multiple && (chosen != "")  && isUnique(chosen) ) {
            selectedHTML = generateHTML(chosen);

            $('#selected-elements').append(selectedHTML);
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
        var result_html = '<span id="'+ elem_id  +'" data-value="'+ value +'" class="single-element">'+ value + '&nbsp';
        result_html += '<button class="delete" type="button" data-id="'+ elem_id +'" >&times;</button></span>';
        return result_html;
    }
    $('body').on('click','.delete', function(){
        var source = $(this).attr('data-id');
        $('#' + source ).remove();
    });
    
    // This function checks if a selected value has already been selected before or not
    function isUnique( element ){
        var status;
        $('#selected-elements > span').each(function(){
            var value = $(this).attr('data-value');
            if( element == value){
                status = 'not unique';
            }
        });
        if( status == 'not unique'){
            return false;
        }else{
            return true;
        }
    }
});