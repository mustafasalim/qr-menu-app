import UsersTable from "./userTable"
import { FaPlus } from "react-icons/fa"
import { Button } from "@mui/material"
import { createModal } from "../../../../context/Modal/hook"
import { users as user } from "../../../../utils/users"
import { useState } from "react"
function AdminUsers() {
  const [data, setData] = useState(user)

  console.log(data)

  return (
    <section className="w-full h-screen flex items-start p-10 justify-center">
      <div className="lg:w-[1200px] flex flex-col gap-y-10">
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
        <div className="w-full  shadow rounded-2xl overflow-hidden text-[15px]">
          <div className="w-full flex items-center  bg-[#F4F6F8] font-bold justify-between p-6 text-grey-300">
            <div className="flex border-r">
              <div className="w-56 overflow-hidden flex items-center gap-x-2 ">
                <span>Kullanıcı Adı</span>
              </div>
              <div className="w-[300px] overflow-hidden flex items-center gap-x-2">
                <span>E-mail</span>
              </div>
              <div className="w-[300px] overflow-hidden flex items-center gap-x-2">
                <span>password</span>
              </div>
            </div>
            <div>Yönet</div>
          </div>
          {data.map((users: any, key) => (
            <UsersTable
              key={key}
              users={users}
              data={data}
              setData={setData}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminUsers
