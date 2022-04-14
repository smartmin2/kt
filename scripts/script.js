
  const mainMenu = [{id: 1, name:'소재', link:'/pages/material/processing.html'},
                {id: 2, name:'캠페인 관리', link:'/pages/contract/campaign.html'},
                {id: 3, name:'영업', link:''},
                {id: 4, name:'카테고리', link:''},
                {id: 5, name:'인벤토리', link:''},
                {id: 6, name:'정산', link:''},
                {id: 7, name:'편성', link:''},
                {id: 8, name:'리포트', link:''},
                {id: 9, name:'통계', link:'/pages/statistics/integration.html'},
                {id: 10, name:'서비스관리', link:'/pages/services/company.html'},
                {id: 11, name:'시스템 관리', link:'/pages/system/user.html'}];

  const subMenu = {
    1 : [{id: 1, name:'OTV 소재가공', link: '/pages/material/processing.html', 
            folder: [{name:'소재가공 (+소재 다운로드)', link:'/pages/material/processing.html'},
                     {name:'소재업종', link:''},
                     {name:'들러리 소재 관리', link:''}]}, 
         {id: 2, name:'OTV', link:'', 
            folder: [{name:'동영상', link:''},
                     {name:'중복소재 노출관리', link:''},
                     {name:'LiveAD 송출영상', link:''}]}],
    2 : [      
         {id: 1, name:'캠페인', link: '/pages/contract/campaign.html', 
            folder: [{name:'캠페인', link:'/pages/contract/campaign.html'},
                     {name:'캠페인 큐시트', link:'/pages/contract/cam_temp_storage.html'},
                     {name:'캠페인 청약조회', link:'/pages/contract/cam_sub_inquiry.html'},
                     {name:'캠페인 청약승인', link:'/pages/contract/cam_sub_approval.html'},
                     {name:'청약 조회', link:'/pages/contract/subscription_inquiry.html'},
                     {name:'청약 승인', link:'/pages/contract/subscription_approval.html'},
                     {name:'모니터링(모니터링 청약)', link:'/pages/contract/monitor_approval.html'}]},
         {id: 2, name:'청약 관리', link:'', 
            folder: [{name:'DEFAULT 광고 관리', link:''},
                     {name:'포스트 디폴트 광고관리', link:''},
                     {name:'구매요청', link:''},
                     {name:'큐톤 필러 광고 관리', link:''},
                     {name:'모니터링(모니터링 청약)', link:''}]},
         {id: 3, name:'캠페인 추가 서비스', link:'', 
            folder: [{name:'동영상', link:''},                   
                     {name:'양방향', link:''},
                     {name:'LiveAD 노출비율관리', link:''},
                     {name:'Preplay우선순위관리', link:''}]}],
    3 : [{id: 1, name:'영업권 관리', link:'', folder: []},
         {id: 2, name:'연간 광고주 관리', link:'', folder: []},
         {id: 3, name:'영업 진행 현황 관리', link:'', folder: []},
         {id: 4, name:'영업권 관리 영업사별 조회', link:'', folder: []},
         {id: 5, name:'연간 광고주 현황', link:'', folder: []}],
    4 : [{id: 1, name:'통합 카테고리 관리', link:'', folder: []},
         {id: 2, name:'통합 원천 카테고리맵핑', link:'', folder: []},
         {id: 3, name:'광고 불가 카테고리', link:'', folder: []},
         {id: 4, name:'광고 제외 카테고리', link:'', folder: []},
         {id: 5, name:'광고 제한시간 관리', link:'', folder: []},
         {id: 6, name:'통합 원천 광고 노출 비율', link:'', folder: []},
         {id: 7, name:'통합 카테고리 Slot 관리', link:'', folder: []},
         {id: 8, name:'통합 카테고리 그룹 관리', link:'', folder: []},
         {id: 9, name:'캠페인 통합 카테고리 그룹 관리', link:'', folder: []},
         {id: 10, name:'가상 그룹 관리', link:'', folder: []},         
         {id: 11, name:'통합 카테고리 Slot관리(POST)', link:'', folder: []}],
    5 : [{id: 1, name:'생성', link:'', folder: []},
         {id: 2, name:'동영상', link:'', 
            folder: [{name:'예측 및 확정', link:''},
                     {name:'사용 현황', link:'/pages/inventory/video_us.html'},
                     {name:'VOD 사용현황', link:''},
                     {name:'PP+ 인벤토리 비율', link:''},
                     {name:'일별 시간대 노출 가중치', link:''},
                     {name:'PP+ 부킹', link:''},
                     {name:'PP+ 부킹 현황', link:''},
                     {name:'PP+ 부킹 오픈 관리', link:''},
                     {name:'인벤토리 조회', link:''},
                     {name:'PP 부킹', link:''},
                     {name:'PP 부킹 오픈 관리', link:''}]},
         {id: 3, name:'양방향', link:'', 
            folder: [{name:'예측 및 확정', link:''},                   
                     {name:'사용 현황', link:'/pages/inventory/twoway_us_ad.html'}]},
         {id: 4, name:'LiveAD', link:'', 
            folder: [{name:'예측 및 확정', link:''},                   
                     {name:'사용 현황', link:'/pages/inventory/livead_us.html'}]}],
    6 : [{id: 1, name:'명세서', link:'', folder: []},         
         {id: 2, name:'정산', link:'', 
            folder: [{name:'전체 BM', link:''},
                     {name:'OTV 정산', link:''},
                     {name:'광고집행내역', link:''}]}],
    7 : [{id: 1, name:'OTV', link:'', 
            folder: [{name:'상용광고 편성관리', link:''},
                     {name:'광고관리', link:''},
                     {name:'이력관리', link:''},
                     {name:'소재미매핑광고', link:''},
                     {name:'편성시간관리', link:''}]},
         {id: 2, name:'홈쇼핑', link:'', 
            folder: [{name:'홈쇼핑 편성정보', link:''},
                     {name:'관심카테고리 매핑관리', link:''},
                     {name:'검색제외 단어관리', link:''},
                     {name:'홈쇼핑 편성 모니터링', link:''},
                     {name:'홈쇼핑 표준서비스코드매핑', link:''},
                     {name:'홈쇼핑 채널관리', link:''}]}],
    8 : [{id: 1, name:'OTV', link:'', 
            folder: [{name:'LIVE통계조회', link:''},
                     {name:'Input Log 조회', link:''},
                     {name:'청약진행현황', link:''}]},
         {id: 2, name: "모니터링", link: "", folder: [{ name: "LiveAD 청약현황", link: "/pages/report/monitoring.html" }] },
         {id: 3, name:'광고노출현황', link:'/pages/report/exposure_ad.html', },
                { name: "노출현황(LiveAD)", link: "/pages/report/exposure_ad.html" },
                { name: "노출현황(동영상)", link: "/kt/pages/report/exposure_mov.html" },
         {id: 4, name:'실시간 LiveAD리포트', link:'', folder: []},         
         {id: 5, name:'LiveAD게재 확인리포트', link:'', folder: []}],
    9 : [{id: 1, name:'통합 대시보드', link:'/pages/statistics/integration.html', 
            folder: [{name:'통합통계', link:'/pages/statistics/integration.html'},
                     {name:'매출총괄', link:'/pages/statistics/sales_manager.html'},
                     {name:'상품별 상세', link:'/pages/statistics/product_detail.html'},
                     {name:'영업채널상세', link:'/pages/statistics/sales_channel.html'},
                     {name:'재원및판매율', link:'/pages/statistics/sales_rate.html'},
                     {name:'광고주 통계', link:'/pages/statistics/advertiser.html'},
                     {name:'광고주 TOP10', link:'/pages/statistics/advertiser_top.html'},
                     {name:'광고 누적순위', link:'/pages/statistics/advertising_rank.html'},
                     {name:'인벤토리', link:'/pages/statistics/inventory.html'}]},
         {id: 2, name:'매체정보', link:'', folder: [{name:'OTV', link:''}]},
         {id: 3, name:'운영분석', link:'', folder: [{name:'매출현황', link:''}]},         
         {id: 4, name:'광고 효과 분석', link:'', 
            folder: [{name:'캠페인 총괄 분석', link:''},
                     {name:'OTV', link:''}]},         
         {id: 5, name:'타겟 분석', link:'', folder: [{name:'통합분석', link:''}]},         
         {id: 6, name:'가족 구성원 추론', link:'', 
            folder: [{name:'콘텐츠 매핑', link:''},
                     {name:'임계치 관리', link:''},
                     {name:'분석 적용 관리', link:''}]}],
    10 : [{id: 1, name:'회원 관리', link:'/pages/services/company.htm', 
      folder: [
        { name: "업체 관리", link: "/pages/services/company.html" },
        { name: "대행사 관리", link: "/pages/services/agency.html" },
        { name: "광고주 관리", link: "/pages/services/advertiser.html" },
        { name: "브랜드 관리", link: "/pages/services/brand.html" },
        { name: "신규광고주", link: "/pages/services/new_advertisers.html" },
      ],
    },
         {id: 2, name:'OTV 관리', link:'', 
            folder: [{name:'동영상', link:''},
                     {name:'ADQ 2.0', link:''},]},
         {id: 3, name:'타겟분석', link:'', folder: []},
         {id: 4, name:'설정', link:'', 
            folder: [{name:'OTV', link:''},
                     {name:'양방향', link:''},]},
         {id: 5, name:'공지사항', link:'/pages/services/notice.html', folder: []},
         {id: 6, name:'게시판', link:'/pages/services/board.html', folder: []},
         {id: 7, name:'요구사항 관리', link:'/pages/services/request.html', folder: []},
         {id: 8, name:'OTV', link:'', folder: [{name:'동영상', link:''}]},
        //  {id: 9, name:'양방향', link:'',
        //     folder: [{name:'테스트셋탑박스관리', link:''},
        //              {name:'양방향환경설정', link:''},
        //              {name:'양방향DA환경관리', link:''},
        //              {name:'채널망공사설정', link:''}]},         
         {id: 9, name:'단가관리', link:'', 
            folder: [{name:'OTV/PrePlay+', link:''},
                     {name:'단가/할인정보 관리', link:''}]}],    
    11 : [{id: 1, name:'사용자 관리', link:'/pages/system/user.html', folder: []},
         {id: 2, name:'사용자 그룹관리', link:'/pages/system/user_group.html', folder: []},
         {id: 3, name:'코드 관리', link:'/pages/system/code.html', folder: []},
    { id: 4, name: "메뉴 관리", link: "/pages/system/menu_mm.html", folder: [] },
    { id: 5, name: "메일 발송리스트", link: "/pages/system/mail_list.html", folder: [] },
    { id: 6, name: "Watch-Dog", link: "/pages/system/watchdog.html", folder: [] },
     ]}
  const root = window.location.href.substring(0,window.location.href.indexOf("/pages"));
  
  //--------------- Menu Load ------------------------------
  function loadMainMenu(iActive){
    var ulMainMenu = document.querySelector('.main-menu');        
    
    mainMenu.map((menu, i) =>{
      var li = document.createElement("li"); 
      if (iActive > 0 && i == iActive-1 ) li.classList.add('active') ;
      li.innerHTML = menu.name;
      ulMainMenu.appendChild(li); 
    })     
  }

  function loadSubMenu(sActive,iSub){
    var divSubMenu = document.querySelector('.header-sub-menubar');        
      
    for (const [key, value] of Object.entries(subMenu)) {      
      var ul = document.createElement("ul");
      value.map((subitem, i) => {        
        var li = document.createElement("li");  
        if (key == sActive && i == iSub-1 ) 
          li.classList.add('active') ;
        li.innerHTML = subitem.name;
        ul.appendChild(li); 
      });
      divSubMenu.appendChild(ul);
    }
  }

  //Param -> MainMenu, 2depth Menu, 3depth Menu
  function loadLnb(iMenu,iSubMenu,ithree){
    var ulMenu = document.querySelector(".sub-menu-wrapper ul.sub-menu");

    subMenu[iMenu].map((menuItem, i)=> {
      var li = document.createElement("li");
      
      if (menuItem.folder.length > 0) {
        var details = document.createElement("details"),
            summary = document.createElement("summary"),
            icDiv = document.createElement("div");

        li.classList.add("three-depth");
        icDiv.classList.add("ic-lnb-arrow");
        summary.innerHTML = menuItem.name;
        summary.appendChild(icDiv);
        details.appendChild(summary);

        var ulSub = document.createElement("ul");
        ulSub.classList.add("folder-menu");

        menuItem.folder.map((subitem, j) => {
          LiSub = document.createElement("li");
          LiSub.innerHTML = subitem.name;
          if (ithree > 0 && i==iSubMenu-1 && ithree-1 == j)
          {
            LiSub.classList.add("active");
            details.open = true;
          }
          ulSub.appendChild(LiSub);
        });
        details.appendChild(ulSub);
        li.appendChild(details);
      }
      else {
        if (i == iSubMenu-1) {
          li.classList.add("active");
        }
        li.innerHTML = menuItem.name;        
      }
      ulMenu.appendChild(li);  
    });
  }
//--------------------------------------------------------------
$(function () {
//------- Menu Event ---------------------------------------
  $(".main-menu li")
      .on('mouseover', function(){
        var menuIndex = $(this).index();  
        $(".header-sub-menubar ul").removeClass('active');
        $(".header-sub-menubar ul").eq(menuIndex).addClass('active').siblings;
      })
      .on('click',function(){
        var menuIndex = $(this).index();             
        location.href = root + mainMenu[menuIndex].link;        
      })
    $(".header-wrapper").on('mouseleave', function(){$(".header-sub-menubar ul").removeClass('active');})

  $(".header-sub-menubar ul li").on('click', function(){
    var menuIndex = $(this).parent().index()+1,
        subMenuIndex = $(this).index();    
    location.href = root + subMenu[menuIndex][subMenuIndex].link;
  })

  $("ul.sub-menu li").on("click", function(){
    var mainMenuName = $(".sub-menu-title")[0].innerText,
        iMain = mainMenu.findIndex(x => x.name == mainMenuName)+1;
    
    if ($(this).hasClass("three-depth")) return;
    if ($(this).parent().hasClass("folder-menu")) {
      var subMenuName =  $(this).parent().prev()[0].innerText,
          folderMenu = subMenu[iMain].find(x => x.name == subMenuName).folder,
          forderName = $(this)[0].innerText,
          strLink = root + folderMenu.find(x => x.name == forderName).link;

      location.href = strLink;
    } else {
      var subMenuName =  $(this)[0].innerText,
          strLink = root + subMenu[iMain].find(x => x.name == subMenuName).link;
      location.href = strLink;
    }
  })
  //----------------------------------------------------
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

$(".go-cam-list").on("click",function(){
 location.href = "campaign.html";
}) 

 // --------- select ------------>>
/* 셀렉트박스 보이게 하기 */
  $(".selectBox > .label").on("click", function (){
    const elLabel = $(this);
    const elSelectBox = $(this).parent();
    const elOption = $(this).next();

    $('.selectBox').find('.optionList').not(elOption).hide();
    $('.selectBox').find('.label').not(elLabel).removeClass("active");

    if (elSelectBox.hasClass("disable")){
      elOption.slideUp();
      elLabel.removeClass("active");
    } else {
      elOption.slideToggle();
      elLabel.toggleClass("active");
    }
  });

/* 셀렉트 박스 옵션 선택 */
  $("ul li.optionItem").on("click", function (){
    var elLabel = $(this).parent().prev();
    var elOption = $(this).parent();

    elLabel.html($(this).html());
    elOption.slideToggle();
    elLabel.removeClass("active");
  });

  /* 셀렉트 박스 이외 선택시 보이지 않게 하기 */
  $("body").on("click", function (e) {
    var elTarget = $(e.target);    
    var cntActive = $(".label.active").length;
    
    if(!elTarget.hasClass("optionItem") && !elTarget.hasClass("label")) {       
      $(".optionList").hide();      
      $(".label").removeClass("active");

      if($(e.target).parents('.checkbox-list').length < 1){   
        $(".checkbox-list").css("height",'30px');        
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
  $(".modal-con").css("display", "flex").hide().fadeIn();
  $("body").css("overflow", "hidden");
});

$("#modal-background, .close").on('click',function(){
  if ($(this).hasClass("close") || !$(this).next().hasClass('modal-progress'))
  {
  $("#modal-background").fadeOut(300);
  $(".modal-con").fadeOut(300);  
  $('body').css('overflow', 'overlay');
  }
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

$(function () {
  const li = $(".tab02 .tab02-menu");
  li.click(function () {
    const tabId = $(this).attr("data-tab");

    li.removeClass("active");
    $(".tab02-content").removeClass("active");

    $(this).addClass("active");
    $("#" + tabId).addClass("active");
  });
});
//--------------------------------------------------------

//------------------ toggle btn --------------------------
$(".btn-toggle").on("click", function () {
  const tg = $(this).parent(".toggle-wrap").find(".btn-toggle");
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    tg.removeClass("active");
    $(this).addClass("active");
  }

  if ($(".request-sv").hasClass("active")) {
    $(".request-sv-row").css("display", "flex");
  }else {
    $(".request-sv-row").css("display", "none");
  }

  const sub = $(this).parent(".toggle-wrap").find(".sub");
  const sub1 = $(this).parent(".toggle-wrap").find(".sub1");
  if ($(this).hasClass("open")) {
    sub.css("display", "flex");
    sub1.css("display", "none");
  } else if ($(this).hasClass("open1")) {
    sub1.css("display", "flex");
    sub.css("display", "none");
  } else {
    sub.css("display", "none");
    sub1.css("display", "none");
  }
});

$(".whether").on("click", function () {
  if ($(this).hasClass("active")) {
    // $(this).html("사용")
    $(this).parents(".row").siblings(".whether-table").css("display", "flex");
  } else {
    // $(this).html("미사용");
    $(this).parents(".row").siblings(".whether-table").css("display", "none");
  }})
//--------------------------------------------------------

$(".btn-select-group .btn-select").on("click", function(){
  $(this).addClass('active').siblings().removeClass('active');
});

var fileTarget = $('.filebox .upload-hidden'); fileTarget.on('change', function(){ 
  // 값이 변경되면 
  if(window.FileReader){ 
    // modern browser 
    var filename = $(this)[0].files[0].name; 
  } else { 
      // old IE 
      var filename = $(this).val().split('/').pop().split('\\').pop(); 
      // 파일명만 추출 
    } 
    // 추출한 파일명 삽입 
    $(this).siblings('.upload-name').val(filename); 
  });


