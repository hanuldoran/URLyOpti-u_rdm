/**
 * 아무런 액션을 취하지 않는 이벤트 정의
 */
function noAction()
{
    alert("noAction, 이벤트를 새로 정의해 주세요.");
}

/**
 * html파일의 내용을 문자열로 읽어 들인다.
 * param url - html 문서의 경로
 * return String - html 문서의 내용
 */
async function fetchHtmlAsText(url)
{
    return await (await fetch(url)).text();
}

/**
 * html파일의 내용을 문자열로 읽어 들인다.
 * param target - 문서의 내용을 출력할 tag element의 id 속성
 * param source - html 문서의 경로
 */
async function importPage(elmAtcId, pageURI)
{
    document.querySelector('#' + elmAtcId).innerHTML = await fetchHtmlAsText(pageURI + '.html');
}

/**
 * 메뉴에서 [캠페인목록] 클릭에 대한 이벤트
 * param pageTitle - 선택한 메뉴의 제목
 * param pageURI - 선택한 메뉴의 URI
 * param elmTtlId - 제목을 표시할 요소의 아이디
 * param elmAtcId - 선택한 메뉴의 본문 내용을 표시할 요소의 아이디
 */
function clickNavigation(pageTitle, pageURI, elmTtlId, elmAtcId)
{
    document.getElementById(elmTtlId).innerHTML = pageTitle;
    //document.getElementById('#' + elmAtcId).innerHTML = "";

    importPage(elmAtcId, pageURI);
    
    return true;
}

/**
 * 행 클릭 시 상세설명 행을 추가하는 테이블에서 상세설명 행을 제거
 * param objTable - 테이블 객체
 * param recordId - 선택한 행의 아이디
 * param applyClassName - 상세설명 행에 공통적으로 적용하는 css 클래스명
 * return String - 후속 프로세스를 계속할 지의 여부(break:프로세스 종료)
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
 * param objTable - 테이블 객체
 * param clickRowNum - 선택한 행의 번호, 제목행을 제외하므로 1부터 시작
 * param recordId - 선택한 행의 아이디
 * param applyClassName - 상세설명 행에 공통적으로 적용하는 css 클래스명
 * param spanCount - 합칠 행의 개수(한 행에 존재하는 셀의 개수)
 * param txtHTML - 셀에 표시할 html 코드
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
