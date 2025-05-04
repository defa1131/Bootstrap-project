
$(document).ready(function () {

  $('.single-item').slick();

  $("#accordion").accordion();

  new WOW().init();

  $('.open-popup-link').magnificPopup({
    type: 'image'
  });


  $('.your-class').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  let jqFirstName = $("#firstName");
  let jqLastName = $("#lastName");
  let jqPhone = $("#phone");
  let jqCountry = $("#country");
  let jqPostalCode = $("#postalCode");
  let jqAddress = $("#address");
  let jqButton = $("#btn");
  let jqThank_you = $("#thank_you");
  let jqForm = $("#orderForm");


  jqFirstName.keydown(function (e) {
    if ("1234567890".indexOf(e.key) !== -1) {
      e.preventDefault();
    }
  });

  jqLastName.keydown(function (e) {
    if ("1234567890".indexOf(e.key) != -1) {
      e.preventDefault();
    }
  });

  jqPostalCode.on('input', function () {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
    if ($(this).val().length > 6) {
      $(this).val($(this).val().slice(0, 6));
    }
  });

  jqPhone.on('input', function () {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
  });

  jqButton.click(function (event) {
    event.preventDefault();
    if (!jqFirstName.val()) {
      alert('Заполните поле с именем');
      return;
    }
    if (!jqLastName.val()) {
      alert('Заполните поле с фамилией');
      return;
    }
    if (!jqPhone.val()) {
      alert('Заполните поле телефон');
      return;
    }
    if (!jqCountry.val()) {
      alert('Заполните поле страна');
      return;
    }
    if (jqPostalCode.val().length !== 6) {
      alert('Заполните поле индекс. Поле должно содержать 6 цифр');
      return;
    }
    if (!jqAddress.val()) {
      alert('Заполните поле адрес');
      return;
    }
    $('#zagolovok').addClass('hidden');
    jqForm.hide();
    jqThank_you.show();
  });
});
