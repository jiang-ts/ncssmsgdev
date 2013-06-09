var target_doc;
function getCookie(NameOfCookie,doc)
{
    if(doc)
        target_doc=doc;
    else
        target_doc=document;
    if(target_doc.cookie.length>0)
    {
        begin=target_doc.cookie.indexOf(NameOfCookie+"=");
        if(begin!=-1)
        {
            begin+=NameOfCookie.length+1;end=target_doc.cookie.indexOf(";",begin);
            if(end==-1)
                end=target_doc.cookie.length;
            return unescape(target_doc.cookie.substring(begin,end));
        }
    }
    return null;
}
function setCookie(NameOfCookie,value,expiredays,doc)
{
    if(doc)
        target_doc=doc;
    else
        target_doc=document;
    var ExpireDate=new Date();
    ExpireDate.setTime(ExpireDate.getTime()+(expiredays*24*3600*1000));
    target_doc.cookie=NameOfCookie+"="+escape(value)+((expiredays==null)?"":"; expires="+ExpireDate.toGMTString());
}
function delCookie(NameOfCookie,doc)
{
    if(doc)
    target_doc=doc;
    else
        target_doc=document;
    if(getCookie(NameOfCookie))
    {
        target_doc.cookie=NameOfCookie+"="+"; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}
function getFormat()
{
    var ua=navigator.userAgent;
    var MSIEOffset=ua.indexOf("MSIE ");
    var isIE6Max;
    if(MSIEOffset==-1)
    {
        isIE6Max=0;
    }
    else
    {
        isIE6Max=parseFloat(ua.substring(MSIEOffset+5,ua.indexOf(";",MSIEOffset)));
    }
    if(isIE6Max<7&&isIE6Max>0)
    {
        return'image/gif';
    }
    else
    {
        return'image/png';
    }
};
initd=function()
{
    var tk=getCookie('ticket');
    if(tk==null)
    {
        window.location.replace("../login/index.html");
    }
}
