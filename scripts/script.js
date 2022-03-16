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

    // --------- select ------------>>

  /* 셀렉트박스 보이게 하기 */

  $("body").on("click", ".label", function () {
    $(".optionList").toggle();
  });

  /* 셀렉트 박스 옵션 선택 */
  $("body").on("click", "ul li", function () {
    var text = $(this).html();
    $(".label").html(text);
    $("ul").toggle();
  });

  /* 셀렉트 박스 이외 선택시 보이지 않게 하기 */
  $("body").on("click", function (e) {
    if ($("ul").css("display") == "block") {
      if ($(".selectBox").has(e.target).length == 0) {
        $("ul").hide();
      }
    }
  });

  // <<--------- select ------------
  
});
