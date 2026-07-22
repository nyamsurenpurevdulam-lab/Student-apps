"use client"
import { useState } from "react"
import { Camera, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
export default function Profile() {
  const [image, setImage] = useState("/profile.png")
  const handleImage = (e:any)=>{
    const file = e.target.files[0]
    if(file){
      setImage(URL.createObjectURL(file))
    }
  }
  return (
    <div className="card">
      <h2>Хувийн мэдээлэл</h2>
      <p>
        Өөрийн мэдээллийг шинэчилнэ үү.
      </p>
      <div className="avatar-box">
        <img 
          src={image}
          width="120"
          height="120"
        />
        <label>
          <Camera />
          <input 
            type="file"
            hidden
            onChange={handleImage}
          />
        </label>
      </div>
      <form>
        <label>Овог</label>
        <input 
          placeholder="Батбаяр"
        />
        <label>Нэр</label>
        <input 
          placeholder="Мөнхөө"
        />
        <label>Анги</label>
        <input 
          placeholder="10а"
        />
        <label>Эрэмбэ</label>
        <input 
          placeholder="15"
        />
        <label>Асран хамгаалагч</label>
        <input 
          placeholder="Нэр, Утас"
        />
        <Button>
          Хадгалах
        </Button>
        <Button variant="destructive">
          <LogOut/>
          Системээс гарах
        </Button>
      </form>
    </div>
  )
}