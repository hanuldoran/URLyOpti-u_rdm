/**
 * 캠페인 목록 화면에서 상세정보 행을 조회하여 반환
 * param recordId - 캠페인을 구분할 수 있는 아이디
 * return String - html 코드
 */
function getDetailAboutCampaign( recordId )
{
    let txtHTML = '';
    txtHTML += '<div style="background-color: #e7f9ff; padding: 10px;">';
    txtHTML += '<table style="width: 100%; border-width: 0px;">';
    txtHTML +=   '<tr style="border-width: 0px;">';
    txtHTML +=     '<td style="width: 80px; border-width: 0px; background-color: #e7f9ff;">기간</td>';
    txtHTML +=     '<td style="border-width: 0px; background-color: #e7f9ff;">2022-07-01 12시 ~ 2022-07-14 12시</td>';
    txtHTML +=   '</tr>';
    txtHTML +=   '<tr style="border-width: 0px;">';
    txtHTML +=     '<td style="width: 80px; border-width: 0px; background-color: #e7f9ff;">상세설명</td>';
    txtHTML +=     '<td style="border-width: 0px; background-color: #e7f9ff;">90일이상 홈페이지에 접속하지 않은 고객 중에서 패스워드 변경 기간이 만료되어 가는 고객들을 대상으로, 홈페이지 접속에 접속하여 마케팅 관련 고객 동의를 획득할 수 있도록 유도한다.</td>';
    txtHTML +=   '</tr>';
    txtHTML += '';
    txtHTML += '</table>';
    txtHTML += '</div>';

    return txtHTML;
}

/**
 * URL 목록 화면에서 상세정보 행을 조회하여 반환
 * param recordId - 캠페인을 구분할 수 있는 아이디
 * return String - html 코드
 */
function getDetailAboutUrl( recordId )
{
    let txtHTML = '';
    txtHTML += '<div style="background-color: #e7f9ff; padding: 10px;">';
    txtHTML += '<input type="text" id="url" name="url" value="https://user.domain.com/campaign/view/step1.html" style="width: 400px;">';
    txtHTML += '<input type="text" id="urlNm" name="urlNm" value="신규가입" style="width: 140px; margin-left: 10px;">';
    txtHTML += '<input type="checkbox" id="fstStpYon" name="fstStpYon" value="Y" style="width: 80px; margin-left: 10px;">';
    txtHTML += '<input type="button" value="저장" style="margin-left: 10px;">';
    txtHTML += '</div>';

    return txtHTML;
}

/**
 * URL-SET 목록 화면에서 상세정보 행을 조회하여 반환
 * param recordId - 캠페인을 구분할 수 있는 아이디
 * return String - html 코드
 */
function getDetailAboutUrlSet( recordId )
{
    let txtHTML = '';
    txtHTML += '<div style="background-color: #e7f9ff; padding: 10px;">';
    txtHTML += '<table style="width: 100%; border-width: 0px;">';
    txtHTML +=   '<tr style="border-width: 0px;">';
    txtHTML +=     '<td style="border-width: 0px; background-color: #e7f9ff;" colspan="2">';
    txtHTML +=       'URL-SET명';
    txtHTML +=     '</td>';
    txtHTML +=     '<td style="border-width: 0px; background-color: #e7f9ff;" colspan="4">';
    txtHTML +=       '<input type="text" name="urlSetNm" value="신규 가입 이벤트">';
    txtHTML +=     '</td>';
    txtHTML +=   '</tr>';
    txtHTML +=   '<tr style="border-width: 0px;">';
    txtHTML +=     '<td style="width: 80px; border-width: 0px; background-color: #e7f9ff;">';
    txtHTML +=       '<input type="button" value="선택" onClick="noAction();">';
    txtHTML +=     '</td>';
    txtHTML +=     '<td style="width: 80px; border-width: 0px; background-color: #e7f9ff;">';
    txtHTML +=       'Step1';
    txtHTML +=     '</td>';
    txtHTML +=     '<td style="border-width: 0px; background-color: #e7f9ff;">';
    txtHTML +=       '<input type="text" name="urlSetNm" value="https://user.domain.com/campaign/view/step1.html">';
    txtHTML +=     '</td>';
    txtHTML +=     '<td style="border-width: 0px; background-color: #e7f9ff;">';
    txtHTML +=       '<input type="text" name="urlSetNm" value="신규가입">';
    txtHTML +=     '</td>';
    txtHTML +=     '<td style="border-width: 0px; background-color: #e7f9ff;">';
    txtHTML +=       '<input type="text" name="urlSetNm" value="2022-06-15 15:23:59" readOnly>';
    txtHTML +=     '</td>';
    txtHTML +=     '<td style="border-width: 0px; background-color: #e7f9ff;">';
    txtHTML +=       '<input type="text" name="urlSetNm" value="P342516" readOnly>';
    txtHTML +=     '</td>';
    txtHTML +=   '</tr>';
    txtHTML +=   '<tr style="border-width: 0px;">';
    txtHTML +=     '<td style="width: 80px; border-width: 0px; background-color: #e7f9ff;">';
    txtHTML +=       '<input type="button" value="선택" onClick="noAction();">';
    txtHTML +=     '</td>';
    txtHTML +=     '<td style="width: 80px; border-width: 0px; background-color: #e7f9ff;">';
    txtHTML +=       'Step2';
    txtHTML +=     '</td>';
    txtHTML +=     '<td style="border-width: 0px; background-color: #e7f9ff;">';
    txtHTML +=       '<input type="text" name="urlSetNm" value="https://user.domain.com/campaign/view/step2.html">';
    txtHTML +=     '</td>';
    txtHTML +=     '<td style="border-width: 0px; background-color: #e7f9ff;">';
    txtHTML +=       '<input type="text" name="urlSetNm" value="ID검증">';
    txtHTML +=     '</td>';
    txtHTML +=     '<td style="border-width: 0px; background-color: #e7f9ff;">';
    txtHTML +=       '<input type="text" name="urlSetNm" value="2022-06-15 15:25:23" readOnly>';
    txtHTML +=     '</td>';
    txtHTML +=     '<td style="border-width: 0px; background-color: #e7f9ff;">';
    txtHTML +=       '<input type="text" name="urlSetNm" value="P342516" readOnly>';
    txtHTML +=     '</td>';
    txtHTML +=   '</tr>';
    txtHTML +=   '<tr style="border-width: 0px; text-align: center;">';
    txtHTML +=     '<td style="border-width: 0px; background-color: #e7f9ff;" colspan="5">';
    txtHTML +=       '<input type="button" value="Step 추가" onClick="noAction();">';
    txtHTML +=       '&nbsp;';
    txtHTML +=       '<input type="button" value="Step 삭제" onClick="noAction();">';
    txtHTML +=       '&nbsp;';
    txtHTML +=       '&nbsp;';
    txtHTML +=       '&nbsp;';
    txtHTML +=       '<input type="button" value="Step 저장" onClick="noAction();">';
    txtHTML +=     '</td>';``
    txtHTML +=   '</tr>';
    txtHTML += '';
    txtHTML += '</table>';
    txtHTML += '</div>';

    return txtHTML;
}

/**
 * 메시지 목록 화면에서 상세정보 행을 조회하여 반환
 * param recordId - 메시지를 구분할 수 있는 아이디
 * return String - html 코드
 */
function getDetailAboutMsg( recordId )
{
    let txtHTML = '';
    txtHTML += '<div style="background-color: #e7f9ff; padding: 10px;">';
    txtHTML += '<input type="text" id="msgId" name="msgId" value="KKO_202300001" style="width:100px;">';
    txtHTML += '<input type="text" id="msgTtl" name="msgTtl" value="Step2 진입 촉진" style="width: 100px; margin-left: 10px;">';
    txtHTML += '<textarea id="msgStc" name="msgStc" rows="5" cols="80" style="margin-left: 10px;">';
    txtHTML +=   '클릭 한번으로 필요한 정보를 받아 가세요';
    txtHTML += '</textarea>';
    txtHTML += '<input type="button" value="저장" style="margin-left: 10px;">';
    txtHTML += '</div>';

    return txtHTML;
}
