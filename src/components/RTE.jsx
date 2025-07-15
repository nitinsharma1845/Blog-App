import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
const RTE = ({ name = "Content", control, label, defaultValues }) => {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValues}
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
              ],
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
};

export default RTE;
