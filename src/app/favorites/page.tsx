import { ForceRefresh } from "@/components/force-refresh";
import { CloudinaryImage } from "../gallery/cloudinary-image";
import { SearchResult } from "../gallery/page";


import cloudinary from "cloudinary"



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
        <div className="grid grid-cols-4 gap-4">
        {results.resources.map(result=> (
          <CloudinaryImage  
          path="favorites"
          key={result.public_id}
          imageData={result}
          width="400"
          height="300"
          alt="Description of my image"
        />
          ))}
        </div>
        </div>
    </section>
    )
}