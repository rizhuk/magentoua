/*
 * ds-sleight: universal transparent-PNG enabler for MSIE/Win 5.5+
 * version 1.0.1 (2007)
 * by Daniel Sandler, http://dsandler.org, dsandler at that domain too
 * see also: http://dsandler.org/wp/archives/2007/08/22/ds-sleight
 * 
 * From original code: http://www.youngpup.net/?request=/snippets/sleight.xml
 * and background-image code: http://www.allinthehead.com/retro/69
 * ...plus the following enhancements:
 *  # use sizingMethod=crop to avoid scaling PNGs (who would do such a thing?)
 *  # only do this once, to make it compatible with CSS rollovers
 * 
 * Instructions for use:
 *  1. load ds-sleight.js in your page
 *  2. create a 1x1 pixel, completely transparent GIF and store it at
 *     /images/spacer.gif (or change the spacerPath variable below to
 *     point at such an image)
 *  3. enjoy
 */

if (navigator.platform == "Win32" 
	&& navigator.appName == "Microsoft Internet Explorer" 
	&& window.attachEvent)
{
	window.attachEvent("onload", enableAlphaImages);
}

function enableAlphaImages(){
	var spacerPath = '/images/spacer.gif';
	var rslt = navigator.appVersion.match(/MSIE (\d+\.\d+)/, '');
	var itsAllGood = (rslt != null && Number(rslt[1]) >= 5.5);
	if (itsAllGood) {
		for (var i=0; i<document.all.length; i++){
			var obj = document.all[i];
			var bg = obj.currentStyle.backgroundImage;
			var img = document.images[i];
			if (bg && bg.match(/\.png/i) != null) {
				var img = bg.substring(5,bg.length-2);
				var offset = obj.style["background-position"];
				obj.style.filter =
				"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+img+"', sizingMethod='crop')";
				obj.style.backgroundImage = "url('"+spacerPath+"')";
				obj.style["background-position"] = offset; // reapply
			} else if (img && img.src.match(/\.png$/i) != null) {
				var src = img.src;
				img.style.width = img.width + "px";
				img.style.height = img.height + "px";
				img.style.filter =
				"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"', sizingMethod='crop')"
				img.src = spacerPath;
			}

		}
	}
}