

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area li:first-of-type').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');				///タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});



// テーマ分けの設定


  $(function () {
    // 絞り込みを変更した時
    $('.search_item').on('click', function () {
      $('.search_item').removeClass('is-active');
      let group = $(this).addClass('is-active').data('group');
      search_filter(group);
      // $('.list_item').addClass('fade');
    });
  });
  
  /**
   * リストの絞り込みを行う
   * @param {String} group data属性の値
   */
  function search_filter(group) {
    // 非表示状態を解除
    $('.list_item').removeClass('is-hide');
    // 値が空の場合はすべて表示
    if (group === '') {
      return;
    }
    // リスト内の各アイテムをチェック
    for (let i = 0; i < $('.list_item').length; i++) {
      // アイテムに設定している項目を取得
      let itemData = $('.list_item').eq(i).data('group');
      // 絞り込み対象かどうかを調べる
      if (itemData !== group) {
        $('.list_item').eq(i).addClass('is-hide');
      }
  
    }
  }

  //テーマ選択ボタンの動き
  
  function FixedAnime() {
      let headerH = $('.search').outerHeight(true);
      let scroll = $(window).scrollTop();
      if (scroll >= headerH){//headerの高さ以上になったら
              $('.search').addClass('fixed');//fixedというクラス名を付与
          }else{//それ以外は
              $('.search').removeClass('fixed');//fixedというクラス名を除去
          }
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
      FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
  });
