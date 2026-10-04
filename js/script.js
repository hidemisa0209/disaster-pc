




// いま災害が起きたらの中身＋オーバーレイ
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const buttons = document.querySelectorAll(".s-card button");
  const infos = document.querySelectorAll(".s-cardinfo");

  const closeAll = () => {
    overlay.classList.remove("is-active");
    infos.forEach(info => info.classList.remove("is-active"));
  };

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".s-card");
      const cardId = card.id;           // scard01
      const info = document.getElementById(cardId + "info"); // scard01info

      if (!info) return;
      infos.forEach(i => i.classList.remove("is-active"));

      // オバレ & 対応してるsのinfo
      overlay.classList.add("is-active");
      info.classList.add("is-active");
    });
  });


  // クリックで閉じる系
  overlay.addEventListener("click", closeAll);
  infos.forEach(info => {
    info.addEventListener("click", closeAll);
  });
});





// クイズの中身＋オーバーレイ
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const linfo = document.getElementById("linfo");
  const quizInfos = document.querySelectorAll(".l-quizinfo");

  const quizMap = {
    lfquiz: "lfquizinfo",
    lrquiz: "lrquizinfo",
    ldquiz: "ldquizinfo"
  };

  const buttons = document.querySelectorAll(".l-quiz button");

  const closeAll = () => {
    overlay.classList.remove("is-active");
    linfo.classList.remove("is-active");
    quizInfos.forEach(info => info.classList.remove("is-active"));
  };

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".l-quiz");
      if (!parent) return;

      const targetId = quizMap[parent.id];
      const targetInfo = document.getElementById(targetId);
      if (!targetInfo) return;

      quizInfos.forEach(info => info.classList.remove("is-active"));

      overlay.classList.add("is-active");
      linfo.classList.add("is-active");
      targetInfo.classList.add("is-active");
    });
  });

  overlay.addEventListener("click", closeAll);
  linfo.addEventListener("click", closeAll);
});





// ボタン系・TOP＋スムーズに飛ぶよ～んの部分
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.getElementById("top-btn");
  const showPoint = 1000; // ここまでスクロールしたら出る！

  window.addEventListener("scroll", () => {
    if (window.scrollY > showPoint) {
      topBtn.classList.add("is-show");
    } else {
      topBtn.classList.remove("is-show");
    }
  });
});




// ナビゲーションのボタン
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("m-menubtn");
  const crossBtn = document.getElementById("cross");
  const showPoint = 1600; // 一緒に出るよりtopのちょっと後に出た方がオシャレかな〜というだけの理由です

  if (!menuBtn || !crossBtn) return;

  // クロスの開閉部分
  crossBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-open");
  });

  // スクロールで表示する部分
  window.addEventListener("scroll", () => {
    if (window.scrollY > showPoint) {
      menuBtn.classList.add("is-show");
    } else {
      menuBtn.classList.remove("is-show");
      menuBtn.classList.remove("is-open");
    }
  });
});




// 防災チェック
document.addEventListener("DOMContentLoaded", () => {
  const cbtn = document.getElementById("cbtn");
  const rucksack = document.getElementById("rucksack");
  const citems = document.getElementById("citems");

  cbtn.addEventListener("click", () => {

    cbtn.classList.add("is-active");
    rucksack.style.opacity = "0";

    setTimeout(() => {
      // リュック02に切り替え
      rucksack.src = "./img/c_rucksack02.png";
      rucksack.style.opacity = "1";

      // リュックの後の付箋表示
      setTimeout(() => {
        citems.classList.add("is-open");
      }, 400); // ← あとでitem出現までの時間いじる！

    }, 200);
  });
});





// 取り組みの横スクロール無限ループ
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("history-card");

  if (!container) return;

  container.innerHTML += container.innerHTML;
  let scrollSpeed = 0.7;

  function autoScroll() {
    container.scrollLeft += scrollSpeed;

    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }

    requestAnimationFrame(autoScroll);
  }
  autoScroll();
});





// こっからスクロール関連！
document.addEventListener('DOMContentLoaded', () => {
  ScrollReveal().reveal(
    '#main-visual h1',
    {
      duration: 800,
      origin: 'left',
      distance: '20px',
      easing: 'ease-out'
    });


  ScrollReveal().reveal(
    '#main-visual, .f-pic',
    {
      duration: 800,
      opacity: 0,
      delay: 200,
      easing: 'ease-out'
    });


  ScrollReveal().reveal(
    '#profile .p-pic',
    {
      duration: 800,
      opacity: 0,
      easing: 'ease-out',
      viewFactor: 0.2,
      viewOffset: {
        bottom: 50  // ← ちょい手前で反応させてる
      },
      delay: 0
    });


  ScrollReveal().reveal(
    '#profile .p-txt p, #profile .p-txt span, #main-menu li, h2, .s-click, .s-card, #situation-catch span, #situation-catch p',
    {
      duration: 800,
      opacity: 0,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-out',
      viewFactor: 0.2,
      viewOffset: { bottom: 50 },
      interval: 100
    });


  ScrollReveal().reveal(
    '#about li, .about-catch span, .l-mainpic, .l-main h3, .l-pic, .l-features li, .l-price, .l-quiz h4, .l-quiz li, .qiz_btn',
    {
      duration: 800,
      opacity: 0,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-out',
      viewFactor: 0.2,
      viewOffset: { bottom: 50 },
      interval: 100
    });


  ScrollReveal().reveal(
    '.h-pic, .h-txt span, .c-catch p, .c-catch span, .c-pic, .c-btn',
    {
      duration: 800,
      opacity: 0,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-out',
      viewFactor: 0.2,
      viewOffset: { bottom: 50 },
      interval: 100
    });


  ScrollReveal().reveal(
    '.b-catch span, .b-card, .l-catch, .f-logo, .f-address, .copyright, .f-menu li, #top-btn',
    {
      duration: 800,
      opacity: 0,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-out',
      viewFactor: 0.2,
      viewOffset: { bottom: 50 },
      interval: 100
    });
});
