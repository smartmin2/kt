var commonMenuList = [
  { file: "user.html", name: "사용자 관리" },
  { file: "user_group.html", name: "사용자그룹 관리" },
  { file: "code.html", name: "코드 관리" },
  { file: "menu.html", name: "메뉴 관리" },
  { file: "notice.html", name: "공지사항" },
  { file: "board.html", name: "게시판" },
  { file: "analysis_user.html", name: "분석사용자 관리" },
  { file: "requirement.html", name: "요구사항 관리" },
  { file: "watch_dog.html", name: "Watch-Dog" },
];

function includeHTML() {
  var allElements = document.getElementsByTagName("*");
  Array.prototype.forEach.call(allElements, function (el) {
    var includePath = el.dataset.includePath;
    if (includePath) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText;
        }
      };
      xhttp.open("GET", includePath, true);
      xhttp.send();
    }
  });
}

includeHTML();

function setActiveTab(e) {
  const parent = e.target.parentElement;
  [...parent.children].forEach((sib) => sib.classList.remove("active"));
  e.target.classList.add("active");
}

// header menu click event
function clickMainMenu(e) {}

//subMenu Click Event
function clickSubMenu(e) {
  var strHtml = commonMenuList.find(
    (list) => list.name == e.target.innerHTML
  ).file;
  location.href = strHtml;
}

function getSubMenuIndex(e) {
  return commonMenuList.findIndex(
    (list) => list.name == e.target.innerText
  );
}

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
    newTD.innerText = cell;
    tr.appendChild(newTD);
  });  
  table.appendChild(tr); 
}

// when table header click to sort
function sortTable(tblID, col, desc) {
  var table, rows, switching, i, x, y, shouldSwitch;
  col = (col || 0);
  table = document.getElementById(tblID);
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[col];
      y = rows[i + 1].getElementsByTagName("TD")[col];
      if ((desc)? x.textContent.toLowerCase() < y.textContent.toLowerCase() : x.textContent.toLowerCase() > y.textContent.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

var target_main = document.querySelector('.main_menu');
target_main.addEventListener('click',function(e){
  setActiveTab(e);
});

var target_submenu = document.querySelector('.sub_menu');
target_submenu.addEventListener('click',function(e){  
  clickSubMenu(e);
});

var tbAllCheckbox = document.querySelector('.table_head_check');
if (tbAllCheckbox) {
  tbAllCheckbox.addEventListener('change', function() {  
    var tbBodyCheckboxes = document.querySelectorAll('.table_body_check');  
      tbBodyCheckboxes.forEach((checkbox) => {
        checkbox.checked = this.checked;
      });
  });
}