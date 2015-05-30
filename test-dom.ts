/// <reference path="lib.es6.d.ts" />

var ue = document.querySelector('#foo'); // UniversalElement
// from Element
var cls: string = ue.className;
// from HTMLElement
ue.blur();
// from HTMLMediaElement
ue.play();

// from HTMLInputElement
var files = document.querySelectorAll('input[type=file]')[0].files;
var fname = files[0].name;

// from HTMLImageElement
var nh = document.body.children[0].naturalHeight;

var svg = document.getElementsByClassName("bar")[0];
// from SVGElement
var vp = svg.viewportElement;
// from SVGLineElement
svg.x1.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 1);

// type of href from HTMLAnchorElement becomes "any" because of type confliction with SVGElements
var href = document.querySelector('a').href;

// UIEvent::target is UniversalUIEventTarget, which extends UniversalElement, Document, and Window
document.addEventListener('mousemove', ev => {
	var targ = ev.target;
	if (targ.classList.contains('movable')) {
		targ.style.left = ev.pageX + 'px';
		targ.style.right = ev.pageX + 'px';
	}
});
