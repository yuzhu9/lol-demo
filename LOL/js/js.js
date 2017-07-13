/**
 * Created by yuzhu on 2017/7/13.
 */
//    search
$('.topbar .search').on('click', function () {
    alert('暂未开放，敬请期待哦~')
    return false
})
$(window).bind("scroll", function () {
    var top = $(this).scrollTop()
    if (top >= 90) {
        $(".banner-wrapper").addClass('active')
    }
})
//info-menu
$('.info-menu').on('click', 'li a', function (e) {
    var index = $(e.currentTarget).parent().index()
    $('.info-menu a').removeClass('active')
    $(e.currentTarget).addClass('active')
    $('.content-inner>div').removeClass('active')
    $($('.content-inner>div')[index / 2]).addClass('active')
    return false;
})
//    slides
$(function () {
    $(".slides").slidesjs({
        width: 820,
        height: 350,
        navigation: false,
        callback: {
            loaded: function () {
                var texts = ['庆LPL登顶亚洲', '好运魄罗降临', '7月13日LPL预告', 'S6冠军皮肤售卖', '全球高校冠军杯']
                $('.slidesjs-pagination-item').each(function (index, element) {
                    element.children[0].innerText = texts[index]
                    element.children[0].href = 'javascript:;'
                })
            }
        }
    })
})
//    video-popup
$('.video-wrapper .cover').click(function () {
    $('.video-popup').addClass('active')
})
$('.video-popup .video-close').click(function () {
    $('.video-popup').removeClass('active')
})
function switchfn(titleSelector, contentSelector) {
    $(titleSelector).on('mouseover', function (e) {
        var index = $(e.currentTarget).parent().index()
        $(titleSelector).removeClass('active')
        $(e.currentTarget).addClass('active')
        $(contentSelector).removeClass('active')
        $($(contentSelector)[index]).addClass('active')
    })
}
//    news
switchfn('.news-wrapper .news-title a', '.news-wrapper .news-contents')
//    skins
switchfn('.skins-wrapper .skins-title a', '.skins-wrapper .skins-container>div')
//    recommend
switchfn('.recommend .recommend-title a', '.recommend .recommend-content>div')