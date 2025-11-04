import {
  DocumentMagnifyingGlassIcon,
  TrashIcon,
} from "@heroicons/react/24/outline"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Swal from "sweetalert2"
import ReactLoading from "react-loading"
import { Link } from "gatsby"
import ViewSaudiApplyModal from "./ViewSaudiApplyModal"

export default function SaudiApplies() {
  function toDate(timestamp) {
    const date = new Date(timestamp)
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  }

  const [loading, setLoading] = useState(true)
  const [viewModalShow, setViewModalShow] = useState(false)
  const [toView, setToView] = useState({})
  const [itemsList, setItemsList] = useState([])

  function getSaudiApplies() {
    axios
      .get("/api/get-saudi-applications")
      .then(res => {
        setItemsList(res.data)
        setLoading(false)
      })
      .catch(err => {
        Swal.fire("Error", err?.response?.data?.message, "error")
      })
  }

  useEffect(() => {
    getSaudiApplies()
  }, [])

  const deleteItem = (e, item) => {
    e.preventDefault()
    Swal.fire({
      title: "Delete Application",
      text: `Are you sure to delete the application from ${item.coName}?`,
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: "Cancel",
      confirmButtonColor: "#df4759",
      denyButtonColor: "#d9e2ef",
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/delete-saudi-apply/${item.id}`)
          .then(res => {
            Swal.fire("Success", res.data.message, "success")
            getSaudiApplies()
          })
          .catch(err => {
            Swal.fire("Error", err?.response?.data?.message, "error")
          })
      }
    })
  }

  if (loading) {
    return <ReactLoading />
  }

  const items_HTMLTABLE =
    itemsList.length > 0 ? (
      <>
        <div className="grid grid-cols-12 mx-0 text-center">
          <div className="hidden md:block col-span-1 pb-3 text-start">ID</div>
          <div className="col-span-6 md:col-span-3 pb-3 text-start">
            Company Name
          </div>
          <div className="hidden md:block col-span-4">Activity</div>
          <div className="col-span-3 md:col-span-2">Submission Date</div>
          <div className="flex justify-end md:justify-center col-span-3 md:col-span-2">
            Actions
          </div>
        </div>
        {itemsList.map(item => (
          <div
            key={item.id}
            className="grid grid-cols-12 mx-0 border-b-1 text-center"
          >
            <div className="hidden md:block col-span-1 pt-3 text-start">
              {item.id}
            </div>
            <div className="col-span-6 md:col-span-3 pt-3 text-start">
              {item.coName}
            </div>
            <div className="hidden md:block col-span-4 pt-3">
              {item.activity}
            </div>
            <div className="col-span-3 md:col-span-2 pt-3">
              {toDate(item.created_at)}
            </div>
            <div className="col-span-3 md:col-span-2 pt-3 text-center">
              <div className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-6 sm:text-center text-end">
                  <button
                    type="button"
                    className="p-0 btn"
                    onClick={() => {
                      setToView(item)
                      setViewModalShow(true)
                    }}
                  >
                    <DocumentMagnifyingGlassIcon
                      className="block w-8 h-8 text-blue-600"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="col-span-12 sm:col-span-6 sm:text-center text-end">
                  <button
                    type="button"
                    className="p-0 btn"
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
        ))}
      </>
    ) : (
      <div className="flex flex-col justify-center items-center gap-4 h-[25vh] text-center">
        <h3 className="font-bold text-2xl">No Saudi Applications Found</h3>
      </div>
    )

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="rounded-lg shadow-lg">
        <div className="p-4 rounded-t-lg bg-gray-100">
          <h5 className="mb-3">Saudi Applications ( {itemsList.length} )</h5>
        </div>
        <div className="p-5">{items_HTMLTABLE}</div>
      </div>
      <ViewSaudiApplyModal
        show={viewModalShow}
        hide={() => {
          setViewModalShow(false)
          getSaudiApplies()
        }}
        toview={toView}
      />
    </div>
  )
}
