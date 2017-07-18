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
            icon: 'glyphicon glyphicon-success-sign',
            title: 'Bootstrap notify',
            message: 'Turning standard Bootstrap alerts into "notify" like notifications'
          }, {
            // settings
            element: 'body',
            position: null,
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: true,
            placement: {
              from: "top",
              align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 10000,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
              enter: 'animated fadeInDown',
              exit: 'animated fadeOutUp'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            type: 'minimalist',
            icon_type: 'class',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-success" role="alert">' +
              '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
              '<span data-notify="icon"></span> ' +
              '<span data-notify="title">Successful</span> ' +
              '<span data-notify="message">Form submitted</span>' +
              '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
              '</div>' +
              '</div>'
          });
          $form.reset();
          $form.find('input[type="submit"]').unbind('click');
        }
        return false;
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
