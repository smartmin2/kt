$(function () {
  // --------- input ------------>>

  $("input").focusin("input", function () {
    $(".btn-clear").hide();
    $("input").css("background-size", "inherit");
    const btnClear = $(this).parent(".input-wrap").find(".btn-clear");
    if ($(this).val() == "") {
      btnClear.hide();
      $(this).css("background-size", "inherit");
    } else {
      btnClear.show();
      $(this).css("background-size", "0%");
    }
  });

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

  /* X버튼 클릭시 내용 지우기*/
  $(".btn-clear").on("click", function () {
    $(this).parent(".input-wrap").find("input").val("");
    const btnClear = $(this).parent(".input-wrap").find(".btn-clear");
    btnClear.hide();
    $(this).parent(".input-wrap").find("input").css("background-size", "inherit");
  });
});

/* 다른 곳 클릭 시 X버튼 숨기기 */
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
  $("body").on("click", "ul li.optionItem", function () {
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

//------------------ Table --------------------------
// Add Table data(tableClass or tableBodyClass, arrData, is Checkbox?)
function addRow(table, tbData, isCheckbox) {    
  var tr = document.createElement("tr");

  if (isCheckbox) {
    var input = document.createElement("input");
    var ckTD=document.createElement("td");

    input.setAttribute("type","checkbox");
    input.setAttribute("class","table_body_check");
    ckTD.appendChild(input);
    tr.appendChild(ckTD);
  }
  
  tbData.map((cell,i) => {        
    var newTD = document.createElement("td"); 
    if (cell == 'attach')
    {      
      var attach = document.createElement("button");
      attach.setAttribute("class","btn-download");      
      newTD.appendChild(attach);
    }
    else newTD.innerText = cell;
    
    tr.appendChild(newTD);    
  });  
  table.appendChild(tr); 
}
//--------------------------------------------------------
//------------------ Modal --------------------------
$(".fa-menu-box, .modal-open").on('click',function(){
  $("#modal-background").fadeIn(300);
  $(".modal-con")
    .css("display", "flex")
    .hide()
    .fadeIn();  
  $('body').css('overflow', 'hidden');
});

$("#modal-background, .close").on('click',function(){
  $("#modal-background").fadeOut(300);
  $(".modal-con").fadeOut(300);  
  $('body').css('overflow', 'overlay');
});
//--------------------------------------------------------

//------------------ tab --------------------------
$(function () {
  const li = $(".tab .tab-menu");
  li.click(function () {
    const tabId = $(this).attr("data-tab");

    li.removeClass("active");
    $(".tab-content").removeClass("active");

    $(this).addClass("active");
    $("#" + tabId).addClass("active");
  });
});
//--------------------------------------------------------