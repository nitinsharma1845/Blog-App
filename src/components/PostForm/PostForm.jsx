import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RTE, Input, Button, SelectBtn } from "../index";
import databaseServices from "../../appwriteServices/databaseServices";
import fileServices from "../../appwriteServices/fileServices";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PostForm = ({ post }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    getValues,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: onchange,
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    console.log(data);
    const postToast = toast.loading(post ? "Updating post.." : "Posting..");
    try {
      if (post) {
        const file = data?.image[0]
          ? fileServices.uploadFile(data.image[0])
          : null;

        if (file) {
          fileServices.deleteFile(post.featuredImage);
        }

        const dbPost = await databaseServices.updatePost(post.$id, {
          ...data,
          featuredImage: file ? (await file).$id : undefined,
        });

        if (dbPost) {
          toast.update(postToast, {
            render: "Post Updated Successfully!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          navigate(`/post/${dbPost.$id}`);
        }
      } else {
        const image = data?.image[0];
        const file = await fileServices.uploadFile(image);
        if (file) {
          const newPost = await databaseServices.createPost({
            ...data,
            userId: userData.$id,
            featuredImage: file.$id,
          });
          if (newPost) {
            toast.update(postToast, {
              render: "Post Created Successfully!",
              type: "success",
              isLoading: false,
              autoClose: 3000,
            });
            navigate(`/post/${newPost.$id}`);
          }
        }
      }
    } catch (error) {
      toast.update(postToast, {
        render: "Something went wrong!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      throw error;
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [slugTransform, watch, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title : "
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: "Title is required !" })}
        />
        {errors.title && (
          <p className="mt-[-15px] text-red-500 text-xs">
            {errors.title.message}
          </p>
        )}
        <Input
          readOnly
          label="Slug : "
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value));
          }}
        />
        <RTE
          label="Content"
          name="content"
          control={control}
          defaultValues={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          type="file"
          label="Featured Image"
          className="mb-4"
          accept="image/png, image/jpg , image/jpeg , image/gif"
          {...register("image", { required: !post })}
        />

        {errors.image && (
          <p className="mx-[-15px] text-red-500 text-xs">
            {errors.image.message}
          </p>
        )}

        {post && (
          <div className="w-full mb-4">
            <img
              src={fileServices.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <SelectBtn
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          disabled={!isValid || isSubmitting}
          type="submit"
          bgColor={post ? bg - green - 500 : undefined}
          className={`w-full ${
            !isValid || isSubmitting ? "bg-gray-400 cursor-not-allowed" : ""
          }`}
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
