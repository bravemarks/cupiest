if (typeof tinyMCE === "undefined" || !tinyMCE.isEditorActive()) {
  // If TinyMCE is not available or the editor is not active, perform some action
  console.log("TinyMCE not available or editor not active");
} else {
  // TinyMCE is available and the editor is active, perform other actions
  console.log("TinyMCE available and editor active");
}
