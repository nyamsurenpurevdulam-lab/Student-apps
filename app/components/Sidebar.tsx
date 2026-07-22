"use client";
import { useState } from "react";
export default function Sidebar(){
const [open,setOpen] = useState(true);
return(
<>
<button onClick={()=>setOpen(!open)}>
☰
</button>
{open && (
<aside className="sidebar">

<h2>Student App</h2>
<nav>
<a>Нүүр</a>
<a>Сурагч</a>
<a>Багш</a>
<a>Тохиргоо</a>
</nav>
</aside>
)}
</>
)
}