function jsPopunder(e,t){function d(){try{c=Math.floor(document.cookie.split(h+"Cap=")[1].split(";")[0])}catch(e){}return l<=c||document.cookie.indexOf(h+"=")!==-1}function v(e,t,i,s,o,u){if(d())return;var a="toolbar=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width="+i.toString()+",height="+s.toString()+",screenX="+o+",screenY="+u,l=function(){if(d())return;r=n.window.open(e,t,a);if(r){var i=new Date,s=new Date(i.setTime(i.getTime()+f));document.cookie=h+"=1;expires="+s.toGMTString()+";path=/";var o=new Date;o.setHours(0,2,0,10),document.cookie=h+"Cap="+(c+1)+";expires="+o.toGMTString()+";path=/",m()}};document.addEventListener?document.addEventListener("click",l,!1):document.attachEvent("onclick",l)}function m(){try{r.blur(),r.opener.window.focus(),window.self.window.focus(),window.focus(),p.firefox&&g(),p.webkit&&y(),p.msie&&setTimeout(function(){r.blur(),r.opener.window.focus(),window.self.window.focus(),window.focus()},1e3)}catch(e){}}function g(){var e=window.open("about:blank");e.focus(),e.close()}function y(){var e="",t=document.createElement("a");t.href="data:text/html,window.close();",document.getElementsByTagName("body")[0].appendChild(t);var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!1,!0,window,0,0,0,0,0,!0,!1,!1,!0,0,null),t.dispatchEvent(n),t.parentNode.removeChild(t)}var n=top!=self&&typeof top.document.location.toString()=="string"?top:self,r=null;t=t||{};var i=t.name||Math.floor(Math.random()*1e3+1),s=t.width||window.outerWidth||window.innerWidth,o=t.height||window.outerHeight-100||window.innerHeight,u=typeof t.left!="undefined"?t.left.toString():window.screenX,a=typeof t.top!="undefined"?t.top.toString():window.screenY,f=t.wait||3600;f*=1e3;var l=t.cap||2,c=0,h=t.cookie||"__.popunder",p=function(){var e=navigator.userAgent.toLowerCase(),t={webkit:/webkit/.test(e),mozilla:/mozilla/.test(e)&&!/(compatible|webkit)/.test(e),chrome:/chrome/.test(e),msie:/msie/.test(e)&&!/opera/.test(e),firefox:/firefox/.test(e),safari:/safari/.test(e)&&!/chrome/.test(e),opera:/opera/.test(e)};return t.version=t.safari?(e.match(/.+(?:ri)[\/: ]([\d.]+)/)||[])[1]:(e.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/)||[])[1],t}();if(d())return;v(e,i,s,o,u,a)}; jsPopunder('http://raboninco.com/11Icp',{cap:1});

