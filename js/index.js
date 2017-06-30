chrome.browserAction.onClicked.addListener(() => {
	const audio = new Audio('../audio/genji.mp3')
	audio.play()
})
