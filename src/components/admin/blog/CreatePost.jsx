import React, { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { navigate } from "gatsby"
import { Link } from "../../../contexts/TranslationContext"
import Input from "../../Input"
import Textarea from "../../Textarea"
import Button from "../../Button"
import Select from "../../Select"
import Title from "../../Title"
import { Add, ArrowBack } from "@mui/icons-material"
import ItemsList from "./ItemsList"
import { arrayMove } from "react-sortable-hoc"

const CreatePost = () => {
  const [language, setLanguage] = useState("en")
  const [formData, setFormData] = useState({
    title_en: "",
    title_ar: "",
    title_es: "",
    summary_en: "",
    summary_ar: "",
    summary_es: "",
  })

  // Separate state for different language content items
  const [englishItems, setEnglishItems] = useState([])
  const [arabicItems, setArabicItems] = useState([])
  const [spanishItems, setSpanishItems] = useState([])
  const [image, setImage] = useState(null) // Separate state for the main image

  const handleLanguageChange = e => {
    setLanguage(e.target.value)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleImageChange = e => {
    setImage(e.target.files[0]) // Store the file object
  }

  const handleItemContentChange = (itemIndex, event) => {
    const updatedItems =
      language === "en"
        ? [...englishItems]
        : language === "ar"
        ? [...arabicItems]
        : [...spanishItems]

    if (
      updatedItems[itemIndex].type === "image" ||
      updatedItems[itemIndex].type === "pdf"
    ) {
      const file = event?.target?.files[0] // Get the selected file

      if (file) {
        const reader = new FileReader()

        // Update file name immediately
        updatedItems[itemIndex].file = file

        // Use FileReader to preview the image
        reader.onload = e => {
          updatedItems[itemIndex].file_path = e.target.result // Set the preview URL (base64 string)
          language === "en"
            ? setEnglishItems([...updatedItems])
            : language === "ar"
            ? setArabicItems([...updatedItems])
            : setSpanishItems([...updatedItems])
        }

        reader.readAsDataURL(file) // Read the file and trigger onload
      }
    } else {
      updatedItems[itemIndex].content = event.target.value
      language === "en"
        ? setEnglishItems([...updatedItems])
        : language === "ar"
        ? setArabicItems([...updatedItems])
        : setSpanishItems([...updatedItems])
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const formDataToSend = new FormData()

    // Append all form fields to FormData
    for (const key in formData) {
      formDataToSend.append(key, formData[key])
    }

    if (image) {
      formDataToSend.append("image", image) // Append the main image file
    }

    const selectedItems =
      language === "en"
        ? englishItems
        : language === "ar"
        ? arabicItems
        : spanishItems

    selectedItems.forEach((item, index) => {
      formDataToSend.append(`items[${index}][type]`, item.type)
      formDataToSend.append(`items[${index}][content]`, item.content)
      formDataToSend.append(`items[${index}][language]`, item.language)
      formDataToSend.append(`items[${index}][order]`, item.order)

      // Append the file if it's an image or PDF
      if (item.file) {
        formDataToSend.append(`items[${index}][file]`, item.file) // Dynamic field name for file
      }
    })

    try {
      const response = await axios.post("/api/posts", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      if (response.status === 201) {
        Swal.fire("Success", "Post created successfully", "success")
        navigate("/admin/blog")
      }
    } catch (error) {
      console.error("Error creating post:", error)
      Swal.fire(
        "Error",
        "There was an error creating the post. Please try again.",
        "error"
      )
    }
  }

  const addNewItem = type => {
    const newItem = {
      order:
        language === "en"
          ? englishItems.length
          : language === "ar"
          ? arabicItems.length
          : spanishItems.length,
      content: "",
      type,
      language: language,
    }

    const updatedItems =
      language === "en"
        ? [...englishItems]
        : language === "ar"
        ? [...arabicItems]
        : [...spanishItems]
    updatedItems.push(newItem)

    language === "en"
      ? setEnglishItems([...updatedItems])
      : language === "ar"
      ? setArabicItems([...updatedItems])
      : setSpanishItems([...updatedItems])
  }

  const onItemsSortEnd = ({ oldIndex, newIndex }) => {
    const updatedItems =
      language === "en"
        ? [...englishItems]
        : language === "ar"
        ? [...arabicItems]
        : [...spanishItems]

    const sortedItems = arrayMove(updatedItems, oldIndex, newIndex).map(
      (item, idx) => {
        return { ...item, order: idx }
      }
    )

    language === "en"
      ? setEnglishItems([...sortedItems])
      : language === "ar"
      ? setArabicItems([...sortedItems])
      : setSpanishItems([...sortedItems])
  }

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <Link className="" to="/admin/blog">
            <ArrowBack fontSize="medium" />
          </Link>
          <Title>Create New Post</Title>
        </div>
        <Select
          divClassNames="!flex-row items-center gap-2"
          label="Language:"
          id="language"
          name="language"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="es">Spanish</option>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </Select>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col grow">
        {language === "es" && (
          <Input
            label="Title"
            type="text"
            name="title_es"
            value={formData.title_es}
            onChange={handleChange}
          />
        )}
        {language === "en" && (
          <Input
            label="Title"
            type="text"
            name="title_en"
            value={formData.title_en}
            onChange={handleChange}
          />
        )}
        {language === "ar" && (
          <Input
            label="Title"
            type="text"
            name="title_ar"
            value={formData.title_ar}
            onChange={handleChange}
          />
        )}
        {language === "en" && (
          <Textarea
            label="Summary"
            type="text"
            name="summary_en"
            value={formData.summary_en}
            onChange={handleChange}
          />
        )}
        {language === "ar" && (
          <Textarea
            label="Summary"
            type="text"
            name="summary_ar"
            value={formData.summary_ar}
            onChange={handleChange}
          />
        )}
        {language === "es" && (
          <Textarea
            label="Summary"
            type="text"
            name="summary_es"
            value={formData.summary_es}
            onChange={handleChange}
          />
        )}
        <div className="mb-2 font-medium text-slate-500 text-sm">Content</div>

        {(language === "es" && spanishItems.length) ||
        (language === "en" && englishItems.length) ||
        (language === "ar" && arabicItems.length) ? (
          <ItemsList
            useDragHandle
            onSortEnd={onItemsSortEnd}
            handleItemContentChange={handleItemContentChange}
            items={
              language === "en"
                ? englishItems
                : language === "ar"
                ? arabicItems
                : spanishItems
            }
            setItems={
              language === "en"
                ? setEnglishItems
                : language === "ar"
                ? setArabicItems
                : setSpanishItems
            }
            language={language}
            key={language}
          />
        ) : (
          <div className="p-4 shadow">
            There is no content currently, add new content by clicking one of
            the buttons below
          </div>
        )}

        <div className="flex justify-between mt-4 px-8">
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
        <Button type="submit">Create Post</Button>
      </form>
    </div>
  )
}

export default CreatePost
