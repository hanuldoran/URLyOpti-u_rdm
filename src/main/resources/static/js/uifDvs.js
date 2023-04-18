/**
 * 다음 페이지 조회를 위한 키값 정의
 */
var OPN_KEY = "not define";

/**
 * 브라우저의 크기를 변수에 저장
 */
var brsBodWth;
var brsBodHit;

const maxbrsBodWth = 1800; // 콘텐츠를 표시할 최대 폭

const bodTopHit = 80;   // 상단 프레임의 높이 
const bodLftWth = 270;  // 좌측 프레임의 넓이

/**
 * html 페이지의 로딩이 완료되는 시점에 대한 리스너
 */
window.addEventListener(`load`, function() {
    repaintBrowser();
});

/**
 * 브라우저의 크기가 변경되는 이벤트에 대한 리스너
 */
window.addEventListener(`resize`, function() {
    repaintBrowser();
});

/**
 * 브라우저의 크기에 따라 콘텐츠 프레임의 크기를 조정
 */
function repaintBrowser()
{
    brsBodWth = ( window.innerWidth > maxbrsBodWth ? maxbrsBodWth : window.innerWidth );
    brsBodHit = window.innerHeight;

    let arrFrm = document.getElementsByTagName('iframe');

    for( i = 0; i < arrFrm.length; i++ )
    {
        // div 요소의 테두리가 있으므로 여유있게 5를 더 차감하여 계산
        arrFrm[i].height = ( brsBodHit - bodTopHit - 5 );

        switch( arrFrm[i].id )
        {
        case "FRM_CTT":
            arrFrm[i].width = ( brsBodWth - bodLftWth - 5 );
            break;
        default:
            arrFrm[i].width = bodLftWth;
            break;
        }

        arrFrm[i].style.display = "block";
    }
}

/**
 * 콘텐츠 프레임에서 화면 이동
 * @param ttl - 제목
 * @param pth - 메뉴경로
 * @param opnKey - 열릴 페이지에서 자동조회할 key의 값
 * @param url - 열릴 페이지의 URL
 */
function openContents(ttl, pth, opnKey, url)
{
    // 메뉴 제목
    document.getElementById("MNU_TTL").innerHTML = ttl;

    // 메뉴 경로
    document.getElementById("MNU_PTH").innerHTML = pth;

    // 화면 로딩 시 자동조회 키의 값
    OPN_KEY = opnKey;

    // 메뉴 URL
    //window.FRM_CTT.src = url;
    window.open(url, "frmCtt");
}