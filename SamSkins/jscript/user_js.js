var sam = '';
var smaico = Icones+'icons/'  ;
var Samlink = '';
function SamTableOpen()
{
    sam += ' <table   width=100% cellspacing=0 cellpadding=0><tr><td>  ';


       
}
function SamTableCont()
{   

     Samlink = link + 'smadminuser';
     Samlinkposts = link + 'samposts/post' + SamUid ;
     Samlinkliks = link + 'samliks/like' + SamUid ;
	 
	 smaico = Icones+'icons/'  ;

    if(SamUid == memberID  ) mypage = false; else mypage = true;
	
    //sam += '<td class=cat width=100%>'+member_info_details+'</td>'
    sam += ' '
		 + '</tr></table></center>';
    sam += '<center><table     width=100% cellspacing=1 cellpadding=0 border=0><tr> ';
         samuserdetiller();
    sam += ' </tr></table></center>';


       
}
function  samuserdetiller()
{

    sam += '<td aligne=right valign=top   ><table   cellspacing=1 cellpadding=1 border=0>'
	    +  '<tr> <td class=cat align=center colspan=2  >'+ Samu(Samlink ,SamUserName,mypage) +'<nobr><font size=4 color=whitesmoke>'+ SamUserName + '</font></nobr> </a></td></tr>'
	    +  '<tr> <td class=optionsbar_menus id=imgPro colspan=2><img src='+SamImgPro+' onError="SamOnerr()"    title="'+member_like_this+'"  /></td></tr>'
	    +  '<tr> <td class=optionsbar_menus align=center  ><nobr>'+ Samu(Samlinkliks ,forums_windowtitle_liks_of + ' '+ SamUserName,false) + '<font color=red size=-2>' + forums_windowtitle_liks_of+' : '+liks+'</font></a></nobr></td> <td class=optionsbar_menus align=center  ><a href='+link+'samlik><img src='+smaico+'iLike width=15 title="'+member_like_this+'" /></a></td></tr>'
	    +  '<tr> <td class=optionsbar_menus align=center colspan=2  ><a href='+link+'Samedit/message/user'+SamUid+'-'+memberQID+'-'+Samsrc+'><nobr><font  size=-2> '+member_info_click_to_mail+' </font></nobr></a></td></tr>';
	    +  '<tr> <td class=cat align=center colspan=2  > '+member_re_pho+' </td></tr>'
	    +  '<tr> <td class=optionsbar_menus align=center colspan=2  ><img src='+SamImgPro_ral+'    title="'+member_like_this+'" /></td></tr>';
		if(SamUsrIsOnline == 1 )
	sam +=  '<tr> <td class=optionsbar_menus align=center colspan=2  > <img src='+smaico+'konline title="'+member_is_online_now+'" /> </td></tr>';
	sam += '</table></td>';
    sam += '<td align=left width=100% valign=top   ><table width=100% class=samsol_r   cellspacing=1 cellpadding=0 border=0>'
	    +  '<tr> <td class=cat colspan=2>'+member_info_details+'</td> </tr>';
		if(memberLevel > 1)
    sam += '<tr> <td class=f1> <nobr> '+member_user_Num+'</nobr></td><td class=f2ts width=100% > '+SamUid+'</td></tr>';
    sam += '<tr> <td class=f1> <nobr> '+member_info_name_real+'</nobr></td><td class=f2ts width=100% > '+ Samdescript  +'</td></tr>';
	 if( SamPOsts > 0)
    sam +=  '<tr> <td class=f1> <nobr> '+forums_windowtitle_posts_of+'</nobr></td><td class=f2ts width=100% >'+SamPOsts+'</td></tr>';
	if( SamPoints > 0)
    sam +=  '<tr> <td class=f1> <nobr> '+member_points+'</nobr></td><td class=f2ts width=100% >'+SamPoints  +'</td></tr>';
		if(moderate)
    sam +=  '<tr> <td class=f1> <nobr> '+member_email+'</nobr></td><td class=f2ts width=100% > '+SamEmail+'</td></tr>';
	    if(! empty(Samdescript))
    sam += '<tr> <td class=f1> <nobr> '+member_title+'</nobr></td><td class=f2ts align=right width=100% > '+Samdescript+'</td></tr>';
	  if(! empty(Samcountry)  )
    sam +=  '<tr> <td class=f1> <nobr> '+member_country+'</nobr></td><td class=f2ts  width=100% > '+GetCountry(Samcountry)+'</td></tr>';
	  if(! empty(Samadress)  )
    sam +=  '<tr> <td class=f1> <nobr>'+member_info_address+'</nobr></td><td class=f2ts  width=100%> '+Samadress+'</td></tr>';
	  if(! empty(Samsituation)  )
    sam +=  '<tr> <td class=f1><nobr> '+member_marstatus+'</nobr></td><td class=f2ts width=100% > '+Samsituation+'</td></tr>';
	  if(   SamAge > 0 )
    sam +=  '<tr> <td class=f1> <nobr>'+member_age+'</nobr></td><td class=f2ts  width=100%>'+SamAge+'</td></tr>';
    sam +=  '<tr> <td class=f1> <nobr>'+member_info_last_visit+'</nobr></td><td class=f2ts  width=100%> '+formatDate(SamLastVisite)+'</td></tr>';
    sam +=  '<tr> <td class=f1> <nobr>'+member_info_reg_date+'</nobr></td><td class=f2ts  width=100%> '+formatDate(regdat)+'</td></tr>';
	if(   Samview > 0 && memberLevel > 1  )
    sam +=  '<tr> <td class=f1> <nobr>'+member_info_visits+'</nobr></td><td class=f2ts  width=100%> '+Samview+'</td></tr>';
	 if(   moderate )
	 {
    sam +=  '<tr> <td class=f1> <nobr>'+member_ip+'</nobr></td><td class=f2ts  width=100%> '+SamLastIp+'</td></tr>';
    sam +=  '<tr> <td class=f1> <nobr>'+member_last_ip+'</nobr></td><td class=f2ts  width=100%> '+SamIp+'</td></tr>';
    sam +=  '<tr> <td class=f1> <nobr>'+member_last_ip_contry+'</nobr></td><td class=f2ts  width=100%> '+GetFlag(SamIpflage)+'</td></tr>';
    sam +=  '<tr> <td class=f1> <nobr>'+member_browse+'</nobr></td><td class=f2ts  width=100%> '+SamBroser+'</td></tr>';
	}
    sam +=  '</table></td>';
 
}
function SamTableclose()
{
    sam += '</td></tr></table>';


       
}
function render_content()
{



    SamTableOpen();
	SamTableCont();
	SamTableclose();

 document.write(sam);







}