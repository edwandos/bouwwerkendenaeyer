function RunInit()
{
    document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="100%" HEIGHT="100%" id="index" ALIGN="">\n');
    document.write('<PARAM NAME=movie VALUE="index.swf">\n');
	document.write('<PARAM NAME=quality VALUE=high>\n');
	document.write('<PARAM NAME=bgcolor VALUE=#333333>\n');
	document.write('<EMBED src="index.swf" quality=high bgcolor=#333333 WIDTH="100%" HEIGHT="100%" NAME="index" ALIGN="" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED>\n');
    document.write('</OBJECT>\n');
}