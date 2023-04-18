/**
 * 향후 개발이 필요한 이벤트에 대해서 알림
 */
function toDo()
{
    alert("TO-DO, 이벤트에 대한 액션을 정의해 주세요.");
}

/**
 * 테이블 목록에서 행에 마우스가 올라갔을 때의 이벤트
 * @param obj - 마우스가 올라간 행객체
 */
function mouseOverSchRstRow(obj)
{
    obj.style.cursor = "pointer";
    obj.style.backgroundColor = "#e7f9ff";
}

/**
 * 테이블 목록에서 행에서 마우스가 벗어났을 때의 이벤트
 * @param obj - 마우스가 벗어난 행객체
 * @param oddEvn - 홀수행인지 짝수행인지의 구분자(색은 css 파일에 정의된 것과 일치)
 */
function mouseOutSchRstRow(obj, oddEvn)
{
    if( oddEvn == "odd" )
    {
        obj.style.backgroundColor = "#ffffff";
    }
    else
    {
        obj.style.backgroundColor = "#e7e7e7";
    }
}

/**
 * 테이블 행의 체크박스에 대해서 모두 체크 또는 해제
 */
function checkAllOrNothing()
{
    let arrLstChk = document.getElementsByName("lstChk");

    // 전건 체크되어 있는지 확인
    let isAllCheck = true;

    for( i = 0; i < arrLstChk.length; i++ )
    {
        if( ! arrLstChk[i].checked )
        {
            isAllCheck = false;
            break;
        }
    }

    // 한건이라도 체크되어 있지 않다면 모두 체크
    // 모두 체크되어 있다면 전체 체크 해제
    for( i = 0; i < arrLstChk.length; i++ )
    {
        arrLstChk[i].checked = ( ! isAllCheck );
    }
}

/**
 * 행 클릭 시 상세설명 행을 추가하는 테이블에서 상세설명 행을 제거
 * @param objTable - 테이블 객체
 * @param recordId - 선택한 행의 아이디
 * @param applyClassName - 상세설명 행에 공통적으로 적용하는 css 클래스명
 * @return String - 후속 프로세스를 계속할 지의 여부(break:프로세스 종료)
 */
function removeRecordInTable(objTable, recordId, applyClassName)
{
    // recordId에 해당하는 상세설명 행이 보이면, 행을 제거하고 프로세스 종료
    // recordId에 해당하지 않는 상세설명 행이 보이면, 행을 제거하고 프로세스 계속
    for( i = 0; i < objTable.rows.length; i++ )
    {
        if( recordId == objTable.rows[i].id )
        {
        // 제거한 행이 선택한 행의 상세설명일 경우 프로세스 종료
            objTable.deleteRow(i);
            return "break";
        }
        else if( applyClassName == objTable.rows[i].class )
        {
        // 보이는 상세설명 행이 있으면 제거
            objTable.deleteRow(i);
            return "continue";
        }
    }
}

/**
 * 테이블에서 행 클릭 시 상세설명 행을 추가
 * @param objTable - 테이블 객체
 * @param clickRowNum - 선택한 행의 번호, 제목행을 제외하므로 1부터 시작
 * @param recordId - 선택한 행의 아이디
 * @param applyClassName - 상세설명 행에 공통적으로 적용하는 css 클래스명
 * @param spanCount - 합칠 행의 개수(한 행에 존재하는 셀의 개수)
 * @param txtHTML - 셀에 표시할 html 코드
 */
function addRecordInTable(objTable, clickRowNum, recordId, applyClassName, spanCount, txtHTML)
{
    let objNewRow = objTable.insertRow( clickRowNum + 1 );
    objNewRow.class = applyClassName;
    objNewRow.id = recordId;

    let objNewCel = objNewRow.insertCell(0);
    objNewCel.colSpan = spanCount;
    objNewCel.innerHTML = txtHTML;
}

/**
 * 테이블의 행을 클릭했을 때 상세 설명 행을 조회하여 보이기 / 감추기
 * @param recordId - 선택한 행의 아이디
 * @param recordTitle - 팝업 DIV의 제목
 * @param wth - 팝업 DIV의 넓이
 * @param hit - 팝업 DIV의 높이
 */
function clickSchRstRow(recordId, recordTitle, wth, hit)
{
    let txtHTML = '';
    txtHTML += '<div id="POPUP_INNER">';
    txtHTML +=   '<div id="POPUP_HEADER" class="wrap">';
    txtHTML +=     '<div class="dvs2l_90p popup_title">' + recordTitle + '</div>';
    txtHTML +=     '<div class="dvs2r_10p right tpadding006"><img src="/images/closePopup.jpg" width="30" height="30" class="pointer" onClick="clickClosePopup(\'POPUP_WRAP\');"></div>';
    txtHTML +=   '</div>';

    if( "" == recordId )
    {
        // 레코드아이디가 없으면 신규 생성
        txtHTML += getRecordCreate();
    }
    else
    {
        // 레코드아이디가 있으면 상세정보
        txtHTML += getRecordDetail(recordId);
    }

    txtHTML +=   '<div id="POPUP_FOOTER" class="center">';
    txtHTML +=     '<input type="button" value="저장" class="width080 pointer" onClick="toDo();">';
    txtHTML +=     '<span class="width010">&nbsp;</span>';
    txtHTML +=     '<input type="button" value="닫기" class="width080 pointer" onClick="clickClosePopup(\'POPUP_WRAP\');">';
    txtHTML +=   '</div>';
    txtHTML += '</div>';

    document.getElementById("POPUP_WRAP").innerHTML = txtHTML;

    document.getElementById("POPUP_WRAP").style.display = "block";

    document.getElementById("POPUP_INNER").style.width = wth + "px";
    document.getElementById("POPUP_INNER").style.height = hit + "px";
    document.getElementById("POPUP_INNER").style.overflow = "auto";
}

/**
 * 팝업의 형태로 열린 div 요소를 감춤
 * @param wrapId - 감출 div요소의 아이디
 */
function clickClosePopup(wrapId)
{
    document.getElementById(wrapId).innerHTML = "";
    document.getElementById(wrapId).style.display = "none";
}
