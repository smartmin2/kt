$(function () {
  // --------- input ------------>>

  $("input").focusin("input", function () {
    const btnClear = $(this).parent(".input-wrap").find(".btn-clear");
    if ($(this).val() == "") {
      btnClear.hide();
      $(this).css("background-size", "inherit");
    } else {
      btnClear.show();
      $(this).css("background-size", "0%");
    }
  });

  // $("input").focusout("input", function () {
  //   const btnClear = $(this).parent(".input-wrap").find(".btn-clear");
  //   btnClear.hide();
  //   $(this).css("background-size", "inherit");
  // });

  $("input").on("input", function () {
    const btnClear = $(this).parent(".input-wrap").find(".btn-clear");
    if ($(this).val() == "") {
      btnClear.hide();
      $(this).css("background-size", "inherit");
    } else {
      btnClear.show();
      $(this).css("background-size", "0%");
    }
  });

  $(".btn-clear").on("click", function () {
    $(this).parent(".input-wrap").find("input").val("");
    const btnClear = $(this).parent(".input-wrap").find(".btn-clear");
    btnClear.hide();
    $(this).parent(".input-wrap").find("input").css("background-size", "inherit");
  });
});

$(document).click(function (e) {
  var LayerPopup = $(".input-wrap");
  if (LayerPopup.has(e.target).length === 0) {
    const btnClear = $(this).find(".btn-clear");
    btnClear.hide();
    $(this).find("input").css("background-size", "inherit");
  }

  // <<--------- input ------------


  $(".label").click(function () {
    const select = $(this);

    // 드롭다운 열기
    select.next(".optionList").slideDown(100);

   
  });
});
