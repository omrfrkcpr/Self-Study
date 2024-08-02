tinymce.init({
  selector: "textarea#textEditor",
  height: 500,
  menubar: true,
  plugins: [
    "a11ychecker",
    "advlist",
    "advcode",
    "advtable",
    "autolink",
    "checklist",
    "export",
    "lists",
    "link",
    "image",
    "charmap",
    "preview",
    "anchor",
    "searchreplace",
    "visualblocks",
    "powerpaste",
    "fullscreen",
    "formatpainter",
    "insertdatetime",
    "media",
    "table",
    "image",
    "help",
    "wordcount",
    "code",
  ],
  toolbar:
    "undo redo | casechange blocks | bold italic backcolor | " +
    "alignleft aligncenter alignright alignjustify | " +
    "image" +
    "bullist numlist checklist outdent indent | removeformat | a11ycheck code table wordcount help",
});
