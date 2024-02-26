import { Alert } from "@mui/material"

function AdminHome() {
  return (
    <section className="w-full flex items-start p-10 justify-center">
      <div className="lg:w-[1200px] flex items-center justify-center">
        <Alert
          className="w-full"
          severity="warning"
        >
          Coming Soon
        </Alert>
      </div>
    </section>
  )
}
export default AdminHome
