var codeBlocks = document.querySelectorAll('.copyable')

var addCopyButton = function(codeBlock) {
	var figure = insertCodeFigure(codeBlock)
	var button = createCodeCopyButton(codeBlock)
	figure.appendChild(button)
}

var insertCodeFigure = function(codeBlock) {
	var figure = document.createElement('figure')
	figure.className = 'code-block'
	codeBlock.parentNode.insertBefore(figure, codeBlock)
	figure.appendChild(codeBlock)
	return figure
}

var createCodeCopyButton = function(codeBlock) {
	var button = document.createElement('button')
	button.className = 'copy-code-button'
	return button
}

codeBlocks.forEach(addCopyButton)

new Clipboard('.copy-code-button', {
    target: function(trigger) {
        return trigger.previousSibling
    }
});