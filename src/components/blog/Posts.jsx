import { InboxIcon } from "@heroicons/react/24/outline"
import axios from "axios"
import React, { useEffect, useState } from "react"
import ReactLoading from "react-loading"
import Post from "./Post"
import Swal from "sweetalert2"

export default function Posts({
  limit,
  searchQuery,
  currentPage,
  setTotalPages,
  gridCols,
}) {
  const [loading, setLoading] = useState(true)
  const [itemsList, setItemsList] = useState([])

  function getPosts(query, page = currentPage) {
    setLoading(true)
    axios
      .get(`/api/get-active-posts/${limit ? limit : ""}`, {
        params: { query, page },
      })
      .then(res => {
        setItemsList(res.data.data)
        setTotalPages(res.data.last_page) // Get total pages from response
        setLoading(false)
      })
      .catch(err => {
        // Swal.fire('Error', err?.response?.data?.message, "error");
        setLoading(false)
      })
  }

  useEffect(() => {
    getPosts(searchQuery, currentPage)
  }, [searchQuery, currentPage])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ReactLoading
          type="spinningBubbles"
          color="rgb(20,184,166)"
          height={50}
          width={50}
        />
      </div>
    )
  }

  return (
    <div className="py-10">
      {itemsList?.length > 0 ? (
        <>
          <div className={`grid gap-4 ${gridCols || ""}`}>
            {itemsList.map(item => (
              <Post key={item.id} post={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 h-[25vh] text-center">
          <InboxIcon className="block w-20 h-20" aria-hidden="true" />
          <h3 className="font-bold text-2xl">
            {searchQuery
              ? "No se encontraron resultados para tu búsqueda. ¡Intenta usar palabras clave diferentes o vuelve más tarde!"
              : "Parece que aún no tenemos ninguna entrada de blog. ¡Mantente atento a las actualizaciones o vuelve pronto!"}
          </h3>
        </div>
      )}
    </div>
  )
}
