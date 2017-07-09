$(document).ready(function() {
    $('#myselector').one('change', function() {
        var submitHTML = '<div id="selected-elements"><button id="submit_options" class="extra-button">Submit Options</button></div>';
        $('#selector-wrapper').append(submitHTML);
    });
    $('#myselector').on('change', function() {
        var chosen = $(this).val();
        var multiple = $(this).attr('data-ismultiple');
        if (multiple && (chosen != "") && isUnique(chosen)) {
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
        var result_html = '<span id="' + elem_id + '" data-value="' + value + '" class="single-element">' + value + '&nbsp';
        result_html += '<button class="delete" type="button" data-id="' + elem_id + '" >&times;</button></span>';
        return result_html;
    }
    $('body').on('click', '.delete', function() {
        var source = $(this).attr('data-id');
        $('#' + source).remove();
    });

    // This function checks if a selected value has already been selected before or not
    function isUnique(element) {
        var status;
        $('#selected-elements > span').each(function() {
            var value = $(this).attr('data-value');
            if (element == value) {
                status = 'not unique';
            }
        });
        if (status == 'not unique') {
            return false;
        } else {
            return true;
        }
    }

    // this function is used to feed the selected values back into the select box
    $('body').on('click', '#submit_options', function() {
        $('#myselector').hide();
        $('#selected-elements').hide();
        var name = $('#myselector').attr('data-name');
        var finalHTML;
        var name = $('#myselector').attr('data-name');
        var selected_items = [];
        var selectedHTML;
        if ((name != "") && (name != undefined)) {
            selectedHTML = '<select id="final-select" multiple name="' + name + '" class="mselect-box" >';
        } else {
            selectedHTML = '<select id="final-select" multiple class="mselect-box" >';
        }
        $('#selected-elements > span').each(function() {
            selectedHTML += '<option selected value="' + $(this).attr('data-value') + '">' + $(this).attr('data-value') + '</option>';
        });
        selectedHTML += '</select>';
        // $('#myselector').hide();
        $('#selector-wrapper').append(selectedHTML);
        // now we need to add the edit button 
        var edit_optionsHTML = '<button id="edit_options" class="extra-button">Edit Options</button>';
        $('#selector-wrapper').append(edit_optionsHTML);
        // $('#selected-elements').hide();
    });
    // ̣ this allows the user to edit his/her selections
    $('body').on('click', '#edit_options', function() {
        $('#edit_options').remove();
        $('#final-select').remove();
        $('#myselector').show();
        $('#selected-elements').show();
    });
});