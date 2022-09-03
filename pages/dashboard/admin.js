import React from 'react'
import { auth } from "firebase/auth"
import getLoginState from '../../utils/loginState'
import { Router, useRouter } from 'next/router'
import { child, get, getDatabase, ref } from 'firebase/database'
 
function AdminDashboard({db}) {
  

  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard