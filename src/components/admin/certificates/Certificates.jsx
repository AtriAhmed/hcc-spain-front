import {
  DocumentMagnifyingGlassIcon,
  InboxIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Swal from "sweetalert2"
import ReactLoading from "react-loading"
import classNames from "../../../lib/classNames"
import AddCertificateCmp from "./AddCertificateCmp"
import EditCertificateCmp from "./EditCertificateCmp"
import ViewCertificateCmp from "./ViewCertificateCmp"

export default function Certificates() {
  const [loading, setLoading] = useState(true)
  const [itemsList, setItemsList] = useState([])
  const [modalShow, setModalShow] = useState(false)
  const [editModalShow, setEditModalShow] = useState(false)
  const [viewModalShow, setViewModalShow] = useState(false)
  const [toEdit, setToEdit] = useState({})
  const [toView, setToView] = useState({})

  function getItems() {
    axios
      .get("/api/get-certificates")
      .then(res => {
        setItemsList(res.data)
        setLoading(false)
      })
      .catch(err => {
        Swal.fire("Error", err.response.data.message, "error")
      })
  }
  useEffect(() => {
    getItems()
    return
  }, [])

  function deleteItem(item) {
    Swal.fire({
      title: "Delete Certificate",
      text: `Are you sure to delete the certificate for the product ${item.productName} of manufacturer ${item.manufacturer}  ?`,
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
      confirmButtonColor: "#df4759",
      denyButtonColor: "#d9e2ef",
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/delete-certificate/${item.id}`)
          .then(res => {
            Swal.fire("Success", res.data.message, "success")
            getItems()
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

  var items_HTMLTABLE = []
  if (itemsList.length > 0) {
    items_HTMLTABLE = (
      <>
        <div className="mx-0 grid grid-cols-12 text-center break-all">
          <div className="pb-3 text-start hidden sm:block sm:col-span-3">
            Manufacturer
          </div>
          <div className="pb-3 col-span-6 sm:col-span-3 text-start sm:text-center">
            Product
          </div>
          <div className="pb-3 col-span-2 sm:col-span-3 text-center">
            Certif
          </div>
          <div className="pb-3 text-end sm:text-center col-span-4 sm:col-span-3">
            Actions
          </div>
        </div>
        <div className="divide-y">
          {itemsList.map(item => {
            return (
              <div
                key={item.id}
                className="mx-0 grid grid-cols-12 text-center break-all"
              >
                <div className="pt-3 hidden sm:block sm:col-span-3 text-start">
                  {item.manufacturer}
                </div>
                <div className="pt-3 hidden sm:block text-center sm:col-span-3">
                  {item.productName}
                </div>
                <div className="pt-3 items-start sm:hidden col-span-6 flex flex-col">
                  <div className="font-bold">{item.productName}</div>
                  <div className="text-sm">{item.manufacturer}</div>
                </div>
                <div className="pt-3 col-span-2 sm:col-span-3 text-center">
                  <button
                    type="button"
                    onClick={e => {
                      setToView(item)
                      setViewModalShow(true)
                    }}
                  >
                    <DocumentMagnifyingGlassIcon className="block h-8 w-8 text-blue-600" />
                  </button>
                </div>
                <div className="pt-3 text-end sm:text-center col-span-4 sm:col-span-3">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-6 text-end sm:text-center">
                      <button
                        type="button"
                        className="btn p-0"
                        onClick={e => {
                          setToEdit(item)
                          setEditModalShow(true)
                        }}
                      >
                        <PencilSquareIcon
                          className={classNames(
                            "text-blue-600",
                            "block h-8 w-8"
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div className="col-span-12 sm:col-span-6 text-end sm:text-center">
                      <button
                        type="button"
                        className="btn p-0"
                        onClick={() => {
                          deleteItem(item)
                        }}
                      >
                        <TrashIcon
                          className={classNames(
                            "text-red-600",
                            "block h-8 w-8"
                          )}
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
    )
  } else {
    items_HTMLTABLE = (
      <div className="flex flex-col gap-4 items-center justify-center text-center h-[25vh]">
        <InboxIcon className="block h-20 w-20" aria-hidden="true" />
        <h3 className="text-2xl font-bold">Theres no Certificates</h3>
      </div>
    )
  }
  return (
    <>
      <div className="max-w-[80rem] md:p-5 mx-auto">
        <div className="rounded-lg shadow-lg">
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-t-lg">
            <h5 className="">Certificates ( {itemsList.length} )</h5>
            <button
              type="button"
              className="bg-blue-600 text-white p-2 rounded"
              onClick={() => {
                setModalShow(true)
              }}
            >
              Add Certificate
            </button>
          </div>
          <div className="p-5">{items_HTMLTABLE}</div>
        </div>
      </div>
      <AddCertificateCmp
        show={modalShow}
        hide={() => {
          setModalShow(false)
          getItems()
        }}
      />
      <EditCertificateCmp
        show={editModalShow}
        hide={() => {
          setEditModalShow(false)
          getItems()
        }}
        toedit={toEdit}
      />
      <ViewCertificateCmp
        show={viewModalShow}
        hide={() => {
          setViewModalShow(false)
        }}
        toview={toView}
      />
    </>
  )
}
