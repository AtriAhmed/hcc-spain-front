import React from "react"
import {
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  InformationCircleIcon,
  PencilSquareIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  UserPlusIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"
import { MosqueOutlined } from "@mui/icons-material"
import { Link } from "../../../contexts/TranslationContext"
import { useAuthContext } from "../../../contexts/AuthProvider"

const ICON_STYLE = "block h-6 w-6 flex-start"

const LINK_STYLE = "flex flex-row gap-4 p-4 no-underline"

export default function Sidebar() {
  const { user, setUser } = useAuthContext()
  return (
    <div className="lg:fixed flex flex-row lg:flex-col flex-wrap lg:flex-nowrap w-full lg:w-[250px] h-full overflow-auto pt-[4rem] bg-gray-800 shadow text-white sidebar">
      <Link to="/admin/" className={`${LINK_STYLE}`}>
        <HomeIcon className={`${ICON_STYLE}`} aria-hidden="true" />
        <span className="flex-end">Home</span>
      </Link>
      {user.role == 1 ? (
        <>
          <Link to="/admin/users" className={`${LINK_STYLE}`}>
            <UsersIcon className={`${ICON_STYLE}`} aria-hidden="true" />
            <span>Users</span>
          </Link>

          <Link to="/admin/users-requests" className={`${LINK_STYLE}`}>
            <UserPlusIcon className={`${ICON_STYLE}`} aria-hidden="true" />
            <span>Users Request</span>
          </Link>

          <Link to="/admin/certificates" className={`${LINK_STYLE}`}>
            <ClipboardDocumentCheckIcon
              className={`${ICON_STYLE}`}
              aria-hidden="true"
            />
            <span>Certificates</span>
          </Link>
        </>
      ) : (
        <></>
      )}

      <Link to="/admin/feedbacks" className={`${LINK_STYLE}`}>
        <ChatBubbleLeftRightIcon
          className={`${ICON_STYLE}`}
          aria-hidden="true"
        />
        <span>Feedbacks</span>
      </Link>

      <Link to="/admin/questions" className={`${LINK_STYLE}`}>
        <InformationCircleIcon className={`${ICON_STYLE}`} aria-hidden="true" />
        <span>Questions</span>
      </Link>

      <Link to="/admin/complaints" className={`${LINK_STYLE}`}>
        <ExclamationTriangleIcon
          className={`${ICON_STYLE}`}
          aria-hidden="true"
        />
        <span>Complaints</span>
      </Link>

      <Link to="/admin/checks" className={`${LINK_STYLE}`}>
        <QuestionMarkCircleIcon
          className={`${ICON_STYLE}`}
          aria-hidden="true"
        />
        <span>Checks</span>
      </Link>

      <Link to="/admin/applies" className={`${LINK_STYLE}`}>
        <PlusIcon className={`${ICON_STYLE}`} aria-hidden="true" />
        <span>Applies</span>
      </Link>

      <Link to="/admin/saudi-applies" className={`${LINK_STYLE}`}>
        <MosqueOutlined className={`${ICON_STYLE}`} aria-hidden="true" />
        <span>Saudi Applications</span>
      </Link>

      <Link to="/admin/blog" className={`${LINK_STYLE}`}>
        <PencilSquareIcon className={`${ICON_STYLE}`} aria-hidden="true" />
        <span>Blog</span>
      </Link>
    </div>
  )
}
