  $(document).ready(function(){
  	//设置首页二级菜单
  	$("._nav li").hover(function() {
            $("._nav .customer-index-submenu").hide();
            $(this).attr("class","active");
            $("._nav .active .customer-index-submenu").show();
        },
        function() {
            $("._nav .active").attr("class","");
            $("._nav .customer-index-submenu").hide();
        }
    );
    $("._nav li").hover(function() {
            $("._nav .customer-submenu").hide();
            $(this).attr("class","active");
            $("._nav .active .customer-submenu").show();
        },
        function() {
            $("._nav .active").attr("class","");
            $("._nav .customer-submenu").hide();
        }
    );
    //首页轮播与走进生活切换
    $('#byx_carousel').carousel({
      interval: 3000
    }).on('slid.bs.carousel', function (e) {
      var $this = $(e.relatedTarget).find("img");
      var slidePic = $this.attr("data");
      var lifeHref = $this.attr("data-href");
      console.log(lifeHref);
      $('#byx_live').attr('src',slidePic);
      $('#byx_live').parents('a').attr('href',lifeHref);
    });
    //首页换灯
    $('.bxy-slide').bxSlider({
      slideWidth: 310,
      minSlides: 2,
      maxSlides: 4,
	    moveSlides: 1,
      slideMargin: 6,
      pager:false
    });
    //搜索下拉列表
	$('#byx_search-select li a').click(function(){
    	$('#byx_search-selected').attr('data-id',$(this).attr('data-id')).text($(this).text());
    });
  });