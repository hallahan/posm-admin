var Steps = {};

Steps.openTerminals = function () {
	tty.openTerminal($('#termDiv1').position().top);
	tty.openTerminal($('#termDiv2').position().top);
	tty.openTerminal($('#termDiv3').position().top);
}

$(function() {
	setTimeout(function() {
		Steps.openTerminals();	
	}, 200);
});
