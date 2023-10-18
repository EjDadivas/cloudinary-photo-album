"use client"
import Heart from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { setAsFavoriteAction } from "../app/gallery/actions";
import { ComponentProps, useState, useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import FullHeart from "@/components/icons/full-heart";
import { ImageMenu } from './image-menu';

export function CloudinaryImage(props:{
    imageData: SearchResult; 
     onUnheart?: (unheartedResource: SearchResult) => void;
    }
    & Omit<CldImageProps, "src">
    ){
    const [transition, startTransition] = useTransition();
    const {imageData, onUnheart} = props;
    const [isFavorited, setisFavorited] = useState(imageData.tags.includes("favorite"))
    return (
        <div className="relative">
            <CldImage {...props} src={imageData.public_id} />
           {isFavorited ? 
             <FullHeart className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer" 
             onClick={()=>{
                onUnheart?.(imageData)
                setisFavorited(false)
                 startTransition(()=>{
                     setAsFavoriteAction(imageData.public_id, false)
                 });
             }} />
           : 
           <Heart className="absolute top-2 left-2 hover:text-red-500 cursor-pointer" 
           onClick={()=>{
            setisFavorited(true)

               startTransition(()=>{
                   setAsFavoriteAction(imageData.public_id, true)
               });
           }}/>
           }
           <ImageMenu/>
        </div>
    )
}