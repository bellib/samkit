 function Samher()
 {   
 
      
      u = SAMURL + '?samDer';
     Sam  = '<center><div id=SamTableAdm ><table dir="rtl" id=SamTableAdm border="0" width="60%" cellspacing="0" cellpadding="0" class="maingrid">'
	      + '<tr>'
		  + '<td class=catigo id="SamTopAproved"><a class=cat href=javascript:void>مواضيع تنتظر الموافقة</a></td>'
		  + '<td class=catigo>مواضيع محذوفة</td>'
		  + '<td class=catigo>أعضاء تنتظر الموافقة</td>'
		  + '<td class=catigo>ردود تنتظر الموافقة</td>'
		  + '</tr>' 
          + '<tr >'
		  + '<td colspan=4 class=f1 id=SamCount  > <img  id=liad border=0 src='+Icones+'icons/kload   /> <div id=SamC></div></td>'
		  + '</tr>'
		  + '</table></div>';
		  // document.getElementById('liad').style.visibility = "hidden";
		  $(document).ready(function (){
		  
		     $('#SamTopAproved').click(function(){
			 $('#SamTopAproved').removeAttr('style');
			 $('.SamLinApro').hide();
			 $('#liad').css({'display':'block'});
		     $.ajax({
             type: "POST",
             url: u,
             data: false,
             success: function(s) {
             $('#liad').css({'display':'none'});
	         // document.getElementById('potto').disabled = '';
			 if(s == 0)
			 s = '<tr><td width=100% colspan=4 <td width="100%" colspan="4" class="SamLinApro" style="padding: 9px;font-size: 16px;position: absolute;width: 158px;text-align: center;left: 592px;top: 193px;"> لا يوجد نتائج لإستعلامك</td> class=SamLinApro width=100%  > لا يوجد نتائج لإستعلامك</td></tr>';
			 else 
			 {
			  
			 var SamTopArr = explode(',',s);
			 var x = 0;
			 s = '<table width=100% border=0 cellspacing="1" cellpadding="0" class=conSam >';
			 while(x <= SamTopArr.length)
			 {
			    var Samid = SamTopArr[x++];
			    var FrmID = SamTopArr[x++];
			    var TopS  = SamTopArr[x++];
			    var s ;
				   
				  if( Samid.length > 0 &&  TopS.length > 0  )
				 s  += '<tr id="s'+Samid+'sam"><td class=SamLinApro width=100%  > <a href='+link+'samfrm/forum'+FrmID+'/topic'+Samid+'>'+TopS+'</a></td>'
				    +  '<td  class=SamLinApro><a href="javascript:aprov(' + Samid + ') "><img src=\"'+Icones+'icons/kfolder_moderate\" title=\"'+tip_approve_topic+'\" height=15 width=15 border=0 /></a></td>'
				    + '</tr>';
			 }
			 } /*// else*/
			  s += '</table>';
			 $('#SamTopAproved').css({'background':'rgb(240, 240, 240)'});
            $('#SamC').html(s);
			delete s;
      
            }
             });/*ajax*/
			});
 
			  
            });

 
    
 }
 function samIE()
 {
          var BrsrNoMatch = 'لايمكنك إستخدام متصفح إنترنت إكسبلور<br /><br>'
		                  + 'يمكنك إستخدام أحد المتصفحات الحديثة<br><br><br>'
						  + '<img src='+Icones+'frm/iforum5 width=40 height=40 >&nbsp;<img src='+Icones+'frm/isd width=40 height=40 >'
          Sam  = '<center> <table dir="rtl" id=SamTableAdm border="1" width="60%" cellspacing="1" cellpadding="0" class="maingrid">'
	 
          + '<tr >'
		  + '<td colspan=4 class=f1 id=SamCount  > <div id=SAMIE><li>'+BrsrNoMatch+'</li></div></td>'
		  + '</tr>'
		  + '</table></div>';
 
 }
function render_content()
	{   
	    if(browser == 'IE')
		samIE();
		else
        Samher();
        document.write(Sam);
		 
	}
function aprov(id)
{
   
  
   var lin  =  SAMURL +'?sammodi/index';
   
    $(document).ready(function(){
		     $.ajax({
             type: "POST",
             url: lin,
             data:  {
     url : 0,
	 moderate: "a," + id
    
	},
             success: function(s) {
               if(s == 'o')
			   $('#s'+id+'sam').hide(800);
            }
             });/*ajax*/
			 });
 

}