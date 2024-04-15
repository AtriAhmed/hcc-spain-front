import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CheckCertificate from '../../components/certificates/CheckCertificate'

export default function index({location,params}) {

    return <CheckCertificate location={location} params={params} />
}