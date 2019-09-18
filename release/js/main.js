//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);

Window_Base.prototype.standardFontSize = function() {
	return 37;
};

window.onload = function() {
	SceneManager.run(Scene_Boot);
};
