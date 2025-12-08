import {
  InboxIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Swal from "sweetalert2"
import ReactLoading from "react-loading"
import { Link } from "../../../contexts/TranslationContext"

export default function Blogs() {
  const [loading, setLoading] = useState(true)
  const [itemsList, setItemsList] = useState([])

  function getBlogs() {
    axios
      .get("/api/get-posts")
      .then(res => {
        setItemsList(res.data)
        setLoading(false)
      })
      .catch(err => {
        Swal.fire("Error", err.response.data.message, "error")
      })
  }
  useEffect(() => {
    getBlogs()
    return
  }, [])

  const deleteItem = (e, item) => {
    e.preventDefault()

    Swal.fire({
      title: "Delete Blog",
      text: `Are you sure to delete ${
        item.title_es || item.title_en || item.title_ar
      } ?`,
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
      confirmButtonColor: "#df4759",
      denyButtonColor: "#d9e2ef",
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/posts/${item.id}`)
          .then(res => {
            Swal.fire("Success", res.data.message, "success")
            getBlogs()
          })
          .catch(err => {
            if (err.response.data.status === 404) {
              Swal.fire("Erreur", err.response.data.message, "error")
            } else if (err.response.status === 401) {
              Swal.fire("Error", err.response.data.message, "error")
            }
          })
      } else if (result.isDenied) {
      }
    })
  }
  if (loading) {
    return (
      <ReactLoading
        type="spinningBubbles"
        color="white"
        height={25}
        width={25}
      />
    )
  }

  return (
    <>
      <div className="max-w-[80rem] mx-auto p-2 sm:p-5">
        <div className="rounded-lg shadow-lg">
          <div className="flex justify-between items-center p-3 rounded-t-lg bg-gray-100">
            <h5 className="mb-3">Posts ( {itemsList.length} )</h5>
            <Link
              to="/admin/blog/create"
              className="p-2 rounded bg-blue-600 text-white"
            >
              Create Post
            </Link>
          </div>
          <div className="p-5">
            {itemsList?.length > 0 ? (
              <>
                <div className="grid grid-cols-12 mx-0 text-center break-all">
                  <div className="hidden sm:block col-span-1 pb-3 text-start">
                    ID
                  </div>
                  <div className="col-span-3 pb-3 text-start">Image</div>
                  <div className="col-span-6 sm:col-span-4 pb-3 text-start">
                    Title
                  </div>
                  <div className="col-span-2 pb-3">Status</div>
                  <div className="hidden sm:block col-span-2 pb-3 sm:text-center text-end">
                    Actions
                  </div>
                </div>
                <div className="divide-y">
                  {itemsList?.map(item => {
                    return (
                      <div
                        key={item.id}
                        className="grid grid-cols-12 mx-0 text-center break-all"
                      >
                        <div className="hidden sm:block col-span-1 pt-3 text-start">
                          {item.id}
                        </div>
                        <div className="col-span-3 pt-3">
                          <img
                            className="w-[70px] sm:w-[130px] md:w-[160px]"
                            src={`${process.env.GATSBY_API_URL}${item.image}`}
                            alt=""
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-4 pt-3 text-start">
                          <div className="font-bold">
                            {item.title_es || item.title_en || item.title_ar}
                          </div>{" "}
                        </div>
                        <div className="col-span-2 pt-3">
                          {item.status == 1 ? "active" : "hidden"}
                        </div>
                        <div className="col-span-1 sm:col-span-2 pt-3 sm:text-center text-end">
                          <div className="grid grid-cols-12">
                            <div className="flex justify-end sm:justify-center col-span-12 sm:col-span-6">
                              <Link
                                className="text-center"
                                to={`/admin/blog/${item.slug}`}
                              >
                                <PencilSquareIcon
                                  className="block w-8 h-8 text-blue-600"
                                  aria-hidden="true"
                                />
                              </Link>
                            </div>
                            <div className="flex justify-end sm:justify-center col-span-12 sm:col-span-6">
                              <button
                                type="button"
                                onClick={e => {
                                  deleteItem(e, item)
                                }}
                              >
                                <TrashIcon
                                  className="block w-8 h-8 text-red-600"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-center items-center gap-4 h-[25vh] text-center">
                <InboxIcon className="block w-20 h-20" aria-hidden="true" />
                <h3 className="font-bold text-2xl">Theres no posts</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
