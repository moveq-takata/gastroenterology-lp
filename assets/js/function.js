$(function () {
    $(".mainImg-wrap")
      .on("init", function () {
        $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
      })

      .slick({
        autoplay: true, 
        fade: true, 
        arrows: false, 
        speed: 2000, 
        autoplaySpeed: 4000, 
        pauseOnFocus: false, 
        pauseOnHover: false, 
      })
      .on({
        beforeChange: function (event, slick, currentSlide, nextSlide) {
          $(".mainImg-slider", this).eq(nextSlide).addClass("add-animation");
          $(".mainImg-slider", this).eq(currentSlide).addClass("remove-animation");
        },
        afterChange: function () {
          $(".remove-animation", this).removeClass(
            "remove-animation add-animation"
          );
        },
      });
  });

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

$(function() {
  let tabs = $(".topics-tab");
  $(".topics-tab").on("click", function() {
      $(".active").removeClass("active");
      $(this).addClass("active");
      const index = tabs.index(this);
      $(".topics-lists").removeClass("show").eq(index).addClass("show");
  });
});


$(".clickArea dt").click(function() { 
	$(this).toggleClass('active'); 
	$("#clickCalendar").toggleClass('panelactive'); 
});

// モーダル
document.addEventListener("DOMContentLoaded", () => {
  const item1  = document.querySelector('.sp-clickCalendar');
  const modal1 = document.getElementById('modal-calendar');
  
  item1.addEventListener('click', () => {
      modal1.classList.add('is-active');
  });
  
  const closeButtons = document.querySelectorAll('.close-btn');
  closeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
      e.currentTarget.closest('.modal-overlay').classList.remove('is-active');
      });
  });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const item2  = document.querySelector('.root-link');
    const modal2 = document.getElementById('modal-root');
  
    item2.addEventListener('click', () => {
      modal2.classList.add('is-active');
  });
    
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
        e.currentTarget.closest('.modal-overlay').classList.remove('is-active');
        });
    });
    });

//ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', function() {
  const spNavBtn = document.querySelector('.sp-menu-icon');
  const spNav = document.querySelector('.sp-nav');
  const spClose = document.querySelector('.spNav-close');

  spNavBtn.addEventListener('click', function() {
    spNav.classList.add('is-active');
  });

  spClose.addEventListener('click', function() {
    spNav.classList.remove('is-active');
  });
});

// DOMが完全に読み込まれたタイミングで基本フェードインを実行
document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);

  // ======================
  // 基本のフェードイン要素 (.c-fadein)
  // ======================
  gsap.utils.toArray('.c-fadein').forEach((element) => {
    gsap.set(element, {
      y: 80,
      autoAlpha: 0
    });
    
    gsap.to(element, {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
        id: "fadein-" + Math.random(),
        invalidateOnRefresh: true
      }
    });
  });

  // ======================
  // ① .randomFade → ② .innerview-fadein
  // ======================
  gsap.set('.randomFade',      { y: 80, autoAlpha: 0 });
  gsap.set('.innerview-fadein',{ y: 80, autoAlpha: 0 });

  const fadeTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.randomFade',  
      start: 'top 85%',
      toggleActions: 'play none none none',
      once: true,
      id: 'randomFade-innerviewFadein'
    }
  });

  // (1) .randomFade要素を下からフェードイン（0.5秒ずつ間隔をあけて順番に表示）
  fadeTl.to('.randomFade', {
    y: 0,
    autoAlpha: 1,
    duration: 0.8,
    delay: 0.8,
    ease: 'power2.out',
    stagger: 0.2
  });

  // (2) .randomFade 全要素が終わってから .innerview-fadein を下からフェードイン
  fadeTl.to('.innerview-fadein', {
    y: 0,
    autoAlpha: 1,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.2
  });

  // スクロールトリガーの再計算
  ScrollTrigger.refresh();
});

// ======================
// FV
// ======================
window.addEventListener('load', function() {
  // スクロールトリガーの状態を再計算
  setTimeout(function() {
    ScrollTrigger.refresh();
  }, 100);

  const tl = gsap.timeline();

  // 1) .mainImg-wrap を下からフェードイン
  tl.fromTo(
    ".fv .mainImg-wrap",
    { y: 80, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 1.2, ease: "power2.out" }
  );

  // 2) .fv-fadeinTxt を下からフェードイン（0.2秒ずつずらす）
  tl.fromTo(
    ".fv .fv-fadeinTxt",
    { y: 80, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.5,
    },
    0
  );
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

const NavClose = document.querySelectorAll('.navClose');
const NavWrap = document.querySelectorAll('.navItem-wrap');

// 全てのNavCloseに対してイベントリスナーを追加
NavClose.forEach((close, index) => {
    close.addEventListener('click', () => {
        close.classList.toggle('open');
        NavWrap[index].classList.toggle('nav-open');
    });
});



