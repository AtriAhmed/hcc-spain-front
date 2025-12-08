import React, { useState } from "react"
import Modal from "../../Modal"
import ReactLoading from "react-loading"
import axios from "axios"
import Button from "../../Button"

function sendRequest(
  coName,
  coAddress,
  regNB,
  activity,
  empNB,
  cPerson,
  cEmail,
  cPhone,
  remark,
  qualCertif,
  prodReg,
  facCertif
) {
  const formData = new FormData()

  formData.append("coName", coName)
  formData.append("coAddress", coAddress)
  formData.append("regNB", regNB)
  formData.append("activity", activity)
  formData.append("empNB", empNB)
  formData.append("cPerson", cPerson)
  formData.append("cEmail", cEmail)
  formData.append("cPhone", cPhone)
  formData.append("remark", remark)
  formData.append("qualCertif", qualCertif)
  formData.append("prodReg", prodReg)
  formData.append("facCertif", facCertif)

  return axios.post("/api/create-saudi-application", formData)
}

export default function ConfirmSaudiApplyModal({
  hide,
  show,
  toView,
  setErrors,
  setSent,
}) {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (loading) return

    const coNameVal = toView?.coName.trim()
    const coAddressVal = toView?.coAddress.trim()
    const regNBVal = toView?.regNB.trim()
    const activityVal = (
      toView?.activity ? toView?.activity.map(opt => opt.value) : []
    ).join(", ")
    const empNBVal = toView?.empNB
    const cPersonVal = toView?.cPerson.trim()
    const cEmailVal = toView?.cEmail.trim()
    const cPhoneVal = toView?.cPhone.trim()
    const remarkVal = toView?.remark.trim()
    const qualCertifVal = (
      toView?.qualCertif ? toView?.qualCertif.map(opt => opt.value) : []
    ).join(", ")

    setLoading(true)
    try {
      await sendRequest(
        coNameVal,
        coAddressVal,
        regNBVal,
        activityVal,
        empNBVal,
        cPersonVal,
        cEmailVal,
        cPhoneVal,
        remarkVal,
        qualCertifVal,
        toView?.prodReg,
        toView.facCertif
      )
      setSent(true)
    } catch (err) {
      setErrors(err.response.data.errors)
    }
    setLoading(false)
  }

  return (
    <Modal title="Confirm your submission" hide={hide} show={show}>
      <p className="mb-4 text-gray-700">
        Please review your answers before final submission:
      </p>
      <ul className="text-gray-700 list-disc list-inside">
        <li>
          <strong>Company Name:</strong> <span>{toView?.coName}</span>
        </li>
        <li>
          <strong>Company Address:</strong> <span>{toView?.coAddress}</span>
        </li>
        <li>
          <strong>Registration Number:</strong> <span>{toView?.regNB}</span>
        </li>
        <li>
          <strong>Activity:</strong>{" "}
          <span>
            {(toView?.activity
              ? toView?.activity.map(opt => opt.value)
              : []
            ).join(", ")}
          </span>
        </li>
        <li>
          <strong>Full-time Employees:</strong> <span>{toView?.empNB}</span>
        </li>
        <li>
          <strong>Contact Person:</strong> <span>{toView?.cPerson}</span>
        </li>
        <li>
          <strong>Email:</strong> <span>{toView?.cEmail}</span>
        </li>
        <li>
          <strong>Phone:</strong> <span>{toView?.cPhone}</span>
        </li>
        <li>
          <strong>Remarks:</strong> <span>{toView?.remark}</span>
        </li>
        <li>
          <strong>Quality Certification:</strong>{" "}
          <span>
            {(toView?.qualCertif
              ? toView?.qualCertif.map(opt => opt.value)
              : []
            ).join(", ")}
          </span>
        </li>
        <li>
          <strong>Product Registration Form:</strong>
          <span>{toView?.prodReg?.name}</span>
        </li>
        <li>
          <strong>Factory Halal Certification:</strong>
          <span>{toView?.facCertif?.name}</span>
        </li>
      </ul>
      <div className="flex justify-end gap-4 mt-4">
        <Button
          customClassnames="bg-primary hover:bg-primaryHover"
          onClick={hide}
        >
          Cancel
        </Button>
        <Button
          customClassnames="bg-primary hover:bg-primaryHover flex gap-1"
          onClick={handleSubmit}
        >
          Confirm
          {loading && (
            <i className="">
              <ReactLoading
                type="spinningBubbles"
                color="white"
                height={25}
                width={25}
              />
            </i>
          )}
        </Button>
      </div>
    </Modal>
  )
}
