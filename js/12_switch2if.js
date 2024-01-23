/** p.104 */
`
switch (browser) {
    case 'Edge':
    console.log( "Edge를 사용하고 계시네요!" );
    break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
    console.log( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
    break;
    default:
    // alert는 브라우저 js에서만 동작합니다.
    alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
   }
`
if(browser == 'Edge'){
    console.log( "Edge를 사용하고 계시네요!" );
}
else if(browser in ['Chrome', 'Firefox', 'Safari', 'Opera']){
    console.log( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
}
else{
    alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
}