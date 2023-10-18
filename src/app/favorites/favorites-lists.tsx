"use client"
import { ImageGrid } from "@/components/image-grid";
import { CloudinaryImage } from "../../components/cloudinary-image";
import { SearchResult } from "../gallery/page";
import { useEffect, useState } from "react";


export default function FavoriteList({initialResources}: {initialResources: SearchResult[] }){

    const [resources, setResources] = useState(initialResources)

    useEffect(()=>{
      setResources(initialResources)
    }, initialResources)
    return (
      <ImageGrid images={resources} getImage={(imageData: SearchResult)=>{
        return (
          <CloudinaryImage  
          
          key={imageData.public_id}
          imageData={imageData}
          width="400"
          height="300"
          alt="Description of my image"
          onUnheart = {(unheartedResource)=>{
            setResources((currentResources)=>  currentResources.filter((resource)=>resource.public_id !== unheartedResource.public_id))
          }}
        />
        )
      }}/>
       
  
    )
}