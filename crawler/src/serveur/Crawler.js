var trim = function(str, charlist) {
  var whitespace = [' ','\n','\r','\t','\f','\x0b','\xa0','\u2000','\u2001','\u2002','\u2003','\u2004','\u2005',
					'\u2006','\u2007','\u2008','\u2009','\u200a','\u200b','\u2028','\u2029','\u3000'].join('');
  var l = 0,i = 0;
  str += '';
  if (charlist) whitespace = (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^:])/g, '$1')
  l = str.length;for (i = 0; i < l; i++) if (whitespace.indexOf(str.charAt(i)) === -1) { str = str.substring(i);break } l = str.length; for (i = l - 1; i >= 0; i--)
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(0, i + 1);break
    }
  return whitespace.indexOf(str.charAt(0)) === -1 ? str : ''
}


var Crawl = function(){
	dmp = document.createElement('textarea');
	dmp.setAttribute('id', 'dmp_crawl');
	dmp.setAttribute('style', 'width:100%;height:1000px;border:1px solid black');
	document.getElementsByTagName('html')[0].appendChild(dmp);
	var list = document.getElementById('localityName').addEventListener('change', function(e){
			var localityName = e.target.value;
			$.get("http://www.mines-paristech.fr/libmines/Annuaire/Commun/ajax-search.php?&localityName="+localityName, function(e){
				var parser = new DOMParser(), doc = parser.parseFromString(e, "text/html");
				var personnes = doc.getElementsByClassName('person-result');
				for (var j in personnes){
					if (!personnes[j].getElementsByTagName) continue;
					var datas = personnes[j].getElementsByTagName('td'), info=personnes[j].getElementsByTagName('a')[0].innerText;
					for (var k in datas) {
						td = datas[k].innerText;
						if ((test = /eval\("(.*)\);/.exec(td))){
							while (test[1].indexOf('\\')!= -1) test[1]=test[1].replace('\\', '');
							eval(test[1]+");");
							td=d;
						}
						info+=";"+trim(td);
					}
					document.getElementById('dmp_crawl').value+="\n"+info;
				}
				alert("Dumped !");
			});
	});
}
window.addEventListener('load', Crawl);
