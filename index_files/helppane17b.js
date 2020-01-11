//helppane.js Version 1.7
var H_URL_BASE='',H_TOPIC='',H_KEY='',L_H_TEXT='',H_FILTER='',H_BRAND='',bSearch=false;
var H_CONFIG='',L_H_APP='',L_CONTACTUS_URL='';
var H_BURL='helppane.htm',H_TARG='',H_VER='1.7';
var h_win,H_OTHER='',bResize=false;
function DoHelp(iNm) {
	var sQP='?',W,H,sWD,sc=screen.width,bIE4PC;
	var agent = navigator.userAgent.toLowerCase();
	var app = navigator.appName.toLowerCase();		
	sQP+='H_VER='+H_VER;
	if (H_BRAND!='') sQP+='&H_BRAND='+H_BRAND
	if (H_FILTER!='') sQP+='&H_FILTER='+H_FILTER 
	sQP+=(bSearch) ? '&SEARCHTERM='+escape(H_KEY)+'&S_TEXT='+escape(L_H_TEXT):'&TOPIC='+H_TOPIC
	if (typeof(v1)!="undefined") sQP+='&v1='+escape(v1)
	else sQP+='&v1='+escape(document.location.protocol + "//" + document.location.hostname)
    sQP+='&v2='+escape(document.location.search);
    if (typeof(H_CONFIG) != "undefined" && (self.name == null || self.name == "" || self.name == "msnMain")) self.name = H_CONFIG.substring(0,H_CONFIG.indexOf("."));
    sQP+='&tmt='+escape(window.name);
	W=(sc<= 800 && agent.indexOf("mac")==-1)?180:230;
	H=(agent.indexOf("windows")>0 && agent.indexOf("aol")>0) ? screen.availHeight-window.screenTop-22:screen.availHeight//*AOL
	if ((agent.indexOf('msn 6')>0) || (agent.indexOf('msn 8')>0)){
		window.external.showHelpPane(H_URL_BASE+'/frameset.asp'+sQP+'&H_APP='+escape(L_H_APP)+'&INI='+H_CONFIG,W)
	}	
	else if (agent.indexOf('webtv')>0 || agent.indexOf('msn companion')>0){
		top.location.replace(H_URL_BASE+'/frameset.asp'+sQP+'&H_APP='+escape(L_H_APP)+'&INI='+H_CONFIG)
	}
	else {
		if (!iNm == null) sHWName+=iNm;
		sWD="toolbar=0,status=0,menubar=0,width="+W+",height="+H+",left="+(sc-W)+",top=0,resizable=1";
		bResize=false;
		bIE4PC = agent.indexOf("msie 4")>0 && agent.indexOf("aol")<0 && agent.indexOf("mac")<0
		if (H_TARG=='') H_TARG = (bIE4PC)?'_help17':'_help';
		if (bIE4PC && h_win!=null && !h_win.closed) h_win.location.replace(H_BURL+sQP)
		else h_win=window.open(H_BURL+sQP,H_TARG,sWD);
		if (h_win && agent.indexOf("mac")<0 && app.indexOf("netscape")<0 && h_win.opener!=self) h_win.opener=self//*IE5+PC
	}
}


/*
     FILE ARCHIVED ON 00:01:15 Jun 04, 2002 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:54:03 Jan 10, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 184.123
  exclusion.robots: 0.205
  PetaboxLoader3.resolve: 86.383
  esindex: 0.018
  exclusion.robots.policy: 0.189
  CDXLines.iter: 29.365 (3)
  LoadShardBlock: 122.752 (3)
  RedisCDXSource: 27.592
  PetaboxLoader3.datanode: 142.27 (4)
  load_resource: 164.361
*/