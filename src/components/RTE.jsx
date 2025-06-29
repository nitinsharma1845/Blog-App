import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
const RTE = ({ name = "Content", control, label }) => {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="0avkkyqtova3w3t8gxf9i2nkizb2o0hwysbeixdtefisi8m8"
            init={{
              plugins: [
                "anchor",
                "autolink",
                "charmap",
                "codesample",
                "emoticons",
                "image",
                "link",
                "lists",
                "media",
                "searchreplace",
                "table",
                "visualblocks",
                "wordcount",
                "checklist",
                "mediaembed",
                "casechange",
                "formatpainter",
                "pageembed",
                "a11ychecker",
                "tinymcespellchecker",
                "permanentpen",
                "powerpaste",
                "advtable",
                "advcode",
                "editimage",
                "advtemplate",
                "mentions",
                "tableofcontents",
                "footnotes",
                "mergetags",
                "autocorrect",
                "typography",
                "inlinecss",
                "markdown",
                "importword",
                "exportword",
                "exportpdf",
              ],
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            }}
            initialValue="Welcome to Blog go"
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
};

export default RTE;
