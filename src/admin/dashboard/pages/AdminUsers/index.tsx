import { Button } from "@mui/material"
import { FaPlus } from "react-icons/fa"
import { users } from "../../../../utils/users"
import { FaTrash } from "react-icons/fa"
import { FaRegEdit } from "react-icons/fa"
function AdminUsers() {
  const user = users
  return (
    <section className="w-full h-screen flex items-start p-10 justify-center">
      <div className="lg:w-[1200px] flex flex-col gap-y-10">
        <div className="flex items-center justify-end">
          <Button
            startIcon={<FaPlus />}
            className="!bg-[#212B36] !text-[15px] !font-semibold !rounded-lg"
            variant="contained"
          >
            Yeni Kullanıcı
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
          {user.map((users) => (
            <div className="w-full flex justify-between items-center text-[15px] font-thin text-[#212B36] hover:bg-slate-100 transition-all border-b border-dashed p-6 h-20">
              <div className="flex border-r">
                <div className="w-56 overflow-hidden flex items-center gap-x-2">
                  <span> {users.userName}</span>
                </div>
                <div className="w-[300px] overflow-hidden flex items-center gap-x-2">
                  <span>{users.email}</span>
                </div>
                <div className="w-[300px] overflow-hidden flex items-center gap-x-2">
                  <span className="font-bold">{users.şifre}</span>
                </div>
              </div>
              <div className="flex gap-x-4">
                <Button
                  className="!bg-blue-500 !rounded-lg"
                  variant="contained"
                >
                  <FaRegEdit className="text-[20px]" />
                </Button>
                <Button
                  className="!bg-red-500 text-[20px] !rounded-lg"
                  variant="contained"
                >
                  <FaTrash />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminUsers
