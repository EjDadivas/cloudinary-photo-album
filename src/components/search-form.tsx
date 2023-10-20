"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export function SearchForm({initialSearch}:{initialSearch: string})  {
    const [tagName, setTagName] = useState(initialSearch ?? "")
    const router = useRouter()

    useEffect(()=>{
        setTagName(initialSearch)
    }, [initialSearch])
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            router.replace(`gallery?search=${encodeURIComponent(tagName)}`)
            router.refresh
        }}>
             <Label htmlFor="tag-name" className="text-right">
                    Search by Tag
                </Label>
                <div className="flex gap-2">
                <Input 
                    onChange={(e) => setTagName(e.target.value)}
                    id="tag-name" value={tagName} className="col-span-3" />
                <Button type="submit">Search</Button>
                </div>
        </form>
    )
}