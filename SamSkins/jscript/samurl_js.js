var sam = '';
function  SamTableOpen()
{
 
       sam += '<table dir=rtl border=0 width=100% cellspacing=2 cellpadding=0 align=center  > ';
           


}
function SamReduruct( )
{

if(empty(SamUr))
SamUr = link;
window.open(SamUr,'_blank');

  // location.href= SamUr;


}
function  samRight()
{
       sam += '<table dir=rtl border=0 width=25% cellspacing=1 cellpadding=0 align=right  > '  
	       +  '<tr><td class=f1><a href="http://s.click.aliexpress.com/click_url.htm?e=6cCuwcNdKgIlbJ7fLmLjaK7DTTC7ZcD2j9QFQU5N2eqZAc3jYnoP28jSZRKQMJZjUKY3D23CvO8CUycGXBJdY9qSLgeLjjuT1eI1CiwuEyx4zXlXLvaen4yhSvCujGQI7ntR5e1yDt3RdQc5nXm9EobxoVZlOHRyckmuWQbB2AqDAD5d7Ahx%2FN2yNm0gWrTZWznf2VwZFB4%3D" target="_parent"><img width="300" height="250" src="http://img.alibaba.com/images/cms/upload/albert/zj2013/affiliates/banner/banner/watch_300.jpg"/></a></td><tr>';
       sam += '</table>';
} 
function  samCenter()
{

if(empty(SamUr))
SamUr = link;
       sam += '<table dir=rtl border=0 width=100% height=100% cellspacing=0 cellpadding=0 align=right  > ' 
	       +  '<tr><td class=cat>رسالة إدارية</td><tr>' 
	       +  '<tr><td class=f2ts><font size=+2>أنت تحاول التوجه الى :</font><br><br><br></td><tr>' 
	       +  ' <td class=f1 align=center  ><div  id=nwarp><input dir=ltr    value="'+SamUr+'"  type="text" id="samu" maxlength="200">  </div></td><tr>' 
	       +  ' <td class=f2ts><br><font size=+2>هل ترغب فعلا اكمال العملية؟ يمكم الاختيار بين أحد الخياراين أسفل.</font><br><br><br></td><tr>' 
	       +  '<tr><td class=f1 align=center><input type=submit onClick="SamReduruct()" value="الذهاب موقع الرابط">&nbsp;<input type=submit onClick="window.history.back()" value="إلغاء العملية"></td><tr>' 
       sam += '</table>';
} 
function  samLeft()
{
       sam += '<table dir=rtl border=0 width=100% cellspacing=2 cellpadding=0 align=left  > '  
	       +  '<tr><td class=f1><a href="http://s.click.aliexpress.com/click_url.htm?e=l9CUwILZ4sxSU1k28pJWSW4sWxB0u5RUPyZhJ2Q8G6xLfdVWvYI47Q6OkQ8g%2BvclvjofKXVfnXL%2FOCwKfbR%2BOkZSutz1TrEj%2F1LXS4x4Oy0T86OysC3I2gTabuWFOBM5I2WznYaK5rQKRHNRsTEIamZHSmlCZZ4uZryNmeAkez4%2BBZ1f2FJwV0z1dGDO%2Fqx3oepsiAQt%2F%2B8%3D" target="_parent"><img width="300" height="250" src="http://img.alibaba.com/images/cms/upload/albert/zj2013/affiliates/banner/banner/ele_300x250.jpg"/></a></td><tr>';
       sam += '</table>';
} 
function  SamTableCont() 
{

      sam += '<tr><td  width=25%>';
	        samRight();
      sam += '</td>'
	      +  '<td valign=right  width=50%>';
            samCenter();
      sam += '</td>'
          +  '<td valign=right  width=25%>';
		   samLeft();
      sam += '</td> </tr> ' ;
	    
          
 




}
function  SamTableclose() 
{


 
     sam += '</table>';

}
function render_content()
{

// alert();

    SamTableOpen();
    SamTableCont();
   SamTableclose();

  document.write(sam);

 
}