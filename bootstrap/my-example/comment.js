// script.js
$(document).ready(function() {
    // 댓글 폼 제출 시 실행되는 함수
    $('#commentForm').submit(function(event) {
      event.preventDefault();
  
      // 입력된 값을 가져옴
      var name = $('#commentName').val();
      var text = $('#commentText').val();
  
      // 댓글 목록에 댓글 추가
      var commentHtml = '<div class="card mb-2"><div class="card-body"><strong>' + name + '</strong>: ' + text + '</div></div>';
      $('#commentList').append(commentHtml);
  
      // 입력 필드 초기화
      $('#commentName').val('');
      $('#commentText').val('');
    });
  });
  