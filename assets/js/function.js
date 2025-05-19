
//タブ切り替えjs
  $(function() {
    let tabs = $(".tab-item");
    $(".tab-item").on("click", function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        const index = tabs.index(this);
        $(".panel-content").removeClass("show").eq(index).addClass("show");
    });
});

// スクロールイベント
$(window).on('scroll', function() {
  var img = $('.footer-fv img'); // 対象の画像を取得

  if (img.length > 0) {
    var scrollTop = $(window).scrollTop(); // 現在のスクロール量を取得
    var windowHeight = $(window).height(); // ウィンドウの高さを取得
    var imgOffset = img.offset().top; // 画像の位置を取得

    // 画像が画面内に表示される範囲のスクロール時に画像を上に移動
    if (scrollTop + windowHeight > imgOffset) {
      // スクロール量に応じて `translateY` の値を増減
      var distance = (scrollTop + windowHeight - imgOffset) / 8; // 8で割ることで移動量を調整
      img.css('transform', 'translate(0%, -' + distance + 'px) translate3d(0px, 0px, 0px)');
    }
  }
});




