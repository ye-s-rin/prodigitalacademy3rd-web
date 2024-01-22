ask(
    () => confirm("동의하십니까?"),
    function() { alert("동의하셨습니다.") },
    function() { alert("취소 버튼을 누르셨습니다.") }
);

function ask(trigFn, resolveFn, rejectFn){
    trigFn() ? resolveFn() : rejectFn();
};

const ask = (trigFn, resolveFn, rejectFn) => {
    trigFn() ? resolveFn() : rejectFn();
};
    