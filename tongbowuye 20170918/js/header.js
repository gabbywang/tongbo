document.writeln("<!DOCTYPE html>");
document.writeln("<html>");
document.writeln("	<head>");
document.writeln("		<meta charset=\'utf-8\' />");
document.writeln("		<meta http-equiv=\'Content-Type\' content=\'text/html; charset=gb2312\' />");
document.writeln("		<title></title>");
document.writeln("	     <meta name=\'viewport\' content=\'width=device-width, initial-scale=1\'>");
document.writeln("		");
document.writeln("		");
document.writeln("		<link href=\'css/style.css\' rel=\'stylesheet\' type=\'text/css\' />");
document.writeln("		");
document.writeln("	 ");
document.writeln("		<script src=\'js/jquery.js\'></script>");
document.writeln("    ");
document.writeln("");
document.writeln("		");
document.writeln("	</head>");
document.writeln("	<body>");
document.writeln("		<div id=\'top\'>");
document.writeln("		  <div class=\'logo\'><img src=\'images/imgsy/logo_02.png\'></div>");
document.writeln("		  <div class=\'nav\'>");
document.writeln("			");
document.writeln("			<ul class=\'mainnav\'>");
document.writeln("				<li><a href=\'index.html\'>首页</a></li>");
document.writeln("				<li><a href=\'aboutus.html\'>关于我们</a>");
document.writeln("				    <ul>");
document.writeln("                        <li><a href=\'javascript:return false\' onclick=go('gsjj')>公司简介</a></li>");
document.writeln("                        <li><a href=\'javascript:return false\' onclick=go('zzjg')>组织机构</a></li>");
document.writeln("                        <li><a href=\'javascript:return false\' onclick=go('fzlc')>发展历程</a></li>");
document.writeln("                        <li><a href=\'javascript:return false\' onclick=go('ryzz')>资质荣誉</a></li>");
document.writeln("                        <li><a href=\'javascript:return false\' onclick=go('ppwh')>品牌文化</a></li>");
document.writeln("                    </ul>");
document.writeln("				</li>");
document.writeln("				");
document.writeln("				<li><a href=\'news-company.html\'>新闻中心</a>");
document.writeln("				    <ul>");
document.writeln("                        <li><a href=\'news-company.html\'>公司新闻</a></li>");
document.writeln("				        <li><a href=\'news-media.html\'>媒体报道</a></li>");
document.writeln("				        <li><a href=\'news-magazine.html\'>服务期刊</a></li>");
document.writeln("                    </ul>");
document.writeln("				</li>");
document.writeln("				");
document.writeln("				<li><a href=\'service.html\'>业务领域</a>");
document.writeln("				   <ul>");
document.writeln("                        <li><a href=\'service.html#property\'>物业</a></li>");
document.writeln("				        <li><a href=\'service.html#catering\'>餐饮</a></li>");
document.writeln("				        <li><a href=\'service.html#education\'>幼教</a></li>");
document.writeln("				        <li><a href=\'service.html#hospital\'>医疗</a></li>");
document.writeln("                    </ul>");
document.writeln("				</li>");
document.writeln("				");
document.writeln("				<li><a href=\'recruit.html\'>人才招聘</a>");
document.writeln("				    <ul>");
document.writeln("                        <li><a href=\'recruit.html#idea\'>人才理念</a></li>");
document.writeln("                        <li><a href=\'recruit.html#message\'>招聘信息</a></li>     ");
document.writeln("                    </ul>");
document.writeln("				</li>");
document.writeln("");
document.writeln("				<li><a href=\'contact.html\'>联系我们</a></li>");
document.writeln("			</ul>");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("	");
document.writeln("	</body>");
document.writeln("</html>");

function go(a) {
	var xx=window.location.href;
          	xx=xx.split("#");
          	xx=xx['1']
          	  if (typeof(xx) == "undefined") { 
          	  	window.location.href="aboutus.html#"+a;
          	  }else{    
          	  	window.location.href="aboutus.html#"+a;
          	  	window.location.reload(true);	
          	  }
}