import { ForceRefresh } from "@/components/force-refresh";
import { CloudinaryImage } from "../gallery/cloudinary-image";
import { SearchResult } from "../gallery/page";


import cloudinary from "cloudinary"
import FavoriteList from "./favorites-lists";



export default async function GalleryPage(){
   const results = (await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at','desc')
    .with_field("tags")
    .max_results(20)
    .execute()) as {resources: SearchResult[]}
    console.log(results)

    return (
    <section>
        <ForceRefresh/>
        <div className="flex flex-col gap-8">
        <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Favorites</h1>
          
        </div>
        <FavoriteList initialResources={results.resources}/>
  
        </div>
    </section>
    )
}