var oUtil = new ACEUtilities()

function ACEUtilities()
	{
	this.ACEObjects = "";
	this.oName;
	this.onloadFunction = "";
	}

function boxDrawDrop(width,content)
	{
	var sHTML = "" +
		"<style>" +
		"		body {border:lightgrey 0px solid;background: white;}" +
		"		td {font:8pt verdana,arial,sans-serif;font-weight:bold;}" +
		"		button {font:12pt verdana,arial,sans-serif;font-weight:bold;}" +
		"		.dropdown {cursor:hand}" +
		"</style>" +
		"<body topmargin=0 leftmargin=0 rightmargin=0 bottommargin=0 onselectstart=\"return event.srcElement.tagName=='INPUT'\" oncontextmenu='return false'>" +
		"		<table border=0 cellpadding=1 cellspacing=0 style='table-layout: fixed;border-right:#c3c3c3 1 solid;border-bottom:#c3c3c3 1 solid;border-left:#aeaeae 1 solid;border-top:#aeaeae 1 solid;' ID=tblPopup>" +
		"		<col width="+width+">" +
		"		<tr>" +
		"		<td>" +
		content +
		"		</td>" +
		"		</tr>" +
		"		</table>" +
		"<input type=text style='display:none;' id='inpActiveEditor' name='inpActiveEditor' contentEditable=true>" +
		"</body>";
	return sHTML
	}

function boxDrawPop(width,title,content)
	{
	var sHTML = "" +
	"<style>" +
	"		select{height: 22px; top:2;	font:8pt verdana,arial,sans-serif}" +
	"		body {border:lightgrey 0px solid;background: #ece9d8;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=white, endColorstr=#e3e3e3);}" +
	"		td {font:8pt verdana,arial,sans-serif;font-weight:bold;}" +
	"		button {font:12pt verdana,arial,sans-serif;font-weight:bold;}" +
	"		.dropdown {cursor:hand}" +
	"		.bar{	border-top: #99ccff 1px solid; background: #004684;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#004684, endColorstr=#7189b7); WIDTH: 100%; border-bottom: #004684 1px solid;height: 20px}" +
	"		div	{	font:10pt tahoma,arial,sans-serif}" +
	"</style>" +
	"<body onload='' topmargin=0 leftmargin=0 rightmargin=0 bottommargin=0 onselectstart=\"return event.srcElement.tagName=='INPUT'\" oncontextmenu='return false'>" +
	"<table dir="+dir+" border=0 cellpadding=0 cellspacing=0 style='table-layout: fixed' ID=tblPopup>" +
	"<col width="+width+"><col width=13>" +
	"<tr>" +
	"<td>" +
	"		<div class=bar style='padding-left: 5px;'>" +
	"		<font size=2 face=tahoma color=white><b>"+title+"</b></font>" +
	"		</div>" +
	"</td>" +
	"<td style='cursor:hand' onclick=\"eval('parent.'+inpActiveEditor.value).boxHide()\">" +
	"		<div class=bar>" +
	"		<font size=2 face=tahoma color=white><b>X</b></font>" +
	"		</div>" +
	"</td>" +
	"</tr>" +
	"<tr>" +
	"<td colspan=2 style='border-left: #336699 1px solid;border-right: #336699 1px solid;border-bottom: #336699 1px solid;' valign=top>" +
	"		<br>" +
	"		<div id=divPopup align=center>" + content +
	"		</div>" +
	"		<br>" +
	"</td>" +
	"</tr>" +
	"</table>" +
	"<input type=text style='display:none;' id='inpActiveEditor' name='inpActiveEditor' contentEditable=true>" +
	"</body>";
	return sHTML
	}

function saveSelection()
	{
	var oEditor = eval("idContent"+this.oName)
	this.Sel = oEditor.document.selection.createRange()
	this.SelType = oEditor.document.selection.type
	}

function boxDimension(boxName)
	{
	var tblPopup = document.frames(boxName).document.body.document.all("tblPopup")
	eval("document.all."+boxName).style.width = tblPopup.offsetWidth;
	eval("document.all."+boxName).style.height = tblPopup.offsetHeight
	}

function boxPosition(boxName)
	{
	var tblPopup = document.frames(boxName).document.body.document.all("tblPopup")
	var oArea = eval("idArea" + this.oName)

	myTop = 0; stmp = "";
	while(eval("idArea"+ this.oName + stmp).tagName!="BODY")
		{
		myTop += eval("idArea"+ this.oName + stmp).offsetTop;
		stmp += ".offsetParent";
		}

	myLeft = 0;	stmp = ""
	while(eval("idArea"+ this.oName + stmp).tagName!="BODY")
		{
		myLeft += eval("idArea"+ this.oName + stmp).offsetLeft;
		stmp += ".offsetParent";
		}

	if(oArea.offsetHeight-tblPopup.offsetHeight > 0)
		eval("document.all."+boxName).style.pixelTop=(myTop + (oArea.offsetHeight-tblPopup.offsetHeight)/2)
	else
		eval("document.all."+boxName).style.pixelTop=(myTop + (oArea.offsetHeight-tblPopup.offsetHeight)/2)

	if(oArea.offsetWidth-tblPopup.offsetWidth > 0)
		eval("document.all."+boxName).style.pixelLeft=(myLeft + (oArea.offsetWidth-tblPopup.offsetWidth)/2)
	else
		eval("document.all."+boxName).style.pixelLeft=myLeft
	}

function setPosition(idImg,boxName)//for dropdown
	{
	myTop = 0; stmp = "";
	while(eval("idImg" + stmp).tagName!="BODY")
		{stmp += ".offsetParent"; myTop += eval("idImg" + stmp).offsetTop;}
	myTop = myTop + 28

	myLeft = 0;	stmp = ""
	while(eval("idImg" + stmp).tagName!="BODY")
		{stmp += ".offsetParent"; myLeft += eval("idImg" + stmp).offsetLeft}
	myLeft = myLeft + 0

	eval("document.all."+boxName).style.pixelLeft = myLeft
	eval("document.all."+boxName).style.pixelTop = myTop
	}

function boxHide()
	{
	if(this.useStyle) eval("document.all.boxStyle"+this.oName).style.visibility = "hidden"//must be include all instance of boxStyle
	if(this.useForeColor) document.all.boxForecolor.style.visibility = "hidden"
	if(this.useBackColor) document.all.boxBackcolor.style.visibility = "hidden"
	if(this.useTable) document.all.boxTable2.style.visibility = "hidden"
	if(this.useLink) document.all.boxLink.style.visibility = "hidden"
	if(this.useSymbol) document.all.boxSymbol.style.visibility = "hidden"
	if(this.usePageProperties) document.all.boxPage.style.visibility = "hidden"
	}

function selOver(el)
	{
	el.style.background='#5579aa';
	el.style.color='white'
	el.style.border='#316AC5 1 solid'
	}
function selOut(el)
	{
	el.style.background='';
	el.style.color='black'
	el.style.border='0'
	}

function boxShow(boxName)
	{
	this.boxHide()
	this.saveSelection()

	eval(boxName).document.body.document.all.inpActiveEditor.innerText = this.oName

	this.boxDimension(boxName)
	this.boxPosition(boxName)
	eval("document.all."+boxName).style.zIndex = 2
	eval("document.all."+boxName).style.visibility = ""
	eval("document.all."+boxName).focus()//editor lost focus
	}

function applyForecolor(val)
	{
	eval("parent."+ boxForecolor.document.body.document.all.inpActiveEditor.value).doCmd2("ForeColor",val)
	}

function applyBackcolor(val)
	{
	eval("parent."+ boxBackcolor.document.body.document.all.inpActiveEditor.value).doCmd2("BackColor",val)
	}

function boxShow_Page()
	{
	this.boxHide()
	this.saveSelection()
	boxPage.document.body.document.all.inpActiveEditor.innerText = this.oName;

	//Addition
	var sTmp="";
	if(this.getPageProperties("marginLeft")==""){sTmp=""}
	else
		{
		sTmp = this.getPageProperties("marginLeft")
		sTmp = sTmp.substr(0,sTmp.length-2)//remove last px
		}
	boxPage.document.body.document.all.inpPageLeft.innerText = sTmp
	if(this.getPageProperties("marginRight")==""){sTmp=""}
	else
		{
		sTmp = this.getPageProperties("marginRight")
		sTmp = sTmp.substr(0,sTmp.length-2)
		}
	boxPage.document.body.document.all.inpPageRight.innerText = sTmp
	if(this.getPageProperties("marginTop")==""){sTmp=""}
	else
		{
		sTmp = this.getPageProperties("marginTop")
		sTmp = sTmp.substr(0,sTmp.length-2)
		}
	boxPage.document.body.document.all.inpPageTop.innerText = sTmp
	if(this.getPageProperties("marginBottom")==""){sTmp=""}
	else
		{
		sTmp = this.getPageProperties("marginBottom")
		sTmp = sTmp.substr(0,sTmp.length-2)
		}
	boxPage.document.body.document.all.inpPageBottom.innerText = sTmp

	//Special (transparent)
//	if(this.getPageProperties("backgroundColor")=="transparent")
//		boxPage.objColor1.setColor("")//col obj.
//	else
//		boxPage.objColor1.setColor(this.getPageProperties("backgroundColor"))//col obj.

	//alert(eval("idContent"+this.oName+".document.body.currentStyle.backgroundColor"))

	if(this.getPageProperties("backgroundImage")=="none"){sTmp=""}
	else
		{
		sTmp = this.getPageProperties("backgroundImage");
		sTmp=(sTmp.substr(5))//remove first col("
		sTmp = sTmp.substr(0,sTmp.length-2)//remove last ")
		}
//	boxPage.document.body.document.all.inpPageBgImg.innerText = sTmp

	boxPage.document.body.document.all.inpPageFont.value = this.getPageProperties("fontFamily")

	if(this.getPageProperties("fontSize")==""){sTmp=""}
	else
		{
		sTmp = this.getPageProperties("fontSize")
		sTmp = sTmp.substr(0,sTmp.length-2)
		}
	boxPage.document.body.document.all.inpPageSize.innerText = sTmp
	boxPage.document.body.document.all.inpPageAlign.value = this.getPageProperties("textAlign")

	boxPage.objColor2.setColor(this.getPageProperties("color"))//col obj.

	this.boxDimension("boxPage")
	this.boxPosition("boxPage")
	document.all.boxPage.style.zIndex = 2
	document.all.boxPage.style.visibility = ""
	document.all.boxPage.focus()
	}

function getPageProperties(style)
	{//original
	var oEditor = eval("idContent"+this.oName)
	var vRetVal = eval("idContent"+this.oName+".document.body.currentStyle."+style)
	if(vRetVal == "none transparent scroll repeat 0% 0%") vRetVal=""
	return vRetVal
	}

function getPageCSSText(IsCSSTextForBodyElement)
	{//margin=>padding
	if(this.getPageProperties("backgroundImage")=="none"){sTmp=""}
	else
		{
		//Change : background-image:url("include/bullet.gif")
		//To :     background-image:url('include/bullet.gif')
		sTmp = this.getPageProperties("backgroundImage");
		sTmp=(sTmp.substr(5))//remove first col("
		sTmp = sTmp.substr(0,sTmp.length-2)//remove last ")
		sTmp = "url('" + sTmp + "')"
		}

	//kalau target-nya div, maka : margin => padding
	sCssText = "BACKGROUND:"+this.getPageProperties("backgroundColor")+";" +
		"BACKGROUND-IMAGE:"+sTmp+";" +
		"PADDING-LEFT:"+this.getPageProperties("marginLeft")+";" +
		"PADDING-RIGHT:"+this.getPageProperties("marginRight")+";" +
		"PADDING-TOP:"+this.getPageProperties("marginTop")+";" +
		"PADDING-BOTTOM:"+this.getPageProperties("marginBottom")+";" +
		"FONT-FAMILY:"+this.getPageProperties("fontFamily")+";" +
		"FONT-SIZE:"+this.getPageProperties("fontSize")+";" +
		"TEXT-ALIGN:"+this.getPageProperties("textAlign")+";" +
		"COLOR:"+this.getPageProperties("color")+";"

	return sCssText;
	}
function setPageCSSText(sPageCSSText)
	{
	var arrTmp = sPageCSSText.split("PADDING");
	if (arrTmp.length > 1) sPageCSSText = arrTmp.join("MARGIN");
	eval("idContent"+this.oName).document.body.style.cssText += ";" + sPageCSSText;
	}

function boxShow_Link()
	{
	this.boxHide()
	this.saveSelection()
	eval("boxLink").document.body.document.all.inpActiveEditor.innerText = this.oName;

	//Additional
	var oSel	= this.Sel;
	var sType = this.SelType;

	if (oSel.parentElement)//If text is selected on a layer
		{
		this.SelTextFrame = GetElement(oSel.parentElement(),"DIV")//Store the active layer, so we can activate it after editing links
		if(this.SelTextFrame)this.SelTextFrameActive = true;
		else this.SelTextFrameActive = false;
		}
	else//If control is selected
		this.SelTextFrameActive = false;

	//idLinkImage & idLinkImageBorder
	if (oSel.parentElement)//If text is selected
		{
		oEl = GetElement(oSel.parentElement(),"A")//Get A element if any
		boxLink.document.body.document.all.idLinkImage.style.display = "none";//do not display Image features on the Link Dialog
		}
	else //If control is selected
		{
		oEl = GetElement(oSel.item(0),"A")//Get A element if any
		if ((oSel.item) && (oSel.item(0).tagName=="IMG")) //If an image
			{
			boxLink.document.body.document.all.idLinkImage.style.display = "block"; //display Image features on the Link Dialog
			boxLink.document.body.document.all.idLinkImageBorder.value = oSel.item(0).border; //get image border - dropdown
			}
		}

	//idLinkTarget & idLinkType & idLinkURL & idLinkName
	//Is there an A element ?
	if (oEl)//If Yes
		{
		boxLink.document.body.document.all.btnLinkInsert.style.display = "none"
		boxLink.document.body.document.all.btnLinkUpdate.style.display = "block"

		sURL = oEl.href //get image url
		boxLink.document.body.document.all.idLinkTarget.value = oEl.target;//get image target
		if(oEl.name!=null) boxLink.document.body.document.all.idLinkName.innerText = oEl.name;
		if(oEl.NAME!=null) boxLink.document.body.document.all.idLinkName.innerText = oEl.NAME;

		if(sURL.indexOf(":")!=-1)
			{
			switch(sURL.split(":")[0])
				{
				case "http":
					boxLink.document.body.document.all.idLinkType.value = "http://";
					boxLink.document.body.document.all.idLinkURL.innerText = sURL.substr(7);
					break;
				case "https":
					boxLink.document.body.document.all.idLinkType.value = "https://";
					boxLink.document.body.document.all.idLinkURL.innerText = sURL.substr(8);
					break;
				case "mailto":
					boxLink.document.body.document.all.idLinkType.value = "mailto:";
					boxLink.document.body.document.all.idLinkURL.innerText = sURL.split(":")[1];
					break;
				case "ftp":
					boxLink.document.body.document.all.idLinkType.value = "ftp://";
					boxLink.document.body.document.all.idLinkURL.innerText = sURL.substr(6);
					break;
				case "news":
					boxLink.document.body.document.all.idLinkType.value = "news:";
					boxLink.document.body.document.all.idLinkURL.innerText = sURL.split(":")[1];
					break;
				}
			}
		else
			{
			boxLink.document.body.document.all.idLinkType.value = "";
			boxLink.document.body.document.all.idLinkURL.innerText = sURL;
			}
		}
	else //If No A element
		{
		boxLink.document.body.document.all.btnLinkInsert.style.display = "block"
		boxLink.document.body.document.all.btnLinkUpdate.style.display = "none"

		boxLink.document.body.document.all.idLinkTarget.value = ""
		boxLink.document.body.document.all.idLinkName.innerText = "";
		boxLink.document.body.document.all.idLinkType.value = "http://"
		boxLink.document.body.document.all.idLinkURL.innerText = ""
		boxLink.document.body.document.all.idLinkImageBorder.value = 0
		}

	this.boxDimension("boxLink")
	this.boxPosition("boxLink")
	document.all.boxLink.style.zIndex = 2
	document.all.boxLink.style.visibility = ""
	document.all.boxLink.focus()
	}

function applyLink()
	{
	//Get URL typed by user
	var inpURL = boxLink.document.body.document.all.idLinkURL.value
	var inpURLType = boxLink.document.body.document.all.idLinkType.value
	var sURL = inpURLType + inpURL
	var inpAnchor = boxLink.document.body.document.all.idLinkName.value;

	if (sURL.toLowerCase().indexOf("http://http://") == 0)
		sURL = sURL.slice(7);

	//Use the previous active selection
	var oSel	= eval(boxLink.document.body.document.all.inpActiveEditor.value).Sel;
	var sType = eval(boxLink.document.body.document.all.inpActiveEditor.value).SelType;

	oSel = fixSel(boxLink.document.body.document.all.inpActiveEditor.value,oSel)//a must
	sType = fixSelType(boxLink.document.body.document.all.inpActiveEditor.value,oSel,sType)//a must

	//	idLinkImageBorder
	if ((oSel.item) && (oSel.item(0).tagName=="IMG")) //If image is selected
		{
		oSel.item(0).width = oSel.item(0).offsetWidth //kasih attribute width
		oSel.item(0).height = oSel.item(0).offsetHeight //kasih attribute height
		oSel.item(0).border = boxLink.document.body.document.all.idLinkImageBorder.value
		}

	if(inpURL!="")//If there is URL typed by user
		{
		if (oSel.parentElement)
			{
			if(boxLink.document.body.document.all.btnLinkInsert.style.display == "block")
				{
				if(oSel.text=="")//If no (text) selection, then build selection using the typed URL
					{
					var oSelTmp = oSel.duplicate()
					oSel.text = sURL	//displayed text = sURL
					oSel.setEndPoint("StartToStart",oSelTmp)
					oSel.select()
					sType="Text"
					}
				}
			}

		// idLinkType & idLinkURL (sURL)
		oSel.execCommand("CreateLink",false,sURL)

		//After A element created, then add the Target
		//oSel = document.selection.createRange()
		if (oSel.parentElement)
			{
			oEl = GetElement(oSel.parentElement(),"A")
			}
		else
			{
			oEl = GetElement(oSel.item(0),"A")
			}
		if(oEl)
			{
			if(boxLink.document.body.document.all.idLinkTarget.value=="")
				{
				oEl.removeAttribute("target",0)
				}
			else
				{
				oEl.target = boxLink.document.body.document.all.idLinkTarget.value;
				}
			oEl.removeAttribute("NAME",0)
			oEl.removeAttribute("name",0)
			oEl.NAME = boxLink.document.body.document.all.idLinkName.value;
			}
		eval("idContent"+boxLink.document.body.document.all.inpActiveEditor.value).focus();
		oSel.select()
		}
	else if(inpAnchor!="")
		{
		if (oSel.parentElement)
			{
			if(boxLink.document.body.document.all.btnLinkInsert.style.display == "block")
				{
				if(oSel.text=="")//If no (text) selection, then build selection using the typed URL
					{
					var oSelTmp = oSel.duplicate()
					oSel.text = inpAnchor	//displayed text = inpAnchor
					oSel.setEndPoint("StartToStart",oSelTmp)
					oSel.select()
					sType="Text"
					}
				}
			}

		oSel.execCommand("CreateLink",false,"")

		if (oSel.parentElement)
			oEl = GetElement(oSel.parentElement(),"A")
		else
			oEl = GetElement(oSel.item(0),"A")

		if(oEl)
			{
			oEl.removeAttribute("target",0)
			oEl.removeAttribute("href",0)

			oEl.removeAttribute("NAME",0)
			oEl.removeAttribute("name",0)
			oEl.NAME = inpAnchor;
			}
		eval("idContent"+boxLink.document.body.document.all.inpActiveEditor.value).focus();
		oSel.select()
		}
	else
		{
		//unlink
		oSel.execCommand("unlink")
		}

	//Activate layer again
	if(eval(boxLink.document.body.document.all.inpActiveEditor.value).SelTextFrameActive) eval(boxLink.document.body.document.all.inpActiveEditor.value).SelTextFrame.setActive();

	eval(boxLink.document.body.document.all.inpActiveEditor.value).boxHide()
	}

function boxShow_Image()
	{
	var oEditor = eval("idContent"+this.oName)
	oEditor.focus()//Why ?
	//Because:focus akan men-set oUtil.oNamem shg bisa dipakai di default_Asset.htm

	this.boxHide()
	this.saveSelection()
	if(this.ImagePageURL=="")return;
	var popleft=((document.body.clientWidth - this.ImagePageWidth) / 2)+window.screenLeft;
	var poptop=(((document.body.clientHeight - this.ImagePageHeight) / 2))+window.screenTop-40;
	window.open(this.ImagePageURL,"NewWindow","scrollbars=NO,width="+this.ImagePageWidth+",height="+this.ImagePageHeight+",left="+popleft+",top="+poptop)
	}

function imgSrc()
	{
	oEditor=eval("idContent"+this.oName)
	var oSel = oEditor.document.selection.createRange()
	if ((oSel.item) && (oSel.item(0).tagName=="IMG")) //If image is selected
		return oSel.item(0).src
	else
		return ""
	}
function imgAlt()
	{
	oEditor=eval("idContent"+this.oName)
	var oSel = oEditor.document.selection.createRange()
	if ((oSel.item) && (oSel.item(0).tagName=="IMG")) //If image is selected
		return oSel.item(0).alt
	else
		return ""
	}
function imgAlign()
	{
	oEditor=eval("idContent"+this.oName)
	var oSel = oEditor.document.selection.createRange()
	if ((oSel.item) && (oSel.item(0).tagName=="IMG")) //If image is selected
		return oSel.item(0).align
	else
		return ""
	}
function imgBorder()
	{
	oEditor=eval("idContent"+this.oName)
	var oSel = oEditor.document.selection.createRange()
	if ((oSel.item) && (oSel.item(0).tagName=="IMG")) //If image is selected
		return oSel.item(0).border
	else
		return ""
	}
function imgWidth()
	{
	oEditor=eval("idContent"+this.oName)
	var oSel = oEditor.document.selection.createRange()
	if ((oSel.item) && (oSel.item(0).tagName=="IMG")) //If image is selected
		return oSel.item(0).width
	else
		return ""
	}
function imgHeight()
	{
	oEditor=eval("idContent"+this.oName)
	var oSel = oEditor.document.selection.createRange()
	if ((oSel.item) && (oSel.item(0).tagName=="IMG")) //If image is selected
		return oSel.item(0).height
	else
		return ""
	}
function imgHspace()
	{
	oEditor=eval("idContent"+this.oName)
	var oSel = oEditor.document.selection.createRange()
	if ((oSel.item) && (oSel.item(0).tagName=="IMG")) //If image is selected
		return oSel.item(0).hspace
	else
		return ""
	}
function imgVspace()
	{
	oEditor=eval("idContent"+this.oName)
	var oSel = oEditor.document.selection.createRange()
	if ((oSel.item) && (oSel.item(0).tagName=="IMG")) //If image is selected
		return oSel.item(0).vspace
	else
		return ""
	}

function UpdateImage(inpImgURL,inpImgAlt,inpImgAlign,inpImgBorder,inpImgWidth,inpImgHeight,inpHSpace,inpVSpace)
	{
	var oEditor = eval("idContent"+this.oName)
	var oSel = oEditor.document.selection.createRange()
	var sType = oEditor.document.selection.type
	if ((oSel.item) && (oSel.item(0).tagName=="IMG"))
		{
		oSel.item(0).style.width="";
		oSel.item(0).style.height="";

		oSel.item(0).src = this.getEditorPreviewPath(inpImgURL)
		if(inpImgAlt!="")
			oSel.item(0).alt = inpImgAlt
		else
			oSel.item(0).removeAttribute("alt",0)
		oSel.item(0).align = inpImgAlign
		oSel.item(0).border = inpImgBorder
		if(inpImgWidth!="")
			oSel.item(0).width = inpImgWidth
		else
			oSel.item(0).removeAttribute("width",0)
		if(inpImgHeight!="")
			oSel.item(0).height = inpImgHeight
		else
			oSel.item(0).removeAttribute("height",0)
		if(inpHSpace!="")
			oSel.item(0).hspace = inpHSpace
		else
			oSel.item(0).removeAttribute("hspace",0)
		if(inpVSpace!="")
			oSel.item(0).vspace = inpVSpace
		else
			oSel.item(0).removeAttribute("vspace",0)
		}
	}

function InsertImage(inpImgURL,inpImgAlt,inpImgAlign,inpImgBorder,inpImgWidth,inpImgHeight,inpHSpace,inpVSpace)
	{
	if (inpImgURL.toLowerCase().indexOf("http://http://") == 0)
		inpImgURL = inpImgURL.slice(7);

	this.doCmd("InsertImage",this.getEditorPreviewPath(inpImgURL));
	var oEditor = eval("idContent"+this.oName)
	var oSel = oEditor.document.selection.createRange()
	var sType = oEditor.document.selection.type
	if ((oSel.item) && (oSel.item(0).tagName=="IMG"))
		{
		if(inpImgAlt!="")
			oSel.item(0).alt = inpImgAlt
		oSel.item(0).align = inpImgAlign
		oSel.item(0).border = inpImgBorder
		if(inpImgWidth!="")
			oSel.item(0).width = inpImgWidth
		if(inpImgHeight!="")
			oSel.item(0).height = inpImgHeight
		if(inpHSpace!="")
			oSel.item(0).hspace = inpHSpace
		if(inpVSpace!="")
			oSel.item(0).vspace = inpVSpace
		}
	}


function boxShow_Asset()
	{
	var oEditor = eval("idContent"+this.oName)
	oEditor.focus()//Why ?
	//Because:focus akan men-set oUtil.oNamem shg bisa dipakai di default_Asset.htm

	this.boxHide()
	this.saveSelection()
	if(this.AssetPageURL=="")return;
	var popleft=((document.body.clientWidth - this.AssetPageWidth) / 2)+window.screenLeft;
	var poptop=(((document.body.clientHeight - this.AssetPageHeight) / 2))+window.screenTop-40;
	window.open(this.AssetPageURL,"NewWindow","scrollbars=NO,width="+this.AssetPageWidth+",height="+this.AssetPageHeight+",left="+popleft+",top="+poptop)
	}

function InsertAsset_Hyperlink(inpURL,inpLinkText)
	{
	var oEditor = eval("idContent"+this.oName)
	var oSel = oEditor.document.selection.createRange()
	var sType = oEditor.document.selection.type

	if(inpURL!="")
		{
		if (oSel.parentElement)//text selection
			{
			if(oSel.text!="")
				{
				//noop
				}
			else
				{
				var oSelTmp = oSel.duplicate()
				if(inpLinkText=="") inpLinkText = inpURL
				oSel.text = inpLinkText	//displayed text
				oSel.setEndPoint("StartToStart",oSelTmp)
				oSel.select()
				sType="Text"
				}
			}

		oSel.execCommand("CreateLink",false,this.getEditorPreviewPath(inpURL))

		oEditor.focus()
		oSel.select()
		}
	}


function InsertAsset_Flash(inpURL, inpFlashWidth, inpFlashHeight)
	{
	inpURL = this.getEditorPreviewPath(inpURL)

	var sHTML = ""
	sHTML += "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0' VIEWASTEXT  width='"+inpFlashWidth+"' height='"+inpFlashHeight+"'>"
	sHTML += "<param name=movie value='"+inpURL+"'><param name=quality value=high>"
	sHTML += "<embed src='"+inpURL+"' quality=high pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash' type='application/x-shockwave-flash' width='"+inpFlashWidth+"' height='"+inpFlashHeight+"'>"
	sHTML += "</embed>"
	sHTML += "</object>"

	var oEditor = eval("idContent"+this.oName)
	oEditor.focus()

	var oSel = oEditor.document.selection.createRange()
	//oSel = fixSel(inpActiveEditor.value,oSel)//a must => tdk perlu => sama dgn kasus InsertAsset_Hyperlink

	if(oSel.parentElement)
		oSel.pasteHTML(sHTML)
	else
		oSel.item(0).outerHTML = sHTML
	}
function InsertAsset_Video(inpURL)
	{
	inpURL = this.getEditorPreviewPath(inpURL)

	var sHTML = "<embed src='"+inpURL+"' hidden=false autostart='true' type='video/avi' loop='true'></embed>"

	var oEditor = eval("idContent"+this.oName)
	oEditor.focus()

	var oSel = oEditor.document.selection.createRange()
	//oSel = fixSel(inpActiveEditor.value,oSel)//a must => tdk perlu => sama dgn kasus InsertAsset_Hyperlink

	if(oSel.parentElement)
		oSel.pasteHTML(sHTML)
	else
		oSel.item(0).outerHTML = sHTML
	}
function InsertAsset_Image(inpURL)
	{
	inpURL = this.getEditorPreviewPath(inpURL)

	var sHTML = "<img src='"+inpURL+"'>"

	var oEditor = eval("idContent"+this.oName)
	oEditor.focus()

	var oSel = oEditor.document.selection.createRange()
	//oSel = fixSel(inpActiveEditor.value,oSel)//a must => tdk perlu => sama dgn kasus InsertAsset_Hyperlink

	if(oSel.parentElement)
		oSel.pasteHTML(sHTML)
	else
		oSel.item(0).outerHTML = sHTML
	}
function InsertAsset_Sound(inpURL)
	{
	inpURL = this.getEditorPreviewPath(inpURL)

	var sHTML = "<embed src='"+inpURL+"' hidden=false autostart='true' type='audio/wav' loop='true'></embed>"

	var oEditor = eval("idContent"+this.oName)
	oEditor.focus()

	var oSel = oEditor.document.selection.createRange()
	//oSel = fixSel(inpActiveEditor.value,oSel)//a must => tdk perlu => sama dgn kasus InsertAsset_Hyperlink

	if(oSel.parentElement)
		oSel.pasteHTML(sHTML)
	else
		oSel.item(0).outerHTML = sHTML
	}

function InsertAsset_RealAudio(inpURL)
	{
	inpURL = this.getEditorPreviewPath(inpURL)

	var sHTML =
		"<p align=center><table bgcolor=orange><tr><td align=center><b><font color=white>"+ed_filetype_audio+"</td></tr><tr><td><EMBED src=\""
		+ inpURL
		+ "\" controls=ControlPanel autostart=true width=300 height=30 ALT=\""+ed_filetype_audio+"\">"
		+ "</td></tr></table></p>";

	var oEditor = eval("idContent"+this.oName)
	oEditor.focus()

	var oSel = oEditor.document.selection.createRange()
	//oSel = fixSel(inpActiveEditor.value,oSel)//a must => tdk perlu => sama dgn kasus InsertAsset_Hyperlink

	if(oSel.parentElement)
		oSel.pasteHTML(sHTML)
	else
		oSel.item(0).outerHTML = sHTML
	}

function InsertCustomHTML(sHTML)
	{
	/*
	If there are hyperlinks => they must be in absolute url.
	The conversion from abs to relative then will be done
	within the editor (on GetContent).
	for flash insert : use InsertFlash
	*/
	var oEditor = eval("idContent"+this.oName)
	oEditor.focus()

	var oSel = oEditor.document.selection.createRange()
	//oSel = fixSel(inpActiveEditor.value,oSel)//a must => tdk perlu => sama dgn kasus InsertAsset_Hyperlink

	if(oSel.parentElement)
		oSel.pasteHTML(sHTML)
	else
		oSel.item(0).outerHTML = sHTML
	}


function InsertFromOutside(id,sHTML)
	{
	var oEditor = eval("idContent"+id)
	oEditor.focus()

	var oSel = oEditor.document.selection.createRange()

	if(oSel.parentElement)
		oSel.pasteHTML(sHTML)
	else
		oSel.item(0).outerHTML = sHTML
	}

function boxShow_Table()
	{
	this.boxHide()
	this.saveSelection()
	boxTable2.document.body.document.all.inpActiveEditor.innerText = this.oName;

	//Additional
	var divBorderColorPick = boxTable2.document.body.document.all.divBorderColorPick
	var divBgColorPick = boxTable2.document.body.document.all.divBgColorPick
	var divBgColor2Pick = boxTable2.document.body.document.all.divBgColor2Pick
	var divBorderColor2Pick = boxTable2.document.body.document.all.divBorderColor2Pick
	var divCellBgColorPick = boxTable2.document.body.document.all.divCellBgColorPick

	//Init Values - For INSERT Tab [#]
	boxTable2.setInpValue("inpRows",2)
	boxTable2.setInpValue("inpCols",2)
	boxTable2.setInpValue("inpWidth","")
	boxTable2.setInpValue("inpHeight","")
	boxTable2.objColor1.setColor('')//col obj.
	boxTable2.setInpValue("inpBgImage","")
	boxTable2.setInpValue("inpBorder",1)
	boxTable2.objColor2.setColor('')
	boxTable2.document.body.document.all.inpTblAlign.value = "";//dropdown
	boxTable2.setInpValue("inpPadding",0)
	boxTable2.setInpValue("inpSpacing",0)

	var oSel	= this.Sel;
	var sType = this.SelType;

	var oBlock = (oSel.parentElement != null ? this.GetElement(oSel.parentElement(),"TABLE") : this.GetElement(oSel.item(0),"TABLE"))

	if (oBlock!=null) //If inside existing table
		{

		//Init Values - For EDIT Tab [##] => Get existing table properties
		boxTable2.document.body.document.all.inpTblAlign2.value = oBlock.align//dropdown
		var st = oBlock.width
		if(st.indexOf("%")!=-1)
			{
			boxTable2.setInpValue("inpWidth2",st.substring(0,st.indexOf("%")))//remove last %
			boxTable2.document.body.document.all.inpWidth2Me.value = "%";//dropdown
			}
		else
			{
			boxTable2.setInpValue("inpWidth2",oBlock.width)
			boxTable2.document.body.document.all.inpWidth2Me.value = "";//dropdown
			}
		var st2 = oBlock.height
		if(st2.indexOf("%")!=-1)
			{
			boxTable2.setInpValue("inpHeight2",st2.substring(0,st2.indexOf("%")))//remove last %
			boxTable2.document.body.document.all.inpHeight2Me.value = "%";//dropdown
			}
		else
			{
			boxTable2.setInpValue("inpHeight2",oBlock.height)
			boxTable2.document.body.document.all.inpHeight2Me.value = "";//dropdown
			}
		boxTable2.setInpValue("inpPadding2",oBlock.cellPadding)
		boxTable2.setInpValue("inpSpacing2",oBlock.cellSpacing)
		boxTable2.setInpValue("inpBorder2",oBlock.border)
		boxTable2.objColor4.setColor(oBlock.borderColor)//col obj.  (oBlock.borderColor).substring(1)
		boxTable2.setInpValue("inpBgImage2",oBlock.background)
		boxTable2.objColor3.setColor(oBlock.bgColor)

		if(oSel.parentElement != null)//yg dipilih text, bukan control(=table)
			{

			//Init Colors
		//	divCellBgColorPick.style.display = "none";

			//Init Tabs
			boxTable2.TabEditCell()

			//Init Values - For CELL Tab => Get existing cell properties
			var oTD = GetElement(oSel.parentElement(),"TD");

			if(oTD==null)return; //jika yg di select adl text tapi meliputi lebih dari satu cell

			var st3 = oTD.width //HTML : width
			if(st3.indexOf("%")!=-1)
				{
				boxTable2.setInpValue("inpCellWidth",st3.substring(0,st3.indexOf("%")))//remove last %
				boxTable2.document.body.document.all.inpCellWidthMe.value = "%";//dropdown
				}
			else
				{
				boxTable2.setInpValue("inpCellWidth",oTD.width)
				boxTable2.document.body.document.all.inpCellWidthMe.value = "";//dropdown
				}
			var st4 = oTD.height //HTML : height
			if(st4.indexOf("%")!=-1)
				{
				boxTable2.setInpValue("inpCellHeight",st4.substring(0,st4.indexOf("%")))//remove last %
				boxTable2.document.body.document.all.inpCellHeightMe.value = "%";//dropdown
				}
			else
				{
				boxTable2.setInpValue("inpCellHeight",oTD.height)
				boxTable2.document.body.document.all.inpCellHeightMe.value = "";//dropdown
				}

			boxTable2.document.body.document.all.inpCellAlign.value = oTD.align;//dropdown
			boxTable2.document.body.document.all.inpCellVAlign.value = oTD.vAlign;//dropdown

			boxTable2.setInpValue("inpCellBgImage",oTD.background)//HTML : background
			boxTable2.objColor5.setColor(oTD.bgColor)//HTML : bgColor
			boxTable2.document.body.document.all.inpCellWrap.checked = !oTD.noWrap;

			}
		else
			{
			//Init Colors
		//	divBgColor2Pick.style.display = "none";
		//	divBorderColor2Pick.style.display = "none";

			//Init Tabs
			boxTable2.TabEditTable()

			//Init Values - For EDIT Tab
			//Already done [##]
			}

		}
	else
		{

		//Init Colors
	//	divBorderColorPick.style.display = "none";
	//	divBgColorPick.style.display = "none";

		//Init Tabs
		boxTable2.TabInsertTable()

		//Init Values - For INSERT Tab
		//Already done [#]

		}

	this.boxDimension("boxTable2")
	this.boxPosition("boxTable2")

	document.all.boxTable2.style.zIndex = 2
	document.all.boxTable2.style.visibility = ""
	document.all.boxTable2.focus()
	}


function pasteFromWord()
	{
	this.boxHide()

	var oEditor = eval("idContent"+this.oName)
	var oEditorTmp = eval("idContentTmp"+this.oName)
	oEditor.focus()
	var oSel = oEditor.document.selection.createRange()

	if(oSel.parentElement)
		{
		oEditorTmp.focus()
		oEditorTmp.document.execCommand("SelectAll")
		oEditorTmp.document.execCommand("Paste")

		oSel.pasteHTML(this.cleanFromWord())
		}
	}
function cleanFromWord()
	{
	var oEditorTmp = eval("idContentTmp"+this.oName)
   for (var i = 0; i < oEditorTmp.document.body.all.length; i++)
		{
		oEditorTmp.document.body.all[i].removeAttribute("className","",0);
		oEditorTmp.document.body.all[i].removeAttribute("style","",0);
		}
	var sHTML = oEditorTmp.document.body.innerHTML;

	var str = sHTML

   var arrTmp = str.split('<?xml:namespace prefix = o ns = "urn:schemas-microsoft-com:office:office" />');
   if (arrTmp.length > 1) str = arrTmp.join("");

	var arrTmp = str.split("<o:p>");
   if (arrTmp.length > 1) str = arrTmp.join("");

   var arrTmp = str.split("</o:p>");
   if (arrTmp.length > 1) str = arrTmp.join("");

   var arrTmp = str.split("<o:p>&nbsp;</o:p>");
   if (arrTmp.length > 1) str = arrTmp.join("");

   return  str;
	}

function InsertText()
	{
	this.boxHide()

	var oEditor = eval("idContent"+this.oName)
	oEditor.focus()

	var oSel = oEditor.document.selection.createRange()
	oSel.pasteHTML("<div style='position:absolute;'>Enter text here</div>")
	if (oSel.parentElement)
		{
		oEl = oSel.parentElement()
		if(oEl)oEl.setActive()
		}
	}

function setDisplayMode()
	{
	this.boxHide()
	this.saveSelection()

	var oEditor = eval("idContent"+this.oName)

	if(this.displayMode=='RICH')
		{
		var sTmp = this.getContent(0);
		this.tmp = this.getPageCSSText()
		if(!this.isFullHTML)
			{
			sTmp=sTmp.substr(sTmp.indexOf("<BODY")+1)
			sTmp=sTmp.substr(sTmp.indexOf(">")+1)//">\r\n"
			var arrTmp = sTmp.split("</BODY>")
			sTmp = arrTmp[0]
			}
		oEditor.document.body.innerText = sTmp//this.getContent(0);

		var sContent = oEditor.document.body.innerHTML

		var arrTmp = sContent.split('&lt;LINK href="' + this.getEditorPreviewPath(this.PageStylePath_RelativeTo_EditorPath + this.PageStyle) + '" type=text/css rel=stylesheet&gt;')
		if (arrTmp.length > 1) sContent = arrTmp.join('<br><font color=green>&lt;link href="' + this.getEditorPreviewPath(this.PageStylePath_RelativeTo_EditorPath + this.PageStyle) + '" type=text/css rel=stylesheet&gt;</font>')

		var arrTmp = sContent.split('&lt;LINK href="' + this.getEditorPreviewPath(this.StyleSelectionPath_RelativeTo_EditorPath + this.StyleSelection) + '" type=text/css rel=stylesheet&gt;')
		if (arrTmp.length > 1) sContent = arrTmp.join('<br><font color=green>&lt;link href="' + this.getEditorPreviewPath(this.StyleSelectionPath_RelativeTo_EditorPath + this.StyleSelection) + '" type=text/css rel=stylesheet&gt;</font>')

		oEditor.document.body.innerHTML = sContent
		oEditor.document.body.clearAttributes;
		oEditor.document.body.style.direction = 'ltr';
		oEditor.document.body.style.fontFamily = 'Courier New';
		oEditor.document.body.style.fontSize = '13px';
		oEditor.document.body.style.color = 'black';
		oEditor.document.body.style.background = 'white';
		this.displayMode = 'HTML';
		eval("idToolbar"+this.oName).style.display = "none"
		}
	else
		{
		this.putContent(oEditor.document.body.innerText)

		if(!this.isFullHTML)
			this.setPageCSSText(this.tmp);

		oEditor.document.body.style.direction = 'rtl';

		//change status (displayMode)
		this.displayMode = 'RICH';
		eval("idToolbar"+this.oName).style.display = "block"

		document.body.focus()
		}

		updateTextCount(0);
	}

function GetElement(oElement,sMatchTag)
	{
	while (oElement!=null && oElement.tagName!=sMatchTag)
		{
		if(oElement.id=="idContent"+this.oName) return null;
		oElement = oElement.parentElement
		}
	return oElement
	}

function doOnKeyPress()
	{
	var oName = oUtil.oName
	var oEditor = eval("idContent"+oName)
	if(document.getElementById("chkBreakMode"+oName).checked)
		{
		if (oEditor.event.keyCode==13)
			{
			if (oEditor.event.shiftKey==false)
				{

				var oSel = oEditor.document.selection.createRange()
				oSel.pasteHTML('<br>')
				oEditor.event.cancelBubble = true;
				oEditor.event.returnValue = false;
				oSel.select();
				oSel.moveEnd("character", 1);
				oSel.moveStart("character", 1);
				oSel.collapse(false);
				return false;
				}
			else
				{
				return event.keyCode=13
				}
			}
		}
	}

function getContentBody()
	{
	var sTmp = this.getContent(0);
	if(!this.isFullHTML)
		{
		sTmp=sTmp.substr(sTmp.indexOf("<BODY")+1)
		sTmp=sTmp.substr(sTmp.indexOf(">")+1)//">\r\n"
		var arrTmp = sTmp.split("</BODY>")
		sTmp = arrTmp[0]
		}
	return sTmp//this.getContent(0);
	}

function getContent(mode)
	{
	if(this.displayMode != "RICH")
		{
		alert("الرجاء الخروج من عرض كود \r\n HTML")
		return;
		}

	var oEditor = eval("idContent"+this.oName)
	
	if (mode == 1)
		{
		return oEditor.document.documentElement.outerHTML.length;
		}
	
	var oEditorTmp = eval("idContentTmp"+this.oName)

	var oDoc = oEditorTmp.document.open("text/html", "replace")
	oDoc.write(oEditor.document.documentElement.outerHTML);
	oDoc.close();

	oEditorTmp.document.body.style.border = ""
	oEditorTmp.document.body.removeAttribute("contentEditable",0)

	var str = oEditorTmp.document.documentElement.outerHTML

	var arrTmp = str.split("<BASE href="+this.base+">");
	if (arrTmp.length > 1) str = arrTmp.join("");

	str = str.replace("<STYLE><\/STYLE>","")
	str = str.replace("BORDER-RIGHT: medium none; ","")
	str = str.replace("BORDER-TOP: medium none; ","")
	str = str.replace("BORDER-BOTTOM: medium none; ","")
	str = str.replace("BORDER-LEFT: medium none; ","")
	str = str.replace("BORDER-RIGHT: medium none","")
	str = str.replace("BORDER-TOP: medium none","")
	str = str.replace("BORDER-BOTTOM: medium none","")
	str = str.replace("BORDER-LEFT: medium none","")
	str = str.replace(" style=\"\"","")

	//Fix & Bug
	myregexp = /&amp;/g
	str = str.replace(myregexp,"&")
	return str;
	}


function putContent(sContent)
	{
	var oEditor = eval("idContent"+this.oName)
	var oEditorTmp = eval("idContentTmp"+this.oName)

	var oDoc = oEditorTmp.document.open("text/html", "replace")
	oDoc.write(sContent);
	oDoc.close();

	var oDoc = oEditor.document.open("text/html", "replace")
	if(this.base!="")
		oDoc.write("<BASE HREF=\""+this.base+"\"/>" + oEditorTmp.document.documentElement.outerHTML);
	else
		oDoc.write(oEditorTmp.document.documentElement.outerHTML);
	oDoc.close();

	//set Title to the "Page Properties" dialog
//	if(this.usePageProperties)
//		boxPage.document.all["inpTitle"].innerText = this.getTitle()

	if(this.PageStyle!="")
		{
		// Apply external css to the document, if there is no existing..
		sHREF = this.getEditorPreviewPath(this.PageStylePath_RelativeTo_EditorPath + this.PageStyle)
		var bPageStyleExist = false;
		for(var i=0;i<oEditor.document.styleSheets.length;i++)
			{
			if(oEditor.document.styleSheets(i).href==sHREF)
				{
				bPageStyleExist = true
				}
			}
		if(bPageStyleExist==false)
			{
			oElement = oEditor.document.createElement("<link rel='stylesheet' href='" + this.getEditorPreviewPath(this.PageStylePath_RelativeTo_EditorPath + this.PageStyle) + "' type='text/css'>")
			var oEl = oEditor.document.childNodes[0].childNodes[0].appendChild(oElement);
			}
		}

	if(this.useStyle)
		{
		// Apply external css for Style Selection, if there is no existing..
		sHREF = this.getEditorPreviewPath(this.StyleSelectionPath_RelativeTo_EditorPath + this.StyleSelection)
		var bStyleSelExist = false;
		for(var i=0;i<oEditor.document.styleSheets.length;i++)
			{
			if(oEditor.document.styleSheets(i).href==sHREF)
				{
				bStyleSelExist = true
				}
			}
		if(bStyleSelExist==false)
			{
			oElement = oEditor.document.createElement("<link rel='stylesheet' href='" + this.getEditorPreviewPath(this.StyleSelectionPath_RelativeTo_EditorPath + this.StyleSelection) + "' type='text/css'>")
			var oEl = oEditor.document.childNodes[0].childNodes[0].appendChild(oElement);
			}
		}

	oEditor.document.body.style.border = this.borderCssText
	oEditor.document.body.contentEditable = true
	oEditor.document.body.oncontextmenu = retFalse
	oEditor.document.body.style.direction = 'rtl';

	oEditor.document.execCommand("2D-Position", true, true);
	oEditor.document.execCommand("MultipleSelection", true, true);
	oEditor.document.execCommand("LiveResize", true, true)
	oEditor.document.onkeypress = doOnKeyPress;
	}

function getTitle()
	{
	var oEditor = eval("idContent"+this.oName)
	return oEditor.document.title
	}

function setTitle(sTitle)
	{
	var oEditor = eval("idContent"+this.oName)
	oEditor.document.title = sTitle
	}

function doCmd(sCmd,sOption)
	{
	this.boxHide()

	var oEditor = eval("idContent"+this.oName)
	var oSel = oEditor.document.selection.createRange()
	var sType = oEditor.document.selection.type

	var oName = this.oName//fail kalo pake oUtil.oName, krn ada delay..mesti tunggu

	oSel = fixSel(oName,oSel)//a must
	sType = fixSelType(oName,oSel,sType)//a must

	var oTarget = (sType == "None" ? oEditor.document : oSel)
	oTarget.execCommand(sCmd, false, sOption)

	}
function doCmd2(sCmd,sOption)//For BOX
	{
	this.boxHide()

	var oEditor = eval("idContent"+this.oName)
	var oSel	= this.Sel
	var sType = this.SelType

	var oName = this.oName

	oSel = fixSel(oName,oSel)//a must
	sType = fixSelType(oName,oSel,sType)//a must

	var oTarget = (sType == "None" ? oEditor.document : oSel)
	oSel.select()//tambahan
	oTarget.execCommand(sCmd, false, sOption)
	}

function doCmd3(name,sCmd,sOption)
	{
	var oEditor = eval("idContent"+name)
	oEditor.document.execCommand(sCmd, false, sOption)
	}

function fixSel(oName,oSel)//oName=string, oSel=object
	{
	var oEditor = eval("idContent"+oName)

	if(oSel.parentElement != null)
		{
		if(!IsInsideEditor(oSel.parentElement()))
			{
			oEditor.focus()
			var oSel = oEditor.document.selection.createRange()
			}
		}
	else
		{
		if(!IsInsideEditor(oSel.item(0)))
			{
			oEditor.focus()
			var oSel = oEditor.document.selection.createRange()
			}
		}
	return oSel
	}
function fixSelType(oName,oSel,sType)//oName=string, oSel=object
	{
	var oEditor = eval("idContent"+oName)
	if(oSel.parentElement != null)
		{
		if(!IsInsideEditor(oSel.parentElement()))
			{
			oEditor.focus()
			var sType = oEditor.document.selection.type
			}
		}
	else
		{
		if(!IsInsideEditor(oSel.item(0)))
			{
			oEditor.focus()
			var sType = oEditor.document.selection.type
			}
		}
	return sType
	}
function IsInsideEditor(oElement)
	{
	while (oElement!=null)
		{
		if(oElement.tagName=="BODY" && oElement.contentEditable=="true")return true;
		oElement = oElement.parentElement
		}
	return false
	}
function retFalse()
	{
	return false;
	}


function LoadStyleSelection()
	{
	//var oEditor = eval("idContent"+this.oName)
	//oElement = oEditor.document.createElement("<link rel='stylesheet' href='"+ this.StyleSelectionPath_RelativeTo_EditorPath + this.StyleSelection+"' type='text/css'>")
	//var oEl = oEditor.document.childNodes[0].childNodes[0].appendChild(oElement);

	//Path :
	sHTML = "<head><link rel='stylesheet' href='"+ this.StyleSelectionPath_RelativeTo_EditorPath + this.StyleSelection+"' type='text/css'>"
	sHTML += "</head><body onload='parent."+this.oName+".WriteStyleSelection()'></body>"
	eval("boxStyleTmp"+this.oName).document.open("text/html","replace")
	eval("boxStyleTmp"+this.oName).document.write(sHTML)
	eval("boxStyleTmp"+this.oName).document.close()
	}
function WriteStyleSelection()
	{//Path :
	sHTML = "<link rel='stylesheet' href='"+ this.StyleSelectionPath_RelativeTo_EditorPath + this.StyleSelection+"' type='text/css'>" +	boxDrawDrop(150,this.writeStyle())
	eval("boxStyle"+this.oName).document.open("text/html","replace")
	eval("boxStyle"+this.oName).document.write(sHTML)
	eval("boxStyle"+this.oName).document.close()
	}
function writeStyle()
	{
	var val;
	var sHTML = "";
	sHTML += "<table align=center border=0 width=100% height=100% cellpadding=0 cellspacing=0>"
	sHTML += "<tr><td height=3></td></tr>"
	var oEditor = eval("boxStyleTmp"+this.oName)
	for(var i=0;i<oEditor.document.styleSheets(0).rules.length;i++)
		{
		h=oEditor.document.styleSheets(0).rules.item(i).selectorText
		var selArr = h.split(".")
		var itemCount = selArr.length
		if(itemCount>1) {val = selArr[1]}
		else {val = h}
		sHTML += "<tr><td onclick=\"parent."+this.oName+".applyStyle('"+val+"');\"  align=center onmouseover='parent.selOver(this)' onmouseout='parent.selOut(this)' class=dropdown style='height:18'><span class=\""+val+"\">" + val + "</span></td></tr>";
		}
	sHTML += "<tr><td height=3></td></tr>"
	sHTML += "</table>"
	return sHTML
	}
function applyStyle(val)
	{
	//eval("idContent"+boxStyle.document.body.document.all.inpActiveEditor.value).focus();

	var oSel	= eval(eval("boxStyle"+this.oName).document.body.document.all.inpActiveEditor.value).Sel;
	var sType = eval(eval("boxStyle"+this.oName).document.body.document.all.inpActiveEditor.value).SelType;

	eval(eval("parent." + "boxStyle"+this.oName).document.body.document.all.inpActiveEditor.value+".doCmd2('fontname','')");

	if (oSel.parentElement)
			{
			oEl = GetElement(oSel.parentElement(),"FONT")
			if(oEl)oEl.className = val;
			}
	}



var countSmilies = 0;

function drawIconsBox(boxname,mode)
	{
	var iBox = eval(boxname)

	var iText = "";


	if (mode >= 0)
	{
	iText += "<table width=100% height=100% bgcolor=orange><tr><td valign=top align=center>";

	iText += "&nbsp;<select style=\"width:100%;font-size:16;font-weight:bold;background-color:red;color:white;\" "
		+ "size=1 onchange=\"parent.drawIconsBox('"+boxname+"',this.options[this.selectedIndex].value)\">&nbsp;";

	iText += "<option value=-1>"+ed_iconlib+":";

	var x;

	for (x = 0; x < smiliesTitles.length; x++)
		{
		if (mode == x)	iText += "<option selected value=" + x + ">" + smiliesTitles[x];
		else			iText += "<option value=" + x + ">" + smiliesTitles[x];
		}

	iText += "</select><br>";

	countSmilies = 0

	iText += "<center><table><tr>";

	if (mode >= 0)
		{
		for (x = 0; x < smiliesList.length -2; x += 2)
			{
			if (smiliesList[x] == mode)
				iText += drawSmilie(smiliesWidths[mode],smiliesPaths[mode] + smiliesList[x+1]);
			}
		}

	iText += "</tr></table></td></tr></table>";
	}
	else
	{
	var x;

	iText += "<table width=100% height=100% bgcolor=orange><tr><td valign=top align=center>"
	+ "<center><table>";

	iText += "<tr><td bgcolor=red align=center><b><font color=white>مكتبة الصور</td></tr>";

	for (x = 0; x < smiliesTitles.length; x++)
		{
		iText += "<tr><td align=center><b><font color=white><div "
			+ "onclick=\"parent.drawIconsBox('"+boxname+"',"+x+")\" "
			+ "onmouseover=\"this.style.backgroundColor='cc0000';\" "
			+ "onmouseout=\"this.style.backgroundColor='orange'\" "
			+ ">"
			+ smiliesTitles[x] + "<div></td></tr>";
		}

	iText += "</tr></table></td></tr></table>";
	}

	var oDoc = iBox.document.open("text/html", "replace")
	oDoc.write("<body dir="+dir+" bgcolor=red topmargin=0 leftmargin=0>");

	oDoc.write(iText);
	oDoc.close();

	}


function drawSmilie(cols,icon)
	{
	var s = "";
	var width = "";
	var height = "";

	if (countSmilies == cols)
		{
		countSmilies = 0;
		s += "</tr><tr>";
		}
	countSmilies++;

	width = "26";
	height = "26";

	if (icon.indexOf("smilies/") == 0)	icon = fileURL+"icon.php?s=" + icon.slice(8);
	else								icon = fileURL+"icon.php?s=" + icon;

	s += "<td align=center valign=top><img src='"+icon+"' border=0 "

	if (width.length > 0)
		s += "width="+width+" height="+height+ " ";

	s += "onmouseup=\"parent."+oName+".InsertImage('"+icon+"','','','','','',5,'');\""
		+ "onmouseover=\"this.style.backgroundColor='cc0000';\" "
		+ "onmouseout=\"this.style.backgroundColor='orange'\" "
		+ "></td>";

	return(s);
	}

function drawIcon(left,width,id,title,command,isToggle)
	{
	document.write("<span unselectable='on' id='span_"+id+"' style=\"margin-left:2;margin-right:0;margin-bottom:3;width: "+width+";height:26;\"><span unselectable='on' style=\"position:absolute;clip: rect(0 "+width+" 26 0)\">")
	document.write("<img unselectable='on' id='"+id+"' btntoggle='"+isToggle+"' title=\""+title+"\" src=\"skins/basic/code/include/icon01.gif\" style=\"position:absolute;left:-"+left+";\" onmousedown=\"button_down(this)\" onmouseup=\"button_up(this);"+command+"\" width=\"1127\" height=\"26\">")
	document.write("</span></span>")
	}

function fontSelector(name,width)
	{
	document.write("<span unselectable='on' style=\"margin-left:2;margin-right:0;margin-bottom:3;width: "+width+";height:26;\"><span dir="+dir+" unselectable='on' style=\"position:absolute;clip: rect(0 "+width+" 26 0)\">")

	document.write("<select style=\"width:"+width+";height:50;font-size:16;font-weight:bold;background:#f5f5f5;color:#000066;\" "
		+ "size=1 onchange='doCmd3(this.options[0].value,\"fontname\",this.options[this.selectedIndex].value);this.selectedIndex=0;'>");

	document.write("<option value='"+name+"'>&nbsp;"+ed_fontsel);

	for (x = 0; x < fontsList.length-2; x+= 3)
		{
		var f1, f3;
		f1 = fontsList[x];
		f3 = fontsList[x+2];
		if (f3.length == 0)	f3 = f1;
		document.write("<option value='"+f1+"'>&nbsp;&nbsp;&nbsp;"+f3);
		}

	document.write("</select></span></span>")
	}

function sizeSelector(name,width)
	{
	document.write("<span unselectable='on' style=\"margin-left:2;margin-right:0;margin-bottom:3;width:"+width+";height:26;\"><span dir="+dir+" unselectable='on' style=\"position:absolute;clip: rect(0 "+width+" 26 0)\">")

	document.write("<select style=\"width:"+width+";height:50;font-size:16;font-weight:bold;background:#f5f5f5;color:#000066;\" "
		+ "size=1 onchange='doCmd3(this.options[0].value,\"fontsize\",this.options[this.selectedIndex].value);this.selectedIndex=0;'>");

	document.write("<option value='"+name+"'>&nbsp;"+ed_fontsize);

	for (x = 1; x <= 7; x++)
		document.write("<option value="+x+">&nbsp;&nbsp;&nbsp;"+x);

	document.write("</select></span></span>")
	}

function button_down(eButton)
	{
	if(eButton.btntoggle == "true")
		{
		if(eButton.src.indexOf("icon01.gif")!=-1)
			{
			eButton.src = "skins/basic/code/include/icon02.gif"
			eButton.btnstatus = "true"
			}
		if(eButton.src.indexOf("icon03.gif")!=-1)
			{
			eButton.src = "skins/basic/code/include/icon02.gif"
			eButton.btnstatus = "false"
			}
		}
	else
		eButton.src = "skins/basic/code/include/icon02.gif"
	}
function button_up(eButton)
	{
	if(eButton.btntoggle)
		{
		if(eButton.btnstatus == "true")
			eButton.src = "skins/basic/code/include/icon03.gif"
		else
			eButton.src = "skins/basic/code/include/icon01.gif"
		}
	else
		eButton.src = "skins/basic/code/include/icon01.gif"
	}


function RUN()
	{
	oName = this.oName;
	if(this.base=="") this.base = this.baseEditor;

	document.write("<IMG SRC='skins/basic/code/include/icon01.gif' width=1 height=1 style='display:none'>")
	document.write("<IMG SRC='skins/basic/code/include/icon02.gif' width=1 height=1 style='display:none'>")

	document.write("<table name='idMain"+oName+"' id='idMain"+oName+"' cellpadding=0 cellspacing=0 border=0 width=100% height='"+this.height+"'><tr><td>");

	if (this.headerArea.length > 0)
		document.write(this.headerArea + "</td></tr><tr><td>")

	document.write("<table style='display:none' name='idToolbar"+oName+"' id='idToolbar"+oName+"' cellpadding=0 cellspacing=0 border=0 width='"+this.width+"' valign=bottom style=\""+this.toolbarCssText+"\">");
	document.write("<tr><td height=4></td></tr><tr><td>")
	document.write("<span style='margin-left:2'")
	if(this.useStyle)	drawIcon(0,58,"btnStyle"+oName,ed_tip_style,oName+".boxShow('boxStyle"+oName+"');setPosition(this,'boxStyle"+oName+"')",false)
	if(this.useFontName) fontSelector(oName,100);
	if(this.useSize) sizeSelector(oName,60);
	if(this.useText) drawIcon(263,27,"btnText"+oName,ed_tip_text,oName+".InsertText()",false)
	if(this.useCut) drawIcon(290,27,"btnCut"+oName,ed_tip_cut,oName+".doCmd('Cut')",false)
	if(this.useCopy) drawIcon(317,27,"btnCopy"+oName,ed_tip_copy,oName+".doCmd('Copy')",false)
	if(this.usePaste) drawIcon(344,27,"btnPaste"+oName,ed_tip_paste,oName+".doCmd('Paste')",false)
	if(this.useUndo) drawIcon(371,27,"btnUndo"+oName,ed_tip_undo,oName+".doCmd('Undo')",false)
	if(this.useRedo) drawIcon(398,27,"btnRedo"+oName,ed_tip_redo,oName+".doCmd('Redo')",false)
	if(this.useBold) drawIcon(425,27,"btnBold"+oName,ed_tip_bold,oName+".doCmd('Bold')",false)
	if(this.useItalic) drawIcon(452,27,"btnItalic"+oName,ed_tip_italic,oName+".doCmd('Italic')",false)
	if(this.useUnderline) drawIcon(479,27,"btnUnderline"+oName,ed_tip_underline,oName+".doCmd('Underline')",false)
	if(this.useStrikethrough) drawIcon(506,27,"btnStrikethrough"+oName,ed_tip_strike,oName+".doCmd('Strikethrough')",false)
	if(this.useSuperscript) drawIcon(533,27,"btnSuperscript"+oName,ed_tip_superscr,oName+".doCmd('Superscript')",false)
	if(this.useSubscript) drawIcon(560,27,"btnSubscript"+oName,ed_tip_subscr,oName+".doCmd('Subscript')",false)
	if(this.useSymbol) drawIcon(587,27,"btnSymbol"+oName,ed_tip_symbol,oName+".boxShow('boxSymbol')",false)
	if(this.useJustifyLeft) drawIcon(614,27,"btnJustifyLeft"+oName,ed_tip_left,oName+".doCmd('JustifyLeft')",false)
	if(this.useJustifyCenter) drawIcon(641,27,"btnJustifyCenter"+oName,ed_tip_center,oName+".doCmd('JustifyCenter')",false)
	if(this.useJustifyRight) drawIcon(668,27,"btnJustifyRight"+oName,ed_tip_right,oName+".doCmd('JustifyRight')",false)
	if(this.useJustifyFull) drawIcon(695,27,"btnJustifyFull"+oName,ed_tip_full,oName+".doCmd('JustifyFull')",false)
	if(this.useNumbering) drawIcon(722,27,"btnNumbering"+oName,ed_tip_numlist,oName+".doCmd('InsertOrderedList')",false)
	if(this.useBullets) drawIcon(749,27,"btnBullets"+oName,ed_tip_list,oName+".doCmd('InsertUnorderedList')",false)
	if(this.useIndent) drawIcon(776,27,"btnIndent"+oName,ed_tip_indent,oName+".doCmd('Outdent')",false)
	if(this.useOutdent) drawIcon(803,27,"btnOutdent"+oName,ed_tip_outdent,oName+".doCmd('Indent')",false)
	if(this.useImage) drawIcon(830,27,"btnImage"+oName,ed_tip_image,oName+".boxShow_Image()",false)
	if(this.useForeColor) drawIcon(857,27,"btnForeColor"+oName,ed_tip_color,oName+".boxShow('boxForecolor')",false)
	if(this.useBackColor) drawIcon(884,27,"btnBackColor"+oName,ed_tip_bgcolor,oName+".boxShow('boxBackcolor')",false)
	if(this.useLink) drawIcon(911,27,"btnLink"+oName,ed_tip_link,oName+".boxShow_Link()",false)
	if(this.useTable) drawIcon(938,27,"btnTable"+oName,ed_tip_table,oName+".boxShow_Table()",false)
	if(this.useAbsolute) drawIcon(965,27,"btnAbsolute"+oName,ed_tip_absolute,oName+".doCmd('AbsolutePosition')",false)//IE5.5 or later
	if(this.useClean) drawIcon(992,27,"btnClean"+oName,ed_tip_removeformat,oName+".doCmd('RemoveFormat')",false)
	if(this.useAsset) drawIcon(1019,27,"btnAsset"+oName,ed_tip_asset,oName+".boxShow_Asset()",false)
	if(this.useLine) drawIcon(1046,27,"btnLine"+oName,ed_tip_horzrule,oName+".doCmd('InsertHorizontalRule')",false)
	if(this.usePageProperties) drawIcon(1073,27,"btnPageProperties"+oName,ed_tip_page,oName+".boxShow_Page()",false)
	if(this.useWord) drawIcon(1100,27,"btnWord"+oName,ed_tip_word,oName+".pasteFromWord()",false)
	document.write("</span>")
	document.write("</td></tr></table>")

	document.write("</td></tr><tr><td height='100%'>")
	document.write("<table name='idArea"+oName+"' id='idArea"+oName+"' width='"+this.width+"' height='100%' cellpadding=0 cellspacing=0>");
	document.write("<tr><td>")

	document.write("<table cellspacing=0 cellpadding=0 border=0 width=100% height=100%><tr>");

	document.write("<td valign=top>");
	document.write("<iframe scrolling=yes width=122 height=100% name='idIconLibrary"+oName+"' id='idIconLibrary"+oName+"'></iframe>")
	document.write("</td><td height='100%' width=100%>");
	document.write("<iframe style=\"height:'1';width:'1';\" name='idContent"+oName+"' contentEditable=true id='idContent"+oName+"' noborder onfocus=\""+oName+".boxHide();oUtil.oName='"+oName+"'\"></iframe>");
	document.write("</td><td valign=top bgcolor=orange>")
	document.write("</td></tr></table>")
	document.write("</td></tr>")
	document.write("<tr height=22><td width=100% valign=top nowrap>");
	document.write("<table dir="+dir+" name='idFooter"+oName+"' id='idFooter"+oName+"' style=\""+this.toolbarCssText+"\" cellspacing=0 cellpadding=3 border=0 width=100%><tr><td><nobr>")

	if (editMode == "message")
	{
	if (reply_to.length > 0)
		{
		document.write("<div name='idReview1Button"+oName+"' id='idReview1Button"+oName+"' style='display:block;'>");
		document.write("<img width=15 height=15 src="+fileURL+"icon.php?m=go_up alt=\""+ed_show_msg_preview+"\" border=0 onclick='idReview1Button"+oName+".style.display=\"none\";idReview2Button"+oName+".style.display=\"block\";idReview"+oName+".style.display=\"block\";fillReviewFrame(\"idReviewFrame"+oName+"\",\"index.php?mail=msg&msg="+reply_to+"&review=true&pane="+oName+"\");'></div>");
		document.write("<div name='idReview2Button"+oName+"' id='idReview2Button"+oName+"' style='display:none;'>");
		document.write("<img width=15 height=15 src="+fileURL+"icon.php?m=go_down alt=\""+ed_hide_mail_preview+"\" border=0 onclick='idReview1Button"+oName+".style.display=\"block\";idReview2Button"+oName+".style.display=\"none\";idReview"+oName+".style.display=\"none\";'></div>");
		document.write("</div></td><td><nobr>");
		}
	else
		{
		document.write("<div name='idReview1Button"+oName+"' id='idReview1Button"+oName+"' style='display:block;'>");
		document.write("<img width=15 height=15 src="+fileURL+"icon.php?m=go_up alt=\""+ed_show_mail_preview+"\" border=0 onclick='idReview1Button"+oName+".style.display=\"none\";idReview2Button"+oName+".style.display=\"block\";idReview"+oName+".style.display=\"block\";fillReviewFrame(\"idReviewFrame"+oName+"\",\"index.php?mail=in&review=true&pane="+oName+"\");'></div>");
		document.write("<div name='idReview2Button"+oName+"' id='idReview2Button"+oName+"' style='display:none;'>");
		document.write("<img width=15 height=15 src="+fileURL+"icon.php?m=go_down alt=\""+ed_hide_mail_preview+"\" border=0 onclick='idReview1Button"+oName+".style.display=\"block\";idReview2Button"+oName+".style.display=\"none\";idReview"+oName+".style.display=\"none\";'></div>");
		document.write("</div></td><td><nobr>");
		}
	}
	else if (editMode != "signature")
	{
	if (topicID > 0)
		{
		document.write("<div name='idReview1Button"+oName+"' id='idReview1Button"+oName+"' style='display:block;'>");
		document.write("<img width=15 height=15 src="+fileURL+"icon.php?m=go_up alt=\""+ed_show_topic_preview+"\" border=0 onclick='idReview1Button"+oName+".style.display=\"none\";idReview2Button"+oName+".style.display=\"block\";idReview"+oName+".style.display=\"block\";fillReviewFrame(\"idReviewFrame"+oName+"\",\"index.php?review=true&t="+topicID+"&pane="+oName+"\");'></div>");
		document.write("<div name='idReview2Button"+oName+"' id='idReview2Button"+oName+"' style='display:none;'>");
		document.write("<img width=15 height=15 src="+fileURL+"icon.php?m=go_down alt=\""+ed_hide_topic_preview+"\" border=0 onclick='idReview1Button"+oName+".style.display=\"block\";idReview2Button"+oName+".style.display=\"none\";idReview"+oName+".style.display=\"none\";'></div>");
		document.write("</div></td><td><nobr>");
		}
	else
		{
		document.write("<div name='idReview1Button"+oName+"' id='idReview1Button"+oName+"' style='display:block;'>");
		document.write("<img width=15 height=15 src="+fileURL+"icon.php?m=go_up alt=\""+ed_show_forum_preview+"\" border=0 onclick='idReview1Button"+oName+".style.display=\"none\";idReview2Button"+oName+".style.display=\"block\";idReview"+oName+".style.display=\"block\";fillReviewFrame(\"idReviewFrame"+oName+"\",\"index.php?review=true&f="+forum_id+"&pane="+oName+"\");'></div>");
		document.write("<div name='idReview2Button"+oName+"' id='idReview2Button"+oName+"' style='display:none;'>");
		document.write("<img width=15 height=15 src="+fileURL+"icon.php?m=go_down alt=\""+ed_hide_forum_preview+"\" border=0 onclick='idReview1Button"+oName+".style.display=\"block\";idReview2Button"+oName+".style.display=\"none\";idReview"+oName+".style.display=\"none\";'></div>");
		document.write("</div></td><td><nobr>");
		}
	}

	if (allowHTML)
		document.write("&nbsp;&nbsp;<input class=option_transparent type=checkbox onclick='"+oName+".setDisplayMode()' id=chkDisplayMode name=chkDisplayMode><font face=verdana size=1> HTML &nbsp;</font>")

	document.write("<input class=option_transparent type=checkbox id=chkBreakMode"+oName+" name=chkBreakMode"+oName+"><font color=gray><B>"+ed_newline+"&nbsp;&nbsp;&nbsp;")

	document.write("</td><td><input type=button style='width:100px;font-size:10px;text-align:center;' onclick=\"showTextCount()\" ID=status value=''>");

	document.write("</td><td width=100% align=left>");
	document.write("<INPUT type='button' value='"+ed_button_enter+"' onclick='SubmitForm()' ID='Button1' NAME='Button1'>&nbsp;&nbsp;");
	document.write("<INPUT type='button' value='"+ed_button_restore+"' onclick='ResetContents()' ID='Button2' NAME='Button2'>&nbsp;&nbsp;");
	document.write("<INPUT type='button' value='"+ed_button_cancel+"' onclick='goToSimple(\""+editCaller+"\")' ID='Button3' NAME='Button3'>");


	document.write("</td></tr></table></td></tr></table>");

	if (editMode == "message")
	{
	document.write("</td></tr><tr><td><div name='idReview"+oName+"' id='idReview"+oName+"' style='display:none;'>"
		+ "<iframe name='idReviewFrame"+oName+"' id='idReviewFrame"+oName+"' width=100% height=200 noborder></iframe></div>");
	}
	else if (editMode != "signature")
	{
	if (topicID > 0)
		document.write("</td></tr><tr><td><div name='idReview"+oName+"' id='idReview"+oName+"' style='display:none;'>"
			+ "<iframe name='idReviewFrame"+oName+"' id='idReviewFrame"+oName+"' width=100% height=200 noborder></iframe></div>");
	else
		document.write("</td></tr><tr><td><div name='idReview"+oName+"' id='idReview"+oName+"' style='display:none;'>"
			+ "<iframe name='idReviewFrame"+oName+"' id='idReviewFrame"+oName+"' width=100% height=200 noborder></iframe></div>");
	}

	document.write("</td></tr></table>")

	drawIconsBox("idIconLibrary"+oName,-1);

	var oEditor = eval("idContent"+oName)
	IEver=0
	if (navigator.appVersion.indexOf("MSIE")!=-1) IEver=parseFloat(navigator.appVersion.split("MSIE")[1])
	if (IEver<5.5) oEditor.document.designMode = "on"//spy jln di IE50 tapi gak bisa insert object

	var oDoc = oEditor.document.open("text/html", "replace")
	if(this.base!="")
		oDoc.write("<BASE HREF=\""+this.base+"\"/>"+this.prebuiltHTML);
	else
		oDoc.write(this.prebuiltHTML);
	oDoc.close();

	if(this.PageStyle!="")
		{
		// apply external css to the document
		oElement = oEditor.document.createElement("<link rel='stylesheet' href='" + this.getEditorPreviewPath(this.PageStylePath_RelativeTo_EditorPath + this.PageStyle) + "' type='text/css'>")
		var oEl = oEditor.document.childNodes[0].childNodes[0].appendChild(oElement);
		}

	if(this.useStyle)//boxStyle
		{
		// Apply external css for Style Selection to the document
		oElement = oEditor.document.createElement("<link rel='stylesheet' href='" + this.getEditorPreviewPath(this.StyleSelectionPath_RelativeTo_EditorPath + this.StyleSelection) + "' type='text/css'>")
		var oEl = oEditor.document.childNodes[0].childNodes[0].appendChild(oElement);

		// Draw style selection
		document.write("<iframe id=boxStyle"+oName+" name=boxStyle"+oName+" style='position: absolute; visibility: hidden;z-index: -1;'></iframe>")
		document.write("<iframe id=boxStyleTmp"+oName+" name=boxStyleTmp"+oName+" style='position: absolute; visibility: hidden;z-index: -1;'></iframe>")
		this.LoadStyleSelection()//(HARUS JALAN DI IE5.0)
		}

	oEditor.document.body.style.border = this.borderCssText
	oEditor.document.body.contentEditable = true
	oEditor.document.body.oncontextmenu = retFalse

	oEditor.document.execCommand("2D-Position", true, true);
	oEditor.document.execCommand("MultipleSelection", true, true);
	oEditor.document.execCommand("LiveResize", true, true)
	oEditor.document.onkeypress = doOnKeyPress;

	//ENABLE/SHOW EDITOR
	eval("document.all.idContent"+this.oName).style.width = "100%"
	eval("document.all.idContent"+this.oName).style.height = "100%"
	eval("document.all.idToolbar"+this.oName).style.display="block"


	document.write("<iframe name='idContentTmp"+oName+"' contentEditable=true id='idContentTmp"+oName+"' style='height:1px;width:1px;overflow:auto;' noborder onfocus='"+oName+".boxHide()'></iframe>");
	var oEditor2 = eval("idContentTmp"+oName)
	oEditor2.document.designMode = "on"
	oEditor2.document.open("text/html","replace")
	oEditor2.document.write("<html><head></head><body><div></div></body></html>")
	oEditor2.document.close()


	if(this.useForeColor && !document.getElementById("boxForecolor"))//boxForecolor
		{
		var objColor1 = new YusASPColor("objColor1")
		sHTML = objColor1.drawColor +
			"<table border=0 width=365 align=center cellpadding=0 cellspacing=0>" +
			"<tr>" +
			"<td align=left width=50%><INPUT type='button' onclick=\"parent.applyForecolor(parent.boxForecolor.document.body.document.all."+objColor1.getElementColorText+".value)\" value='&nbsp;&nbsp;"+ed_button_select+"&nbsp;&nbsp;'></td>" +
			"<td width=50%><INPUT type='button' onclick=\"eval('parent.'+inpActiveEditor.value).boxHide()\"  value='"+ed_button_cancel+"'></td>" +
			"</tr></table>"
		sHTML = boxDrawPop(390,ed_color_title,sHTML)
		document.write("<iframe id=boxForecolor name=boxForecolor style='position: absolute; visibility: hidden; z-index: -1;'></iframe>")
		boxForecolor.document.open("text/html","replace")
		boxForecolor.document.write(sHTML)
		boxForecolor.document.close()
		}

	if(this.useBackColor && !document.getElementById("boxBackcolor"))//boxBackcolor
		{
		var objColor2 = new YusASPColor("objColor2")
		sHTML = objColor2.drawColor +
			"<table border=0 width=365 align=center cellpadding=0 cellspacing=0>" +
			"<tr>" +
			"<td align=left width=50%><INPUT type='button' onclick=\"parent.applyBackcolor(parent.boxBackcolor.document.body.document.all."+objColor2.getElementColorText+".value)\" value='&nbsp;&nbsp;"+ed_button_select+"&nbsp;&nbsp;'></td>" +
			"<td width=50%><INPUT type='button' onclick=\"eval('parent.'+inpActiveEditor.value).boxHide()\"  value='"+ed_button_cancel+"'></td>" +
			"</tr></table>"
		sHTML = boxDrawPop(390,ed_bgcolor_title,sHTML)
		document.write("<iframe id=boxBackcolor name=boxBackcolor style='position: absolute; visibility: hidden; z-index: -1;'></iframe>")
		boxBackcolor.document.open("text/html","replace")
		boxBackcolor.document.write(sHTML)
		boxBackcolor.document.close()
		}

	if(this.useLink && !document.getElementById("boxLink"))//boxLink
		{
		sHTML = "<table cellpadding=0 cellspacing=3 align=center>" +
			"<tr>" +
			"<td dir=ltr align=right><nobr>" +
			"&nbsp;" +
			"<select id=idLinkType NAME=idLinkType>" +
			"<option value=''></option>" +
			"<option value='http://' selected>http://</option>" +
			"<option value='https://'>https://</option>" +
			"<option value='mailto:'>mailto:</option>" +
			"<option value='ftp://'>ftp://</option>" +
			"<option value='news:'>news:</option>" +
			"</select>" +
			"<input type=text id=idLinkURL value='' style='width:220;height:19px;font:8pt verdana,arial,sans-serif' NAME=idLinkURL contentEditable=true>" +
			"<input id=idLinkTarget NAME=idLinkTarget type=hidden value='_new'>" +
			"</td>" +
			"</tr>" +
			"<tr>" +
			"<td>" +
			"<table cellpadding=0 cellspacing=0 style='TABLE-LAYOUT: fixed'>" +
			"<col width=100><col width=220>" +
			"<tr id=idLinkImage style='display:none'><td>" +
			"<b>&nbsp;&nbsp;"+ed_link_border+":" +
			"</td><td>" +
			"<select id=idLinkImageBorder NAME=idLinkImageBorder>" +
			"<option value=0 selected>0</option>" +
			"<option value=1>1</option>" +
			"<option value=2>2</option>" +
			"<option value=3>3</option>" +
			"<option value=4>4</option>" +
			"<option value=5>5</option>" +
			"</select>" +
			"</td></tr><tr><td>" +
			"<b>&nbsp;&nbsp;"+ed_link_name+":" +
			"</td><td>" +
			"<input type=text size=30 id=idLinkName value='' style='height: 19px;font:8pt verdana,arial,sans-serif' NAME=idLinkName contentEditable=true>" +
			"</td></tr></table></td></tr><tr>" +
			"<td align=center><br>" +
			"<table cellpadding=0 cellspacing=0><tr><td>" +
			"<input type=button id=btnLinkInsert name=btnLinkInsert value='"+ed_link_apply+"' onclick='parent.applyLink()' style='display:none;height: 22px;font:8pt verdana,arial,sans-serif'>" +
			"<input type=button id=btnLinkUpdate name=btnLinkUpdate value='"+ed_link_change+"' onclick='parent.applyLink()' style='display:none;height: 22px;font:8pt verdana,arial,sans-serif'>" +
			"</td><td>" +
			"<input type=button value='"+ed_button_cancel+"' onclick=\"eval('parent.'+inpActiveEditor.value).boxHide()\" style='height: 22px;font:8pt verdana,arial,sans-serif'>" +
			"</td></tr></table>" +
			"</td></tr></table>"
		sHTML = boxDrawPop(310,ed_link_title,sHTML)
		document.write("<iframe id=boxLink name=boxLink style='position: absolute; visibility: hidden; z-index: -1;'></iframe>")
		boxLink.document.open("text/html","replace")
		boxLink.document.write(sHTML)
		boxLink.document.close()
		}

	if(this.usePageProperties && !document.getElementById("boxPage"))//boxPage
		{
		document.write("<iframe id=boxPage name=boxPage src='"+codeURL+"&type=htm&file=box_Page' style='position: absolute; visibility: hidden; z-index: -1;'></iframe>")
		}

	if(this.useTable && !document.getElementById("boxTable2"))//boxTable
		{
		document.write("<iframe id=boxTable2 name=boxTable2 src='"+codeURL+"&type=htm&file=box_Table' style='position: absolute; visibility: hidden; z-index: -1;'></iframe>")
		}

	if(this.useSymbol && !document.getElementById("boxSymbol"))//boxSymbol
		{
		document.write("<iframe id=boxSymbol name=boxSymbol src='"+codeURL+"&type=htm&file=box_Symbol' style='position: absolute; visibility: hidden; z-index: -1;'></iframe>")
		}
	}

function ACEditor(oName)
	{
	this.width = "100%"
	this.height = "70%"
	this.borderCssText = "1px #c3c3c3 solid"
	this.toolbarCssText = "border-left:#d9d9d9 1 solid;border-top:#d9d9d9 1 solid;border-right:#e0e0e0 1 solid;background:#f2f2f6;"

	this.oName = oName;
	this.doCmd = doCmd;
	this.doCmd2 = doCmd2;

	this.displayMode = "RICH";
	this.setDisplayMode = setDisplayMode;
	this.tmp = ""

	this.Sel;
	this.SelType;
	this.saveSelection = saveSelection;

	this.boxHide = boxHide;
	this.boxShow = boxShow;
	this.boxDimension = boxDimension;
	this.boxPosition = boxPosition;

	this.boxShow_Table = boxShow_Table;
	this.boxShow_Link  = boxShow_Link;

	this.boxShow_Image = boxShow_Image;
	this.ImagePageURL = "";
	this.UpdateImage = UpdateImage;
	this.InsertImage = InsertImage;
	this.ImagePageWidth = 443;
	this.ImagePageHeight = 370;
	this.imgSrc = imgSrc;
	this.imgAlt = imgAlt;
	this.imgAlign = imgAlign;
	this.imgBorder = imgBorder;
	this.imgWidth = imgWidth;
	this.imgHeight = imgHeight;
	this.imgHspace = imgHspace;
	this.imgVspace = imgVspace;

	this.boxShow_Asset = boxShow_Asset;
	this.AssetPageURL = "";
	this.InsertAsset_Hyperlink = InsertAsset_Hyperlink;
	this.InsertAsset_RealAudio = InsertAsset_RealAudio;
	this.InsertAsset_Flash = InsertAsset_Flash;
	this.InsertAsset_Video = InsertAsset_Video;
	this.InsertAsset_Image = InsertAsset_Image;
	this.InsertAsset_Sound = InsertAsset_Sound;
	this.InsertCustomHTML = InsertCustomHTML;

	this.AssetPageWidth = 480;
	this.AssetPageHeight = 300;
	this.boxShow_Page = boxShow_Page;
	this.getPageProperties = getPageProperties;
	this.GetElement = GetElement;

	this.SelTextFrame
	this.SelTextFrameActive

	this.pasteFromWord= pasteFromWord;
	this.cleanFromWord = cleanFromWord;
	this.InsertText = InsertText;
	this.getContent = getContent;
	this.getContentBody = getContentBody;
	this.putContent = putContent;
	this.isFullHTML = false;
	this.setTitle = setTitle;
	this.getTitle = getTitle;

	this.useStyle = true;
	this.useFontName = true; this.useSize = true;
	this.useText = true;	this.useCut = true; this.useCopy = true;
	this.usePaste = true;this.useUndo = true;
	this.useRedo = true;	this.useBold = true;
	this.useItalic = true; this.useUnderline = true;
	this.useStrikethrough = true; this.useSuperscript = true; this.useSubscript = true;
	this.useSymbol = true; this.useJustifyLeft = true;
	this.useJustifyCenter = true; this.useJustifyRight = true;
	this.useJustifyFull = true; this.useNumbering = true;
	this.useBullets = true;	this.useIndent = true;
	this.useOutdent = true;	this.useImage = true;
	this.useForeColor = true; this.useBackColor = true;
	this.useLink = true;	this.useTable = true;
	this.useAbsolute = true; this.useClean = true;
	this.useAsset = true; this.useLine = true;
	this.usePageProperties = true; this.useWord = true;

	this.getPageCSSText = getPageCSSText;
	this.setPageCSSText = setPageCSSText;

	this.RUN = RUN;

	this.base = ""
	this.baseEditor = ""
	this.getEditorPreviewPath = getEditorPreviewPath

	this.StyleSelection = "";
	this.StyleSelectionPath_RelativeTo_EditorPath = "";
	this.LoadStyleSelection = LoadStyleSelection; this.WriteStyleSelection = WriteStyleSelection;
	this.writeStyle = writeStyle;
	this.applyStyle = applyStyle;

	this.PageStyle = "";
	this.PageStylePath_RelativeTo_EditorPath = "";

	this.prebuiltHTML = "<html><head></head><body><div></div></body></html>";
	this.headerArea = "";
	}

function getEditorPreviewPath(APPLIED_LINK)//APPLIED_LINK=> Relative
	{
	if(APPLIED_LINK.indexOf(":")!=-1) return APPLIED_LINK;

	if(this.base=="") return APPLIED_LINK;

	base = this.base
	baseEditor = this.baseEditor

	nDeep1=APPLIED_LINK.split("../").length-1

	var sTmp=baseEditor.substring(0,baseEditor.length-1) //remove last "/"
	for(var i=0;i<nDeep1;i++)
		{
		sTmp = sTmp.substring(0,sTmp.lastIndexOf("/"))
		}
	base1=sTmp+"/" //add last "/"

	str=APPLIED_LINK
	var arrTmp = str.split("../");
	if (arrTmp.length > 1) str = arrTmp.join("");
	ext1 = str

	APPLIED_LINK_ABSOLUTE = base1 + ext1

	var arr1 = base.split("/");
	var arr2 = APPLIED_LINK_ABSOLUTE.split("/");
	var sSamePart = ""
	var sTmp = ""
	if(arr1.length>arr2.length)
		{
		for(var i=0;i<arr1.length;i++)
			{
			if(arr2[i]==arr1[i])
				{
				if(i==arr1.length-1)sSamePart=sTmp
				sTmp+=arr2[i]+"/"
				}
			else
				{
				sSamePart=sTmp
				}
			}
		//alert(sSamePart)
		}
	else
		{
		for(var i=0;i<arr2.length;i++)
			{
			if(arr2[i]==arr1[i])
				{
				if(i==arr2.length-1)sSamePart=sTmp
				sTmp+=arr2[i]+"/"
				}
			else
				{
				sSamePart=sTmp
				}
			}
		//alert(sSamePart)
		}


	str=base
	var arrTmp = str.split(sSamePart);
	if (arrTmp.length > 1) str = arrTmp.join("");
	nDeep2=str.split("/").length-1

	base2=""
	for(var j=0;j<nDeep2;j++)
		{
		base2+="../"
		}

	str=APPLIED_LINK_ABSOLUTE
	var arrTmp = str.split(sSamePart);
	if (arrTmp.length > 1) str = arrTmp.join("");
	ext2=str

	return base2 + ext2
	}


function YusASPColor(oName)
	{
	this.oName = oName;
	this.getColor = getColor;
	this.setColor = setColor;


	this.getElementColor = "colSafe"+oName
	this.getElementColorText = "colText"+oName

	this.drawColorSafe = drawColorSafe;

	var colCustom = "colCustom" + oName
	var colText = "colText" + oName
	var colSafe   = "colSafe" + oName
	var sHTML = "";
	//sHTML += "<table cellpadding=4 cellspacing=0 border=0 width=365 style='border:#a9a9a9 1 dotted;' bgcolor='#f0f4fb'>"
	sHTML += "<table cellpadding=4 cellspacing=0 border=0 width=365>"
	sHTML += "<tr><td height=3></td></tr>"
	sHTML += "<tr><td>"+this.drawColorSafe()+"</td></tr>"
	sHTML += "</table>"
	this.drawColor = sHTML
	}

function getColor()
	{
	return eval("colText"+this.oName).value;
	}

function setColor(color)
	{
	eval("colSafe"+this.oName).style.background=color;
	eval("colText"+this.oName).innerText=color;
	}

function drawColorSafe()
	{
	var colSafe   = "colSafe" + this.oName
	var colText = "colText" + this.oName

	var sHTML = "";

	var c1 = new Array("FFFFCC","FFCC66","FF9900","FFCC99","FF6633","FFCCCC","CC9999","FF6699","FF99CC","FF66CC","FFCCFF","CC99CC","CC66FF","CC99FF","9966CC","CCCCFF","9999CC","3333FF","6699FF","0066FF","99CCFF","66CCFF","99CCCC","CCFFFF","99FFCC","66CC99","66FF99","99FF99","CCFFCC","33FF33","66FF00","CCFF99","99FF00","CCFF66","CCCC66","FFFFFF")
	var c2 = new Array("FFFF99","FFCC00","FF9933","FF9966","CC3300","FF9999","CC6666","FF3366","FF3399","FF00CC","FF99FF","CC66CC","CC33FF","9933CC","9966FF","9999FF","6666FF","3300FF","3366FF","0066CC","3399FF","33CCFF","66CCCC","99FFFF","66FFCC","33CC99","33FF99","66FF66","99CC99","00FF33","66FF33","99FF66","99FF33","CCFF00","CCCC33","CCCCCC")
	var c3 = new Array("FFFF66","FFCC33","CC9966","FF6600","FF3300","FF6666","CC3333","FF0066","FF0099","FF33CC","FF66FF","CC00CC","CC00FF","9933FF","6600CC","6633FF","6666CC","3300CC","0000FF","3366CC","0099FF","00CCFF","339999","66FFFF","33FFCC","00CC99","00FF99","33FF66","66CC66","00FF00","33FF00","66CC00","99CC66","CCFF33","999966","999999")
	var c4 = new Array("FFFF33","CC9900","CC6600","CC6633","FF0000","FF3333","993333","CC3366","CC0066","CC6699","FF33FF","CC33CC","9900CC","9900FF","6633CC","6600FF","666699","3333CC","0000CC","0033FF","6699CC","3399CC","669999","33FFFF","00FFCC","339966","33CC66","00FF66","669966","00CC00","33CC00","66CC33","99CC00","CCCC99","999933","666666")
	var c5 = new Array("FFFF00","CC9933","996633","993300","CC0000","FF0033","990033","996666","993366","CC0099","FF00FF","990099","996699","660099","663399","330099","333399","000099","0033CC","003399","336699","0099CC","006666","00FFFF","33CCCC","009966","00CC66","339933","336633","33CC33","339900","669933","99CC33","666633","999900","333333")
	var c6 = new Array("CCCC00","996600","663300","660000","990000","CC0033","330000","663333","660033","990066","CC3399","993399","660066","663366","330033","330066","333366","000066","000033","003366","006699","003333","336666","00CCCC","009999","006633","009933","006600","003300","00CC33","009900","336600","669900","333300","666600","000000")

	sHTML += ("<table border=0 width=350 align=center cellpadding=0 cellspacing=0>")
	sHTML += ("<tr><td width=45 align=center bgcolor=ghostwhite style='border:#a9a9a9 1 solid'><table border=1 bgcolor=ghostwhite cellpadding=0 cellspacing=0><tr><td id='"+colSafe+"' width=27 height=27></td></tr></table></td>")
	sHTML += ("<td>&nbsp;</td><td>")

	sHTML += ("<table cellpadding=0 cellspacing=1 bgcolor=black>")
	for(var i=1;i<=6;i++)
			{
			sHTML += ("<tr>")
			for(var r=0;r<eval("c"+i).length;r++)
				{
				var colour = eval("c"+i+"[r]")
				sHTML += ("<td style=\"cursor:hand;background-color:"+colour+";\" width=9 height=6 onclick=\""+colSafe+".style.background='#"+colour+"';eval('colText"+this.oName+"').innerText='#"+colour+"';\"></td>")
				}
			sHTML += ("</tr>")
			}
	sHTML += ("</table>")

	sHTML += ("</td></tr>")
	sHTML += ("<tr><td colspan=3 height=3></td></tr>")
	sHTML += ("<tr><td colspan=3 align=right>")
	sHTML += ("<b>"+ed_color_number+":<input type=text id='"+colText+"' contentEditable=true style=\"width:53;height:19px;font:10 arial,sans-serif\" onchange=\""+colSafe+".style.background=this.value;\">")
	sHTML += ("</td></tr>")
	sHTML += ("</table>")
	return sHTML;
	}


// Code to use Advanced Content Editor Version 3.0
// in forumKit forums, by Khalid Aldoseri, Copyright © 2003.
// All rights reserved.

var force_exit = false;

function ResetContents()
	{
	if (confirm(ed_confirm_reset))
		{
		obj1.putContent(content);
		obj1.setPageCSSText(properties);
		updateTextCount(0);
		}
	}

function goTo(dest)
	{
	force_exit = true;
	if (dest == "")	history.back();
	else location = dest;
	}

function goToSimple(dest)
	{
	if (dest == "")	history.back();
	else location = dest;
	}

function SubmitForm()
	{
	if(obj1.displayMode == "HTML")
		{
		alert(ed_uncheck_html)
		return ;
		}

	if ((editMode == "newtopic") || (editMode == "edittopic"))
		{
		if (EditorForm.subject.value == "")
			{
			alert(ed_need_title)
			return ;
			}
		}

if ((editMode == "newtopic") || (editMode == "signature")) {
    if (EditorForm.captcha.value.length < 4) {
        alert("يجب إدخال رمز التأكيد الذي يظهر في أعلى اليسار في الخانة أسفل الرمز")
        return;
    }
}

	EditorForm.msg.value = obj1.getContentBody()

	if ((EditorForm.msg.value == "") || (EditorForm.msg.value == "<P>&nbsp;</P>") || (EditorForm.msg.value == "<P></P>"))
		{
		alert(ed_need_content)
		return ;
		}

	if (sizeLimit > 0)
	{
	var c = EditorForm.msg.value.length;

	if (c >= sizeLimit)
		{
		alert(ed_too_big)
		return ;
		}
	}


	force_exit = true;
	EditorForm.format.value = obj1.getPageCSSText()

	if (confirm(ed_confirm_submit))
		EditorForm.submit()
	}


function beforeunload()
{
if (!force_exit)	event.returnValue=ed_confirm_exit;
force_exit = false;
}


if (browser == "IE")
	{
	loadnotice_hide = true;
	loadnotice.style.visibility = "hidden";
	}

var obj1 = new ACEditor("obj1")
obj1.width = "100%"
obj1.height = "100%"
obj1.useText = false
obj1.useSuperscript = false
obj1.useSubscript = false
obj1.useStyle = false
obj1.useAbsolute = false
obj1.usePageProperties = false

if (editMode == "newtopic") obj1.usePageProperties = true
if (editMode == "newreply") obj1.usePageProperties = true
if (editMode == "message") obj1.usePageProperties = true

obj1.AssetPageURL = codeURL+"&type=html&file=asset"
obj1.ImagePageURL = codeURL+"&type=html&file=image"
obj1.isFullHTML = false

if (browser == "IE")
	loadnotice.style.visibility = "hidden";

var mainURL = link+"&f="+forum_id;
var mainImage = getForumIcon(forum_id);
var mainTitle = getForumTitle(forum_id);

if (editMode == "signature")
	{
	mainURL = editCaller;
	mainImage = 'icon.php?i=details';
	mainTitle = ed_title_edit_signature;
	}

if (editMode == "message")
	{
	mainURL = editCaller;
	mainImage = 'icon.php?i=monitor';
	mainTitle = "رسالة الى:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=red>" + user_name + "</font>";
	}

var ss = "<form action=\""+link+"\" method=post name=SaveForm ID=EditorForm>\r\n"
	+ "<input type=hidden name=msg  value=\"\" ID=Hidden1>\r\n"
	+ "<input type=hidden name=caller value=\""+escape(editCaller)+"\">\r\n"
	+ "<input type=hidden name=qid value=\""+escape(memberQID)+"\">\r\n"
	+ "<input type=hidden name=format value=\"\" ID=txtPageProperties>\r\n"
	+ "<input type=hidden name=forum value="+forum_id+">\r\n"
	+ "<input type=hidden name=checksum value="+uniqueChecksum+">\r\n";

ss += " <input type=hidden name=post value="+editMode+">\r\n"


if ((editMode == "newreply") || (editMode == "edittopic"))
	{
	ss += "<input type=hidden name=topic value="+topicID+">\r\n";
	}

if (editMode == "editreply")
	{
	ss += "<input type=hidden name=topic value="+topicID+">\r\n";
	ss += "<input type=hidden name=reply value="+replyID+">\r\n";
	}

if (editMode == "signature")
	{
	document.title = ed_title_edit_signature;
	ss += "<input type=hidden name=user_id value="+user_id+">\r\n";
	}

if (editMode == "message")
	{
	document.title = "رسالة الى: " + user_name;
	ss += "<input type=hidden name=user_id value="+user_id+">\r\n";
	ss += "<input type=hidden name=thread_id value="+thread_id+">\r\n";
	ss += "<input type=hidden name=reply_id value="+reply_id+">\r\n";
	ss += "<input type=hidden name=arm value="+mail_area+">\r\n";
	}

if (editMode == "newtopic")
	{
	}

ss += "<table class=topholder dir="+dir+" border=0 cellspacing=2 width=100%><tr>"
	+ "<td><a class=menu href=\"javascript:goTo('"+mainURL+"')\"><img src='"+mainImage+"' border=0 onError=\"this.src='"+fileURL+"icon.php?m=blank';this.width=0;\"></a></td>"
	+ "<td class=main width=100% valign=middle><a class=menu href=\"javascript:goTo('"+mainURL+"')\"><font size=+1></b>"+mainTitle+"</a></font>";

var ruleslink = "<td align=center class=menu rowspan=2><nobr><a target=_new href=index.php?rules=true>"+ed_click_for_rules+"</a></td>";

if (editMode == "newtopic") {
    if ((retry_title.length > 0) || (retry_content.length > 0))
        ruleslink = "<td align=center class=menu rowspan=2><nobr><font color=red>رمز التأكيد كان خاطئا<br>الرجاء المحاولة<br> مرة أخرى</td>";
}

if (editMode == "signature") {
    ss += "</td>";
    if (retry_content.length > 0) {
        ss += "<td align=center class=menu rowspan=2><nobr><font color=red>رمز التأكيد كان خاطئا<br>الرجاء المحاولة<br> مرة أخرى</td>";
        content = retry_content;
    }

    ss += "<td rowspan=2 class=menu>" + writeCaptcha() + "</td>";
}
else if (editMode == "newtopic")
	{
	document.title = ed_title_new_topic;
	ss += " - " + ed_title_new_topic;

	content = retry_content;

	if (moderate)
	{
	ss += "&nbsp;&nbsp;&nbsp;&nbsp;<font size=-1 color=black><INPUT type=checkbox class=small name=newtopic_hidden value=1> مخفي";
	ss += "&nbsp;&nbsp;<INPUT type=checkbox class=small name=newtopic_locked value=1> مقفل";
	ss += "&nbsp;&nbsp;<INPUT type=checkbox class=small name=newtopic_pinned value=1> مثبت";
	}
    ss += "</td>" + ruleslink;

	ss += "<td rowspan=2 class=menu>" + writeCaptcha() + "</td>";

	if (!moderate)
		ss += "<td align=left class=menu rowspan=2><nobr><font color=red>"
		+ ed_limit_topics + ": </font>"
		+ (maxTopicsAllowedInForum - userTopicsInForum)
		+ "</td>";

	ss += "</tr><tr><td colspan=2>"+ed_topic_title_header+": <input name=subject type=text style=\"width:400\" value=\""+ retry_title +"\"></td>";
	}
else if (editMode == "message")
	{
	ss += "<br><nobr>عنوان الرسالة: <input name=subject type=text style=\"width:400\" value=\""+ topictitle+"\"></td>";

	if (content.length > 0)
		{
		if (quoteAuthor.length > 0)
		{
		var tlink = "<font size=-1 color=yellow><b>&nbsp;&nbsp;&nbsp;"+ed_quote_from+":";
		
		if (quoteTopic > 0)
		{
			tlink = "<a href=index.php?t=" + quoteTopic;
			if (quoteReply > 0)	tlink += "&r=" + quoteReply;
			tlink += "><font size=-1 color=yellow><b>&nbsp;&nbsp;&nbsp;"+ed_quote_from+":</a>";
		}
		
		content = "<br><table width=95% border=0 bordercolor=gray cellspacing=0 cellpadding=0><tr>"
			+ "<td bgcolor=gray><nobr>"+tlink+"</td>"
			+ "<td bgcolor=gray><nobr><a href=index.php?member="+quoteAuthorID+"><font size=-1 color=white><b>&nbsp;"+quoteAuthor+"</a>&nbsp;&nbsp;&nbsp;</td>"
			+ "<td bgcolor=gray><nobr><font size=-1 color=yellow><b>&nbsp;&nbsp;&nbsp;"+formatDate(quoteDate)+"</td>"
			+ "<td bgcolor=gray width=100%>&nbsp;</td>"
			+ "</tr>"
			+ "<tr><td bgcolor=transparent colspan=4><table width=100% border=1 bordercolor=gray><tr><td>"
			+ content + "</td></tr></table></td></tr></table><p>";
		}
		}

	}
else if (editMode == "edittopic")
	{
	document.title = ed_title_edit_topic;
	ss += " - " + ed_title_edit_topic  + "</td>" + ruleslink;
	ss += "</tr><tr><td colspan=2>"+ed_topic_title_header+": <input name=subject type=text style=\"width:400\"></td>";
	}
else if (editMode == "newreply")
	{
	document.title = ed_title_new_reply;

	ss += " - " + ed_title_new_reply;
	

	if (moderate)
	{
	ss += "&nbsp;&nbsp;&nbsp;&nbsp;<font size=-1 color=black><INPUT type=checkbox class=small name=newreply_hide value=1> إخفاء الموضوع";
	ss += "&nbsp;&nbsp;<INPUT type=checkbox class=small name=newreply_lock value=1> قفل الموضوع";
	}

	ss += "</td>" + ruleslink;
	if (!moderate)
		ss += "<td align=left class=menu rowspan=2><nobr><font color=red>"
		+ ed_limit_replies + ": </font>"
		+ (maxRepliesAllowedInForum - userRepliesInForum)
		+ "</td>";


	ss += "</tr><tr><td colspan=2 class=main><a href=\"javascript:goTo('"+link+"&t="+topicID+"')\">"+ed_title_reply_topictitle
		+ ": " + topictitle + "</a> &nbsp;-&nbsp;"+ed_title_reply_authorname+": " + topicauthor  + "</td>";

	if (content.length > 0)
		{
		if (quoteAuthor.length > 0)
		{
		var tlink = "<font size=-1 color=yellow><b>&nbsp;&nbsp;&nbsp;" + ed_quote_from + ":";
		
		if (quoteTopic > 0)
		{
			tlink = "<a href=index.php?t="+quoteTopic;
			if (quoteReply > 0)	tlink += "&r=" + quoteReply;
			tlink += "><font size=-1 color=yellow><b>&nbsp;&nbsp;&nbsp;"  + ed_quote_from + ":</a>";
		}
		
		content = "<br><table width=95% border=0 bordercolor=gray cellspacing=0 cellpadding=0><tr>"
			+ "<td bgcolor=gray><nobr>"+tlink+"</td>"
			+ "<td bgcolor=gray><nobr><a href=index.php?member="+quoteAuthorID+"><font size=-1 color=white><b>&nbsp;"+quoteAuthor+"</a>&nbsp;&nbsp;&nbsp;</td>"
			+ "<td bgcolor=gray><nobr><font size=-1 color=yellow><b>&nbsp;&nbsp;&nbsp;"+formatDate(quoteDate)+"</td>"
			+ "<td bgcolor=gray width=100%>&nbsp;</td>"
			+ "</tr>"
			+ "<tr><td bgcolor=transparent colspan=4><table width=100% border=1 bordercolor=gray><tr><td>"
			+ content + "</td></tr></table></td></tr></table><p>";
		}
		}
	}
else if (editMode == "editreply")
	{
	document.title = ed_title_edit_reply;
	ss += " - " + ed_title_edit_reply + "</td>" + ruleslink;
	ss += "</tr><tr><td colspan=2 class=main><a href=\"javascript:goTo('"+link+"&t="+topicID+"')\">"
		+ ed_title_reply_topictitle + ": " + topictitle + "</a> &nbsp;-&nbsp;"+ed_title_reply_authorname+": " + topicauthor  + "</td>";
	}
else
	{
	ss += "</td>";
	}

ss += "</tr></table>";


editing = true;

obj1.headerArea = ss;

obj1.RUN()

// in case the text being edited is larger than the current one, give it more space
if (content.length >= sizeLimit)	sizeLimit = content.length + 500;

obj1.putContent(content);
obj1.setPageCSSText(properties);
if (editMode == "edittopic")	SaveForm.subject.value = topictitle;
if (browser == "IE")		loadnotice.style.visibility = "hidden";

updateTextCount(0);

var filledFrame = false;

function fillReviewFrame(framename,framesrc)
	{
	if (!filledFrame)
		{
		var oFrame = eval(framename)
		var oDoc = oFrame.document.open("text/html", "replace")
		oDoc.write("<script>this.location.href = \"" + framesrc + "\";</script>");
		oDoc.close();
		filledFrame = true;
		}
	}

function showTextCount()
{
	if(obj1.displayMode != "HTML")
	{
	var c = updateTextCount(1);
	var notice = ed_cur_size + ": " + obj1.getContentBody().length;
	if (sizeLimit > 0)	notice += "\r\n\r\n" + ed_max_size + ": " + sizeLimit;
	if (c >= sizeLimit)	notice += "\r\n\r\n" + ed_too_big;
	confirm(notice);
	}
}

var hidecounter = false;

function updateTextCount(mode)
{
	var result = 0;

	if(obj1.displayMode == "HTML")
	{
		EditorForm.status.style.background = "#99ff99";
		EditorForm.status.style.color = "red";
		EditorForm.status.value = "H T M L";
	}
	else
	{
		var c = obj1.getContent(1);
		result = c;
		
		if ((mode == 0) && (hidecounter)) return(-1);
		
		if (c >= 0)	// was 75000
		{
			EditorForm.status.style.background = "#ffff99";
			EditorForm.status.style.color = "brown";
			EditorForm.status.value = ed_cur_size;
			hidecounter = true;
			return(c);

		}
		else if (sizeLimit == 0)
		{
			EditorForm.status.style.background = "#ffff99";
			EditorForm.status.style.color = "brown";
			EditorForm.status.value = ed_cur_size + ": " + obj1.getContentBody().length;
		}
		else
		{
			if (c >= sizeLimit)
			{
				EditorForm.status.style.background = "red";
				EditorForm.status.style.color = "white";
			}
			else
			{
				EditorForm.status.style.background = "#ffff99";
				EditorForm.status.style.color = "brown";
			}

			EditorForm.status.value = obj1.getContentBody().length + " / " + sizeLimit;
		}
	}
	
	var tmr = 5000;
	
	if (result < 1000)	tmr = 1000;
	else if (result < 2000)	tmr = 2000;
	else if (result < 5000)	tmr = 3500;

	setTimeout('updateTextCount(0)',tmr);
	return(result);
}



function writeCaptcha() {
    var r = Math.floor(Math.random() * 10000) + 9999;
    return ("<center><div id=captchabox><table bgcolor=#f4f4f4 border=0 cellspacing=0 cellpadding=0><tr align=center><td align=center valign=top><img width=120 height=40 src=captcha.php?width=100&height=40&characters=5><br>"
            + "<nobr><center><img alt='تغيير الرقم' onclick=\"javacript:newCaptcha();\" src=icons/reload.png width=18 height=18>&nbsp;&nbsp;"
            + "<b>رمز التأكيد: "
            + "<input type=text style=\"width:60px;font-size:12px;\" name=captcha>"
            + "</td></tr></table></div>");
}

function newCaptcha() {
    var r = Math.floor(Math.random() * 10000) + 9999;

    var nc = "<table bgcolor=#f4f4f4 border=0 cellspacing=0 cellpadding=0><tr align=center><td align=center valign=top><img width=120 height=40 src=captcha.php?width=100&height=40&characters=5><br>"
            + "<nobr><center><img alt='تغيير الرقم' onclick=\"javacript:newCaptcha();\" src=icons/reload.png width=18 height=18>&nbsp;&nbsp;"
            + "<b>رمز التأكيد: "
            + "<input type=text style=\"width:60px;font-size:12px;\" name=captcha>"
            + "</td></tr></table>";

    if (document.getElementById)
    { var oe = document.getElementById("captchabox"); oe.innerHTML = nc; }
    else if (document.layers && document.layers["captchabox"])
        document.layers["captchabox"].innerHTML = nc;
    else if (document.all)
        document.all["captchabox"].innerHTML = nc;

}