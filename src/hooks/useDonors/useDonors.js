import { useEffect, useState } from "react"

const useDonors = () => {
  const [donorsLoader, setDonorsLoader] = useState(true);
  const [allDonors, setAllDonors] = useState();
  useEffect(() => {
    fetch('https://croudfunding-server.vercel.app/donate')
    .then(res=>res.json())
      .then(result => {
        setAllDonors(result)
        setDonorsLoader(false)
    })
  }, [])
  return [allDonors,donorsLoader]
}
export default useDonors