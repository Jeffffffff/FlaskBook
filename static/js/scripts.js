// <!-- Materialize CSS init's -->
$(document).ready(function () {
    $('.collapsible').collapsible();
    $('select').material_select();
    $(".button-collapse").sideNav();
    $('.fixed-action-btn').floatingActionButton();
    $('.dropdown-trigger').dropdown();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });
});

// <!-- Submit search form on click search icon -->
$(document).ready(function () {
    $("#sendForm").click(function () {
        if ($('#sendFrom').html() != '') {
            $("#search-form").submit();
        }
    });
});

// <!-- // Sort recipes on select change -->
// $(document).ready(function () {
//     // bind change event to select
//     $('#sort-select').on('change', function () {
//         var url = $(this).val(); // get selected value
//         if (url == 'desc') {
//             window.location = "{{url_for('recipes_time_desc')}}"; // redirect
//         }
//         if (url == 'asc') {
//             window.location = "{{url_for('recipes_time_asc')}}"; // redirect
//         }
//         if (url == 'votes-desc') {
//             window.location = "{{url_for('votes_desc')}}"; // redirect
//         }
//         if (url == 'votes-asc') {
//             window.location = "{{url_for('votes_asc')}}"; // redirect
//         }
//         if (url == 'date-desc') {
//             window.location = "{{url_for('date_desc')}}"; // redirect
//         }
//         if (url == 'date-asc') {
//             window.location = "{{url_for('date_asc')}}"; // redirect
//         }
//         return false;
//     });
// });



// <!-- Dynamically add/remove input fields on add_recipe form -->
$(document).ready(function () {
    // $("#removeButton").hide();

    var counter = 1;

    $("#addButton").click(function () {
        $(".removeButtonDiv").show();

        if (counter > 10) {
            alert("Only 10 textboxes allow");
            return false;
        }

        var newTextBoxDiv = $(document.createElement('div'))
            .attr("class", 'input-field col s12')
            .attr("id", 'TextBoxDiv' + counter);

        newTextBoxDiv.after().html(
            // '<label>Textbox #' + counter + ' : </label>' +
            // '<input type="text" name="textbox' + counter +
            // '" id="textbox' + counter + '" value="" >');
            
            '<i class="material-icons prefix">note_add</i>' +
            
            '<textarea class="materialize-textarea" data-length="360" name="textbox' + counter + 
            '"type="textbox" id="textbox' + counter +'"></textarea>' +

            '<label for="icon_prefix">Step ' + counter + '</label>'
            );

        newTextBoxDiv.appendTo("#TextBoxesGroup");


        counter++;
    });

    $("#removeButton").click(function () {
        console.log(counter)
        if (counter == 1) {
            $("#removeButton").prop('disabled', true);         
            return false;
        } if (counter <= 2) {
            $("#removeButton").hide();
        }

        counter--;

        $("#TextBoxDiv" + counter).remove();

    });

    $("#getButtonValue").click(function () {

        var msg = '';
        for (i = 1; i < counter; i++) {
            msg += "\n Textbox #" + i + " : " + $('#textbox' + i).val();
        }
        alert(msg);
    });
});