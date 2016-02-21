var Steps = {
	terminals: {}
};

Steps.openTerminals = function () {
	Steps.terminals.term1 = tty.openTerminal($('#termDiv1').position().top);
	Steps.terminals.term2 = tty.openTerminal($('#termDiv2').position().top);
	Steps.terminals.term3 = tty.openTerminal($('#termDiv3').position().top);
}

$(function() {
	setTimeout(function() {
		Steps.openTerminals();	
	}, 200);
});
