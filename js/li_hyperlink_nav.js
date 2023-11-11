document.addEventListener("DOMContentLoaded", function () {
    // 모든 li 요소를 선택합니다.
    var menuItems = document.querySelectorAll('.sub li');

    // 각 li에 클릭 이벤트를 추가합니다.
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // 클릭한 li의 첫 번째 a 요소의 href 값을 가져옵니다.
            var link = item.querySelector('a').getAttribute('href');

            // 가져온 링크로 이동합니다.
            if (link) {
                window.location.href = link;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const timetableMenu = document.getElementById('timetable-menu');

    timetableMenu.addEventListener('click', function () {
        window.location.href = './timetable.html';
    });
});