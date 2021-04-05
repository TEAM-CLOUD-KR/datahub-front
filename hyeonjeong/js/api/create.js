$(function () {
    function moveToLastItem(target) {
        $(target).removeAttr('multiple').attr('multiple', 'multiple').prop('selectedIndex', $(target)
            .children().length - 1);
    }

    function moveItems(origin, dest) {
        $(origin).find(':selected').appendTo(dest);
        moveToLastItem(dest);
    }

    function moveAllItems(origin, dest) {
        $(origin).children().appendTo(dest);
        moveToLastItem(dest);
    }

    $('#left').click(function () {
        moveItems('#sbTwo', '#sbOne');
    });

    $('#right').on('click', function () {
        moveItems('#sbOne', '#sbTwo');
    });

    $('#leftall').on('click', function () {
        moveAllItems('#sbTwo', '#sbOne');
    });

    $('#rightall').on('click', function () {
        moveAllItems('#sbOne', '#sbTwo');
    });
});