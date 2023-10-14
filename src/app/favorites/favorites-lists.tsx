"use client"
import { CloudinaryImage } from "../gallery/cloudinary-image";
import { SearchResult } from "../gallery/page";
import { useEffect, useState } from "react";


export default function FavoriteList({initialResources}: {initialResources: SearchResult[] }){

    const [resources, setResources] = useState(initialResources)

    useEffect(()=>{
      setResources(initialResources)
    }, initialResources)
    return (

        <div className="grid grid-cols-4 gap-4">
        {resources.map(result=> (
          <CloudinaryImage  
          key={result.public_id}
          imageData={result}
          width="400"
          height="300"
          alt="Description of my image"
          onUnheart = {(unheartedResource)=>{
            setResources((currentResources)=>  currentResources.filter((resource)=>resource.public_id !== unheartedResource.public_id))
          }}
        />
          ))}
        </div>
       
  
    )
}