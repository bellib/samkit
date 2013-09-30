 
function render_content()
{
document.title = forums_windowtitle + "مولد اليوزرات";
var i;
if (begin_line.length==0) begin_line = "F:";
if (user_gen.length==0) user_gen = "user";
if (random_usr=="1") random_usr="checked"; else random_usr="";
if (lng_usr.length==0) lng_usr = 6; else lng_usr=parseInt(lng_usr);
if (pass_gen.length==0) pass_gen = "netalarabi";
if (random_pw=="1") random_pw=" checked"; else random_pw="";
if (lng_pw.length==0) lng_pw = 6; else lng_pw=parseInt(lng_pw);
if (total.length==0) total = "30";
document.write("<center><font size=+2 color=red>مُوَلد اليوزرات</font><br>معلومات الأسطر التي سيتم توليدها<table border=0 cellSpacing=1 cellPadding=4 style='background: whitesmoke;border: 1px solid gray;font-weight: bolder;'><form id=generate name=generate action='"+link22+"'   method=post><input type=hidden name=action value=generator>"
  +"<tr class=fixed><td class=optionheader>بداية السطر :</td><td colspan=3 align=middle><input dir=ltr type=text id=begin_line name=begin_line value=\""+begin_line+"\" style=\"width:250;\"></td></tr>"
  +"<tr class=fixed><td class=optionheader rowspan=2>اليوزر :</td><td colspan=3 align=middle><input dir=ltr type=text id=user name=user value=\""+user_gen+"\" style=\"width:250;\"></td></tr>"
  +"<tr class=fixed><td><input class=option_transparent"+random_usr+" type=checkbox id=random_usr name=random_usr onClick=\"checkchange()\"><font size=3 color=black><label for=random_usr>يوزرات عشوائية</label></font></td><td class=optionheader>الطول :</td><td align=middle><select disabled id=lng_usr name=lng_usr>");
 for (i=4;i<=12;i++) 
document.write("<option value="+i+">"+i+"</option>");
 
/**/
document.write("</select></td></tr>"
  +"<tr class=fixed><td class=optionheader rowspan=2>الباس :</td><td colspan=3 align=middle><input dir=ltr type=text id=pass name=pass value=\""+pass_gen+"\" style=\"width:250;\"></td></tr>"
  +"<tr class=fixed><td><input class=option_transparent"+random_pw+" type=checkbox id=random_pw name=random_pw onClick=\"checkchange()\"><font size=3 color=black><label for=random_pw>باس عشوائية</label></font></td><td class=optionheader>الطول :</td><td align=middle><select disabled id=lng_pw name=lng_pw>");
 for (i=4;i<=12;i++) 
document.write("<option value="+i+">"+i+"</option>");
 
 
document.write("</select></td></tr>"
  + "<tr class=fixed><td class=optionheader>نهاية السطر :</td><td colspan=3 align=middle><input dir=ltr type=text id=end_line name=end_line user value=\""+end_line+"\" style=\"width:250;\"></td></tr>"
  +"<tr class=fixed><td class=optionheader>عدد الأسطر :</td><td colspan=3 align=middle><input type=text id=total name=total maxlength=4 value=\""+total+"\" style=\"width:250;\"></td></tr>"
  +"<tr class=fixed><td align=middle colspan=4><input type=button id=potto value=\"توليد اليوزرات\" onclick=\"Generate()\">&nbsp;&nbsp;&nbsp;&nbsp;<img src="+Icones+"icons/kload  style=\"visibility:hidden;\" id='load_generator'></td><tr>"
  +"</form></table><br><table width=25% border=0 cellSpacing=4 cellPadding=4 bgColor=gray> <tr><div dir=ltr style='border: 1px solid #333;padding: 5px;display: block;background: whitesmoke;width: 328px;overflow: auto;height: 250px;text-align:left;' id=multics>" );
if (rCols.length>0 && lines.length>0) document.write(" cols="+rCols);
if (total.length>0 && lines.length>0) document.write(" rows="+total);
document.write(lines+"</tr></div></tr></table><br><br>");
 
}
 function checkchange(){ 
document.getElementById('lng_usr').disabled = !document.getElementById('random_usr').checked ;
document.getElementById('lng_pw').disabled = !document.getElementById('random_pw').checked ;
document.getElementById('user').disabled = document.getElementById('random_usr').checked ;
document.getElementById('pass').disabled = document.getElementById('random_pw').checked ;
}
function Generate(){
document.getElementById('begin_line').value = document.getElementById('begin_line').value.replace(/^[\s]+/g,'').replace(/[\s]+$/g,'');
document.getElementById('user').value = document.getElementById('user').value.replace(/^[\s]+/g,'').replace(/[\s]+$/g,'');
document.getElementById('pass').value = document.getElementById('pass').value.replace(/^[\s]+/g,'').replace(/[\s]+$/g,'');
document.getElementById('end_line').value = document.getElementById('end_line').value.replace(/^[\s]+/g,'').replace(/[\s]+$/g,'');
var Total = document.getElementById('total').value ;
if (!parseInt(Total)) {confirm("يجب أن يكون عدد الأسطر مكون من أرقام فقط");return;}
if (!document.getElementById('random_usr').checked && document.getElementById('user').value=="") {confirm("يرجى إدخال اليوزر");return;}
if (!document.getElementById('random_pw').checked && document.getElementById('pass').value=="") {confirm("يرجى إدخال الباسوورد");return;}
Total = parseInt(Total);
document.getElementById('total').value = Total;
if (Total <1 || Total>1000) {confirm("يجب أن يكون عدد الأسطر ما بين 1 و 1000");return;}
var data = 'action=generator&ajax=true&begin_line='+encodeURI(document.getElementById('begin_line').value)
+ '&user='+document.getElementById('user').value 
+ '&pass='+document.getElementById('pass').value
+ '&lng_usr=' + document.getElementById('lng_usr').value 
+ '&lng_pw='  + document.getElementById('lng_pw').value
+ '&end_line='+encodeURI(document.getElementById('end_line').value)
+ '&total='+document.getElementById('total').value;
if (document.getElementById('random_usr').checked) data += '&random_usr=on';
if (document.getElementById('random_pw').checked) data += '&random_pw=on';
var clen = document.getElementById('begin_line').value.length>0 ? document.getElementById('begin_line').value.length+1 : 0;
clen += document.getElementById('random_usr').checked ? parseInt(document.getElementById('lng_usr').value)+1 : document.getElementById('user').value.length+document.getElementById('total').value.length+1;
clen += document.getElementById('random_pw').checked ? parseInt(document.getElementById('lng_pw').value) : document.getElementById('pass').value.length;
clen += document.getElementById('end_line').value.length>0 ? document.getElementById('end_line').value.length+1 : 0;
 
   document.getElementById('potto').disabled = 'disabled';
   document.getElementById('load_generator').style.visibility = "visible";
  
		$.ajax({
      type: "POST",
      url: link22,
      data: data,
      success: function(msg) {
       document.getElementById('load_generator').style.visibility = "hidden";
	   document.getElementById('potto').disabled = '';
        $('#multics').html(msg)
      
 
      }
     });
  
}