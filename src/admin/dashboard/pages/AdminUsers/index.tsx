import UsersTable from "./userTable"
import { FaPlus } from "react-icons/fa"
import { Button } from "@mui/material"
import { createModal } from "../../../../store/modal/hook"

function AdminUsers() {
  return (
    <section className="w-full flex items-start p-10 justify-center">
      <div className="lg:w-[1200px] w-[350px] flex flex-col gap-y-10">
        <div className="flex items-center justify-end">
          <Button
            onClick={() => createModal("register")}
            startIcon={<FaPlus />}
            className="!bg-[#212B36] !text-[15px] !font-semibold !rounded-lg"
            variant="contained"
          >
            New User
          </Button>
        </div>
        <div className="w-full ">
          <UsersTable />
        </div>
      </div>
    </section>
  )
}

export default AdminUsers
