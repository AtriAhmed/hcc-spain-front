import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../Input";
import Textarea from "../../Textarea";
import Select from "../../Select";
import Button from "../../Button";
import Swal from "sweetalert2";
import { Link, navigate } from "gatsby";
import { Add, ArrowBack } from "@mui/icons-material";
import Title from "../../Title";
import ItemsList from "./ItemsList";
import { arrayMove } from "react-sortable-hoc";

const EditPost = ({ location, params }) => {
  const [slug, setSlug] = useState(null);
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    title_en: "",
    title_ar: "",
    title_de: "",
    summary_en: "",
    summary_ar: "",
    summary_de: "",
  });
  const [arabicItems, setArabicItems] = useState([]);
  const [englishItems, setEnglishItems] = useState([]);
  const [germanItems, setGermanItems] = useState([]);
  const [image, setImage] = useState(null); // Separate state for the image

  useEffect(() => {
    const slugParam = params.slug;
    setSlug(slugParam);
  }, [location]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${slug}`); // Changed from /api/posts
        const post = response.data;
        post.content_items.sort((a, b) => a.order - b.order);

        setFormData({
          title_en: post.title_en,
          title_ar: post.title_ar,
          title_de: post.title_de, // Changed from title_nl
          summary_en: post.summary_en,
          summary_ar: post.summary_ar,
          summary_de: post.summary_de, // Changed from summary_nl
        });

        setEnglishItems([...post.content_items].filter(item => item.language === "en"));
        setArabicItems([...post.content_items].filter(item => item.language === "ar"));
        setGermanItems([...post.content_items].filter(item => item.language === "de")); // Changed from nlItems
        setLanguage(post.title_en ? "en" : post.title_ar ? "ar" : "de"); // Changed from "nl" to "de"
      } catch (error) {
        console.error("Error fetching post:", error);
        Swal.fire("Error", "There was an error fetching the post.", "error");
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  const handleLanguageChange = e => {
    setLanguage(e.target.value);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = e => {
    setImage(e.target.files[0]); // Store the file object
  };

  const handleItemContentChange = (itemIndex, event) => {
    const updatedItems =
      language === "en"
        ? [...englishItems]
        : language === "ar"
          ? [...arabicItems]
          : [...germanItems];

    if (updatedItems[itemIndex].type === "image" || updatedItems[itemIndex].type === "pdf") {
      const file = event?.target?.files[0]; // Get the selected file

      if (file) {
        const reader = new FileReader();

        // Update file name immediately
        updatedItems[itemIndex].file = file;

        // Use FileReader to preview the image
        reader.onload = (e) => {
          updatedItems[itemIndex].file_path = e.target.result; // Set the preview URL (base64 string)
          if (language === "en") {
            setEnglishItems([...updatedItems]);
          } else if (language === "ar") {
            setArabicItems([...updatedItems]);
          } else {
            setGermanItems([...updatedItems]);
          }
        };

        reader.readAsDataURL(file); // Read the file and trigger onload
      }
    } else {
      updatedItems[itemIndex].content = event.target.value;
      if (language === "en") {
        setEnglishItems([...updatedItems]);
      } else if (language === "ar") {
        setArabicItems([...updatedItems]);
      } else {
        setGermanItems([...updatedItems]);
      }
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("_method", "PUT"); // Laravel needs this for PUT request with formData

    // Append all form fields to FormData
    for (const key in formData) {
      formDataToSend.append(key, formData[key] ? formData[key] : "");
    }

    if (image) {
      formDataToSend.append("image", image); // Append the image file if it exists
    }

    const selectedItems =
      language === "en"
        ? englishItems
        : language === "ar"
          ? arabicItems
          : germanItems; // Changed from nlItems

    selectedItems.forEach((item, index) => {
      formDataToSend.append(`items[${index}][id]`, item.id ? item.id : "");
      formDataToSend.append(`items[${index}][type]`, item.type);
      formDataToSend.append(`items[${index}][content]`, item.content);
      formDataToSend.append(`items[${index}][language]`, item.language);
      formDataToSend.append(`items[${index}][order]`, item.order);

      // Append the file if it's an image or PDF
      if (item.file) {
        formDataToSend.append(`items[${index}][file]`, item.file); // Dynamic field name for file
      }
    });

    try {
      const response = await axios.post(`/api/posts/${slug}`, formDataToSend, { // Changed from /api/posts
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        Swal.fire("Success", "Post updated successfully", "success"); // Changed from "Blog"
        navigate("/admin/blog"); // Changed from "/admin/blog"
      }
    } catch (error) {
      console.error("Error updating post:", error);
      Swal.fire("Error", "There was an error updating the post. Please try again.", "error"); // Enhanced error message
    }
  };

  const addNewItem = (type) => {
    const newItem = {
      order:
        language === "en"
          ? englishItems.length
          : language === "ar"
            ? arabicItems.length
            : germanItems.length, // Changed from nlItems
      content: "",
      type,
      language: language,
    };
    const updatedItems =
      language === "en"
        ? [...englishItems]
        : language === "ar"
          ? [...arabicItems]
          : [...germanItems]; // Changed from nlItems
    updatedItems.push(newItem);

    if (language === "en") {
      setEnglishItems([...updatedItems]);
    } else if (language === "ar") {
      setArabicItems([...updatedItems]);
    } else {
      setGermanItems([...updatedItems]);
    }
  };

  const onItemsSortEnd = ({ oldIndex, newIndex }) => {
    const updatedItems =
      language === "en"
        ? [...englishItems]
        : language === "ar"
          ? [...arabicItems]
          : [...germanItems]; // Changed from nlItems

    const sortedItems = arrayMove(updatedItems, oldIndex, newIndex).map((item, idx) => ({
      ...item,
      order: idx,
    }));

    if (language === "en") {
      setEnglishItems([...sortedItems]);
    } else if (language === "ar") {
      setArabicItems([...sortedItems]);
    } else {
      setGermanItems([...sortedItems]);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <Link className="" to="/admin/blog"> {/* Changed from "/admin/blog" */}
            <ArrowBack fontSize="medium" />
          </Link>
          <Title>Edit Post</Title> {/* Changed from "Edit Blog" */}
        </div>
        <Select
          divClassNames="!flex-row items-center gap-2"
          label="Language:"
          id="language"
          name="language"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          <option value="de">German</option> {/* Changed from "nl" */}
        </Select>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col grow">
        {language === "en" && (
          <>
            <Input
              label="Title"
              type="text"
              name="title_en"
              value={formData.title_en}
              onChange={handleChange}
            />
            <Textarea
              label="Summary"
              type="text"
              name="summary_en"
              value={formData.summary_en}
              onChange={handleChange}
            />
          </>
        )}
        {language === "ar" && (
          <>
            <Input
              label="Title"
              type="text"
              name="title_ar"
              value={formData.title_ar}
              onChange={handleChange}
            />
            <Textarea
              label="Summary"
              type="text"
              name="summary_ar"
              value={formData.summary_ar}
              onChange={handleChange}
            />
          </>
        )}
        {language === "de" && ( // Changed from "nl"
          <>
            <Input
              label="Title"
              type="text"
              name="title_de"
              value={formData.title_de}
              onChange={handleChange}
            />
            <Textarea
              label="Summary"
              type="text"
              name="summary_de"
              value={formData.summary_de}
              onChange={handleChange}
            />
          </>
        )}
        <div className="text-sm text-slate-500 font-medium mb-2">Content</div>
        {(
          (language === "en" && englishItems.length) ||
          (language === "ar" && arabicItems.length) ||
          (language === "de" && germanItems.length) // Changed from "nl"
        ) ? (
          <ItemsList
            useDragHandle
            onSortEnd={onItemsSortEnd}
            handleItemContentChange={handleItemContentChange}
            items={
              language === "en"
                ? englishItems
                : language === "ar"
                  ? arabicItems
                  : germanItems // Changed from "nlItems"
            }
            setItems={
              language === "en"
                ? setEnglishItems
                : language === "ar"
                  ? setArabicItems
                  : setGermanItems // Changed from setNlItems
            }
            language={language}
            key={language}
          />
        ) : (
          <div className="shadow p-4">
            There is no content currently. Add new content by clicking one of the buttons below.
          </div>
        )}

        <div className="mt-4 px-8 flex justify-between">
          <section className="flex gap-2">
            <div className="mb-1">
              <Button
                type="button"
                bg="bg-white"
                customClassnames="!py-1 !px-3 !text-xs !flex justify-center items-center"
                onClick={() => addNewItem("title")}
              >
                <Add fontSize="small" />
                Title
              </Button>
            </div>
            <div className="mb-1">
              <Button
                type="button"
                bg="bg-white"
                customClassnames="!py-1 !px-3 !text-xs !flex justify-center items-center"
                onClick={() => addNewItem("text")}
              >
                <Add fontSize="small" />
                Text
              </Button>
            </div>
            <div className="mb-1">
              <Button
                type="button"
                bg="bg-white"
                customClassnames="!py-1 !px-3 !text-xs !flex justify-center items-center"
                onClick={() => addNewItem("image")}
              >
                <Add fontSize="small" />
                Image
              </Button>
            </div>
            <div className="mb-1">
              <Button
                type="button"
                bg="bg-white"
                customClassnames="!py-1 !px-3 !text-xs !flex justify-center items-center"
                onClick={() => addNewItem("pdf")}
              >
                <Add fontSize="small" />
                Pdf
              </Button>
            </div>
          </section>
        </div>

        <Input
          label="Image"
          type="file"
          name="image"
          onChange={handleImageChange}
        />
        <Button type="submit">Update Post</Button> {/* Changed from "Update Blog" */}
      </form>
    </div>
  );
};

export default EditPost;
