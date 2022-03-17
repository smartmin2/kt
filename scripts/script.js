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
  const inputWrap = $(".input-wrap");
  if (inputWrap.has(e.target).length === 0) {
    const btnClear = $(this).find(".btn-clear");
    btnClear.hide();
    $(this).find("input").css("background-size", "inherit");
  }

  // <<--------- input ------------

   
  
});

 // --------- select ------------>>

  /* 셀렉트박스 보이게 하기 */

  $("body").on("click", ".label", function () {
    if($(".selectBox").hasClass("disable")){
      $(".optionList").slideUp();
      $(".label").removeClass("active");
    }else{
      $(".optionList").slideToggle();
      $(".label").toggleClass("active");
    }
    
  });

  /* 셀렉트 박스 옵션 선택 */
  $("body").on("click", "ul li", function () {
    const text = $(this).html();
    $(".label").html(text);
    $(".optionList").slideToggle();
    $(".label").removeClass("active");
  });

  /* 셀렉트 박스 이외 선택시 보이지 않게 하기 */
  $("body").on("click", function (e) {
    if ($(".optionList").css("display") == "block") {
      if ($(".selectBox").has(e.target).length == 0) {
        $(".optionList").hide();
        $(".label").removeClass("active");
      }
    }
  });

  // <<--------- select ------------