(function($) {
  // Document ready event start
  $(document).ready(function() {

    $("input[type='radio']").change(function() {
      if ($(this).val() == "first") {
        $(".list").show();
      } else {
        $(".list").hide();
      }
    });

    $("input[type='radio']").change(function() {
      if ($(this).val() == "second") {
        $(".pass-field").show();
      } else {
        $(".pass-field").hide();
      }
    });

    $.validate({
      form: '#registration-form',
      modules: 'security',
      onModulesLoaded: function() {
        var optionalConfig = {
          fontSize: '12pt',
          padding: '4px',
          bad: 'Very bad',
          weak: 'Weak',
          good: 'Good',
          strong: 'Strong'
        };

        $('input[name="pass_confirmation"]').displayPasswordStrength(optionalConfig);
      },
      onSuccess: function($form) {
        if (!$.formUtils.haltValidation) {
          $.notify({
            // options
            icon: 'glyphicon glyphicon-warning-sign',
            title: "<strong>Successful</strong> ",
            message: 'Submission successful'
          }, {
            // settings
            element: 'body',
            position: null,
            type: "success",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
              from: "top",
              align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 3000,
            timer: 1000,
            mouse_over: null,
            animate: {
              enter: 'animated fadeInDown',
              exit: 'animated fadeOutUp'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
              '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
              '<span data-notify="icon"></span> ' +
              '<span data-notify="title">{1}</span> ' +
              '<span data-notify="message">{2}</span>' +
              '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
              '</div>' +
              '<a href="{3}" target="{4}" data-notify="url"></a>' +
              '</div>'
          });
        }
        return false;
      },

      onElementValidate: function(valid, $el, $form, errorMess) {
        var $label = '$el.closest('.form - content ').find('
        label ')';
        console.log('Input ' + $el.attr('name') + ' is ' + (valid ? 'VALID' : 'NOT VALID'));
        if (!valid) {
          $el.closest('.form-content').find('label').addClass('error');
        } else {
          if ($label.hasClass('error')) {
            $el.closest('.form-content').find('label').removeClass('error');
          }
        }
      }
    });

    $('#datepicker').datepicker();

    $('.selectpicker').selectpicker();
    var availableTags = [
      "Science",
      "Medical",
      "Commerce",
      "Arts",
      "Humanity",
      "Designing"
    ];
    $("#tags").autocomplete({
      source: availableTags
    });
  });
})(jQuery);
